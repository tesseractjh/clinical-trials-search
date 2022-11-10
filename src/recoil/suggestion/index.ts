import { atomFamily } from 'recoil';

export const suggestionState = atomFamily<Sick[] | null, string>({
  key: 'suggestionState',
  default: null,
});
