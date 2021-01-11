import { Resource } from './Resource';

export interface Lesson {
  id: number;
  ownerId: number;
  title: string;
  slug: string;
  description: string;
  link: string;
  resources: Array<Resource>;
}
