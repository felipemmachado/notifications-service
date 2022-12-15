import { Notification } from '@domain/entities/notification/notification';
import { NotificationDTO } from '../dtos/notification.dto';

export class NotificationViewModel {
  static toHTTP(notification: Notification): NotificationDTO {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
      readAt: notification.readAt,
    };
  }
}
