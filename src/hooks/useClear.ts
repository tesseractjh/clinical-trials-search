import React, { useCallback } from 'react';
import { useResetRecoilState } from 'recoil';
import { searchInputState } from '../recoil/searchBar';

function useClear(searchInputRef: React.RefObject<HTMLInputElement>) {
  const resetInput = useResetRecoilState(searchInputState);
  const handleClear = useCallback(() => {
    resetInput();
    searchInputRef.current?.focus();
  }, [searchInputRef]);

  return handleClear;
}

export default useClear;
