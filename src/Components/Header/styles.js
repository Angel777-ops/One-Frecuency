import styled from 'styled-components';

 const HeaderContainer = styled.header`
  background: #1a1a1a; /* Fondo oscuro */
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

 const MainTitle = styled.h1`
  color: #ff0000; /* Azul brillante */
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  /* Efecto sutil para que parezca una marca */
  span {
    color: #ffffff;
    font-weight: 300;
  }
`;
export{
 HeaderContainer,
 MainTitle
}