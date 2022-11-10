import { useRecoilCallback } from 'recoil';
import { searchInputState } from '../recoil/searchBar';

function useKeyboard(searchInputRef: React.RefObject<HTMLInputElement>) {
  const restoreInputValue = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const inputValue = await snapshot.getPromise(searchInputState);
        if (!searchInputRef?.current) {
          return;
        }
        searchInputRef.current.value = inputValue;
      },
    [searchInputRef]
  );

  const handleKeyDown = ({ currentTarget, key }: React.KeyboardEvent) => {
    if (
      !document.activeElement ||
      (!document.activeElement.closest('.search-suggestion') && !(document.activeElement === searchInputRef?.current))
    ) {
      return;
    }

    const suggestions = [...currentTarget.querySelectorAll('.search-suggestion')];

    if (document.activeElement === searchInputRef.current) {
      if (key === 'Enter') {
        window.location.href = `${process.env.REACT_APP_CLINICAL_TRIALS_KOREA}?conditions=${searchInputRef.current.value}`;
      }

      if (key === 'ArrowDown') {
        const $nextSuggestion = suggestions[0];
        if ($nextSuggestion instanceof HTMLElement) {
          $nextSuggestion.focus();
        }
      }
      if (key === 'ArrowUp') {
        restoreInputValue();
      }
      return;
    }

    const curIndex = suggestions.indexOf(document.activeElement);

    if (key === 'ArrowDown') {
      const $nextSuggestion = suggestions[curIndex + 1];
      if ($nextSuggestion instanceof HTMLElement) {
        $nextSuggestion.focus();
      }
    }

    if (key === 'ArrowUp') {
      if (!curIndex) {
        searchInputRef.current?.focus();
        restoreInputValue();
        return;
      }

      const $prevSuggestion = suggestions[curIndex - 1];
      if ($prevSuggestion instanceof HTMLElement) {
        $prevSuggestion.focus();
      }
    }
  };

  return { handleKeyDown };
}

export default useKeyboard;
