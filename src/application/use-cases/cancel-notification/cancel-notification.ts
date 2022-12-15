import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new Error('Notification not found');

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
