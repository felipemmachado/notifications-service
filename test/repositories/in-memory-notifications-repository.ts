import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@domain/entities/notification/notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
