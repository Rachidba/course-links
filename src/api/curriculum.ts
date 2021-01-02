import { Curriculum } from '../models/Curriculum';
import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL + '/curriculums/';

export function getCurriculums(): Promise<Curriculum[] | void | Response> {
  return fetch(baseUrl)
    .then((response) => handleResponse<Curriculum[]>(response))
    .catch(handleError);
}

export function getCurriculumBySlug(slug: string): Promise<Curriculum> {
  return fetch(baseUrl + '?slug=' + slug)
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok.');
      return response.json().then((curriculums) => {
        if (curriculums.length !== 1)
          throw new Error('Curriculums not found: ' + slug);
        return curriculums[0]; // should only find one curriculum for a given slug, so return it.
      });
    })
    .catch(handleError);
}

// export function saveCurriculum(curriculum: Curriculum): Promise<any> {
//   return fetch(baseUrl + (curriculum.id || ''), {
//     method: curriculum.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(curriculum),
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteCurriculum(curriculumId: number): {
//   return fetch(baseUrl + curriculumId, { method: 'DELETE' })
//     .then(handleResponse)
//     .catch(handleError);
// }
