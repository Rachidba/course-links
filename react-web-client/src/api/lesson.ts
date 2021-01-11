import { Lesson } from '../models/Lesson';
import API from './api';

export function getLessons(): Promise<Lesson[]> {
  return API.get('lessons').then((response) => response.data);
}

export function getLessonBySlug(slug: string): Promise<Lesson> {
  return API.get(`lessons?slug=${slug}`).then(
    // eslint-disable-next-line prettier/prettier
    (response) => response.data[0],
  );
}
