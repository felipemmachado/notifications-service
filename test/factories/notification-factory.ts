import { Content } from '@domain/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@domain/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    recipientId: 'id-exemple-1',
    content: new Content('notification example'),
    ...override,
  });
}
