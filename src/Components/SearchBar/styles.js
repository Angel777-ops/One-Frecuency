import styled from 'styled-components';

const FormContainer = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center; 
  align-items: center;     
  gap: 10px;
  width: 100%;             
  box-sizing: border-box;
  border-radius: 25px;
`;

const StyledInput = styled.input`
  padding: 10px 15px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 25px; 
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-shadow: 5px 7px 15px rgba(72, 72, 72, 0.96);

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
  }
`;

const SearchButton = styled.button`
  padding: 10px 25px;
  background-color: #0062ff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 5px 7px 15px rgba(72, 72, 72, 0.96);
  &:hover {
    background-color: #023d7d;
  }

  &:active {
    transform: scale(0.95);
  }
`;
export{
    FormContainer,
    StyledInput,
    SearchButton
}