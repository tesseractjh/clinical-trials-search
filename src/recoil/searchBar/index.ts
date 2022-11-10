import { atom } from 'recoil';

export const searchInputState = atom<string>({
  key: 'searchInputState',
  default: '',
});

export const searchInputRefState = atom<React.RefObject<HTMLInputElement> | null>({
  key: 'searchInputRefState',
  default: null,
});
