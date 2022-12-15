import { GetRecipientNotifications } from './get-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get Recipient notification', () => {
  it('should be able to get a recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'id-exemple-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'id-exemple-1' }),
        expect.objectContaining({ recipientId: 'id-exemple-1' }),
      ]),
    );
  });
});
