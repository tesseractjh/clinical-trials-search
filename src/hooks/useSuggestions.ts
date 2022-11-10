import { useRecoilValue } from 'recoil';
import { searchInputState } from '../recoil/searchBar';
import { suggestionState } from '../recoil/suggestion';

function useSuggestions() {
  const inputValue = useRecoilValue(searchInputState);
  const suggestions = useRecoilValue(suggestionState(inputValue));
  return { inputValue, suggestions };
}

export default useSuggestions;
