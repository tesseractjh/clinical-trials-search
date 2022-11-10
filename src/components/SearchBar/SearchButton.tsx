import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as MagIcon } from '../../assets/icons/magnifier.svg';
import { searchInputState } from '../../recoil/searchBar';

function SearchButton() {
  const inputValue = useRecoilValue(searchInputState);
  return (
    <StyledButton href={`${process.env.REACT_APP_CLINICAL_TRIALS_KOREA}/?conditions=${inputValue}`}>
      <MagIcon />
    </StyledButton>
  );
}

const StyledButton = styled.a`
  ${({ theme }) => theme.mixin.flex()}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.PRIMARY};

  & > svg {
    width: 21px;
    height: 21px;
    fill: ${({ theme }) => theme.color.WHITE};
  }
`;

export default SearchButton;
