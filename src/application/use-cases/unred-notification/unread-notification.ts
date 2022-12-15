import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new Error('Notification not found');

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
