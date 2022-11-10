import styled from 'styled-components';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Container>
      <InnerContainer>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <SearchBar />
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'flex-start')}
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
`;

const InnerContainer = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.5;
  text-align: center;
`;

export default App;
