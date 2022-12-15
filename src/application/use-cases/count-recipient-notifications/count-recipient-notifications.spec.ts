import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '@domain/entities/notification/notification';
import { Content } from '@domain/entities/notification/content';

describe('Count Recipient notification', () => {
  it('should be able to count a recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        recipientId: 'id-exemple-1',
        content: new Content('notification example'),
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        recipientId: 'id-exemple-1',
        content: new Content('notification example'),
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        recipientId: 'id-exemple-2',
        content: new Content('notification example'),
      }),
    );

    const count = await countRecipientNotifications.execute({
      recipientId: 'id-exemple-1',
    });

    expect(count.count).toEqual(2);
  });
});
