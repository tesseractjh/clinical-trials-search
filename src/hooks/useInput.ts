import { useState, useRef, useEffect, useCallback } from 'react';

function useInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleFocusOut = useCallback(({ relatedTarget }: FocusEvent) => {
    if (relatedTarget instanceof HTMLElement && relatedTarget.closest('.search-bar')) {
      return;
    }
    setIsFocused(false);
  }, []);

  useEffect(() => {
    const { current: $searchBar } = searchInputRef;
    if ($searchBar) {
      $searchBar.addEventListener('focus', handleFocus);
      window.addEventListener('focusout', handleFocusOut);

      return () => {
        $searchBar.removeEventListener('focus', handleFocus);
        window.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [searchInputRef, handleFocus, handleFocusOut]);

  return { searchInputRef, isFocused };
}

export default useInput;
