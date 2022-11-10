import { useRecoilCallback } from 'recoil';
import { getSuggestions } from '../api/suggestion';
import { searchInputState } from '../recoil/searchBar';
import { suggestionState } from '../recoil/suggestion';
import debounce from '../utils/debounce';
import sortTrialData from '../utils/sortTiralData';

function useSetSuggestions() {
  const handleSuggestionChange = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const inputValue = await snapshot.getPromise(searchInputState);

        if (!inputValue) {
          return;
        }

        const prevValue = await snapshot.getPromise(suggestionState(inputValue));

        if (prevValue) {
          return;
        }

        const data = await getSuggestions(inputValue);
        console.info('calling api');
        set(suggestionState(inputValue), data.sort(sortTrialData(inputValue)));
      },
    []
  );

  return debounce(async () => {
    await handleSuggestionChange();
  }, 300);
}

export default useSetSuggestions;
