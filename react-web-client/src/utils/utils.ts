import * as uuid from 'uuid';

export const getUuid = (): string => {
  return uuid.v4();
};
