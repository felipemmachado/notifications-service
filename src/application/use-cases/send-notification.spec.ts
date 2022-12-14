import { SendNotification } from './send-notification';
import { Notification } from '../../domain/entities/notification/notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'Você recebeu um nova notificao',
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
