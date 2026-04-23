import styled from 'styled-components';

const LibraryContainer = styled.div`
  padding: 40px 20px;
  background-color: #2a0029;
  min-height: 100vh;
`;

const TitleLibrary = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 3px solid #dc3545; /* Rojo para diferenciarlo del azul de Home */
  display: inline-block;
  padding-bottom: 10px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  margin-top: 50px;
  font-style: italic;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
export{
    LibraryContainer,
    TitleLibrary,
    EmptyMessage,
    GridContainer
}