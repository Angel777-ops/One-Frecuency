import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: flex;
   flex-direction: column;
   align-items: center;
   
  gap: 20px;
  border: 1px solid ${props => props.$estaEnBiblioteca ? 'red' : 'blue'};
  margin: 15px 0px;
  margin-right: 100px;
  margin-left: 100px;
  padding: 15px;
  border-radius: 12px;
  background: #636363;
  transition: transform 0.4s ease;
   box-shadow: 5px 20px 25px rgba(27, 27, 27, 0.97);
  &:hover {
    transform: translateY(-3px);
    
  }
`;

const SongImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 5px 20px 15px rgba(72, 72, 72, 0.96);
`;

const SongContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff0000;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    color: #007bff;
  }
`;

const InfoText = styled.p`
  margin: 2px 0;
  color: #ffffff;
  font-size: 0.95rem;
 
  span {
    color: #000fdb;
    font-weight: bold;
    
  }
`;

const ActionButton = styled.button`
  align-self: center;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #000064; /* Verde para 'añadir' */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background-color: #215388;
  }
`;
export{
    Card,
    SongImage,
    SongContent,
    StyledLink,
    InfoText,
    ActionButton
}