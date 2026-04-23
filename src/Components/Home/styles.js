import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  background-color: #4d4d4d; 
  min-height: 100vh;
`;

const Title = styled.h2`
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  display: inline-block;
  padding-bottom: 5px;
`;

const LoadingMessage = styled.h2`
  padding: 20px;
  color: #ff0000;
  font-style: italic;
  text-align: center;
`;
export{
    HomeContainer,
    Title,
    LoadingMessage
}