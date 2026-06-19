import type { ComponentProps } from 'react';
import type { Ionicons } from '@expo/vector-icons';

export type LanguageCode = 'en' | 'es';

export type ButtonVariant = 'fill' | 'outline';

export type IoniconName = ComponentProps<typeof Ionicons>['name'];

export enum LessonStatus {
  Completed = 'completed',
  Active = 'active',
  Locked = 'locked',
}

export interface UserData {
  id: string;
  name: string;
  email: string;
}

export interface EventItem {
  event_date_id: string;
  title: string;
  date: string;
}
