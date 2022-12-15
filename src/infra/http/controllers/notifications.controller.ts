import { Controller, Post } from '@nestjs/common';

import { Body } from '@nestjs/common/decorators';
import { CreateNotificationDTO } from '../dtos/create-notification.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SendNotification } from '@application/use-cases/send-notification/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { Patch } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { CancelNotification } from '@application/use-cases/cancel-notification/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification/read-notification';
import { UnreadNotification } from '@application/use-cases/unred-notification/unread-notification';
import { Get } from '@nestjs/common';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications/get-recipient-notifications';
import { NotificationDTO } from '../dtos/notification.dto';

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get('count/form/:recipientId')
  async countFormRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return {
      count,
    };
  }

  @Get('form/:recipientId')
  async getFormRecipient(
    @Param('recipientId') recipientId: string,
  ): Promise<{ notifications: NotificationDTO[] }> {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }

  @Post()
  @ApiOperation({ summary: 'create a notification' })
  @ApiResponse({ status: 201, description: 'saved notification' })
  async create(@Body() body: CreateNotificationDTO) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
