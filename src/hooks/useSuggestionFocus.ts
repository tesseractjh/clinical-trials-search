function useSuggestionFocus(searchInputRef: React.RefObject<HTMLInputElement>) {
  const setInputValue = (value: string) => {
    if (!searchInputRef?.current) {
      return;
    }
    searchInputRef.current.value = value;
  };

  const handleFocus = ({ target }: React.FocusEvent) => {
    if (!(target instanceof HTMLElement) || !target.classList.contains('search-suggestion')) {
      return;
    }

    setInputValue(target.innerText);
  };

  return handleFocus;
}

export default useSuggestionFocus;
