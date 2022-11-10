import styled from 'styled-components';
import useSearchInput from '../../hooks/useSearchInput';

type Props = {
  searchInputRef: React.RefObject<HTMLInputElement>;
};

function Input({ searchInputRef }: Props) {
  const { value, handleChange } = useSearchInput();

  return (
    <StyledInput ref={searchInputRef} value={value} onChange={handleChange} placeholder="질환명을 입력해주세요." />
  );
}

const StyledInput = styled.input`
  flex: 1;
  padding-right: 40px;
  font-weight: 500;
  font-size: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.color.GRAY};
  }
`;

export default Input;
