import { Controller, Post } from '@nestjs/common';

import { Body } from '@nestjs/common/decorators';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';
import { ApiTags } from '@nestjs/swagger';
import { SendNotification } from '../../../application/use-cases/send-notification';

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return { notification };
  }
}
