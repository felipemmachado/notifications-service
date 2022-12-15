import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count Recipient notification', () => {
  it('should be able to count a recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'id-exemple-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'id-exemple-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'id-exemple-2' }),
    );

    const count = await countRecipientNotifications.execute({
      recipientId: 'id-exemple-1',
    });

    expect(count.count).toEqual(2);
  });
});
