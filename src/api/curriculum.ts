import { Curriculum } from '../models/Curriculum';
import API from './api';

export function getCurriculums(): Promise<Curriculum[]> {
  return API.get('curriculums').then((response) => response.data);
}

export function getCurriculumBySlug(slug: string): Promise<Curriculum> {
  return API.get(`curriculums?slug=${slug}`).then(
    // eslint-disable-next-line prettier/prettier
    (response) => response.data[0],
  );
}
