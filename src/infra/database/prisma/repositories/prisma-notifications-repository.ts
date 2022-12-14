import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { Notification } from '../../../../domain/entities/notification/notification';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    console.log(this.prisma.notification.findMany());
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
