import { selector } from 'recoil';
import { exampleState } from '../state/exampleState';

export const exampleSelector = selector({
  key: 'exampleSelector',
  get: ({ get }) => {
    const state = get(exampleState);
    return state.toUpperCase();
  },
});
