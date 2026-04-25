import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
const NavContainer = styled.nav`
  padding: 15px 30px;
  background-color: #222;
  display: flex;
  gap: 25px; 
  align-items: center;
  border-bottom: 1px solid #444;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; 
  }

  
  span {
    background: #007bff;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-left: 5px;
  }
`;
export{
    NavContainer,
    StyledLink
}
