import styled from 'styled-components';
import { ReactComponent as MagIcon } from '../../assets/icons/magnifier.svg';

type Props = {
  suggestionName: string;
  suggestion: React.ReactNode[];
};

function Suggestion({ suggestionName, suggestion }: Props) {
  return (
    <Container>
      <Link
        className="search-suggestion"
        href={`${process.env.REACT_APP_CLINICAL_TRIALS_KOREA}?conditions=${suggestionName}`}>
        <MagIcon />
        <Text>{suggestion}</Text>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  & *:focus-visible {
    outline: none;
  }
`;

const Link = styled.a`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  height: 40px;
  padding: 0 20px;
  user-select: none;
  cursor: pointer;

  & > svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-right: 16px;
  }

  &:hover,
  &:focus-visible,
  &.selected {
    background-color: ${({ theme }) => theme.color.GRAY_LIGHT};
  }
`;

const Text = styled.span`
  font-size: 16px;
`;

export default Suggestion;
