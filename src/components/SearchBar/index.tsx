import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import Input from './Input';
import SuggestionList from './SuggestionList';
import ClearButton from './ClearButton';
import useClear from '../../hooks/useClear';
import useKeyboard from '../../hooks/useKeyboard';
import { ReactComponent as MagIcon } from '../../assets/icons/magnifier.svg';
import SearchButton from './SearchButton';

function SearchBar() {
  const { searchInputRef, isFocused } = useInput();
  const handleClear = useClear(searchInputRef);
  const { handleKeyDown } = useKeyboard(searchInputRef);

  return (
    <Container isFocused={isFocused} onKeyDown={handleKeyDown} className="search-bar">
      <MagIcon />
      <Input searchInputRef={searchInputRef} />
      {isFocused ? <SuggestionList /> : null}
      {isFocused ? <ClearButton onClick={handleClear} /> : null}
      <SearchButton />
    </Container>
  );
}

const Container = styled.div<{ isFocused: boolean }>`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  position: relative;
  width: 500px;
  height: 70px;
  padding: 0 10px 0 24px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.color.WHITE};
  ${({ isFocused, theme }) => (isFocused ? `outline: 2px solid ${theme.color.PRIMARY};` : '')}

  & > svg {
    width: 18px;
    height: 18px;
    margin-right: 12px;
    fill: ${({ theme }) => theme.color.GRAY};
  }
`;

export default SearchBar;
