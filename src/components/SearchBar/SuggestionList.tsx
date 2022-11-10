import styled from 'styled-components';
import useSuggestions from '../../hooks/useSuggestions';
import splitString from '../../utils/splitTextNode';
import Suggestion from './Suggestion';

const getConverter = () => {
  let count = 0;

  function converter(splitter: string) {
    count += 1;
    return <Bold key={`bold-${count}`}>{splitter}</Bold>;
  }

  return converter;
};

function SuggestionList() {
  const { inputValue, suggestions } = useSuggestions();
  const converter = getConverter();

  if (!inputValue) {
    return null;
  }

  return (
    <Container>
      <Title>추천 검색어</Title>
      <List>
        {suggestions?.length ? (
          suggestions.map(({ sickCd, sickNm }) => {
            const suggestion = splitString(sickNm, inputValue, converter);
            return <Suggestion key={sickCd} suggestionName={sickNm} suggestion={suggestion} />;
          })
        ) : (
          <NoResult tabIndex={0}>검색어 없음</NoResult>
        )}
      </List>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  padding: 20px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const Title = styled.strong`
  padding-left: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.GRAY};
`;

const List = styled.ul`
  overflow-y: auto;
  max-height: 500px;
  margin-top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Bold = styled.b`
  font-weight: 700;
`;

const NoResult = styled.li`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  height: 40px;
  padding: 0 20px;
`;

export default SuggestionList;
