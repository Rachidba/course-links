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

export const emptyLesson = {
  id: -1,
  ownerId: -1,
  title: '',
  slug: '',
  description: '',
  link: '',
  resources: [],
};
