import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification/read-notification';
import { UnreadNotification } from '@application/use-cases/unred-notification/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
