import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Você recebeu um nova notificao',
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notification).toBeTruthy();
  });
});
