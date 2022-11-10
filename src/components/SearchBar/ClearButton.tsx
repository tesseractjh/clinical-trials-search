import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icons/xmark-solid.svg';
import useSearchInput from '../../hooks/useSearchInput';

type Props = {
  onClick: React.MouseEventHandler;
};

function ClearButton({ onClick }: Props) {
  const { value } = useSearchInput();

  if (!value) {
    return null;
  }

  return (
    <Container type="button" onClick={onClick}>
      <CloseIcon />
    </Container>
  );
}

const Container = styled.button`
  ${({ theme }) => theme.mixin.flex()}
  position: absolute;
  top: 50%;
  right: 68px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.GRAY};

  & > svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.color.WHITE};
  }
`;

export default ClearButton;
