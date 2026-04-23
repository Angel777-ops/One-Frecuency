import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgb(0, 0, 0);
`;
const DetailBackground = styled.div`
  
  background-color: #6e0000;
 
`;

const TrackImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.96);
  margin-bottom: 20px;
`;

const TrackTitle = styled.h1`
  font-size: 2.5rem;
  color: #e71515;
  margin-bottom: 5px;
  
`;

const ArtistName = styled.h3`
  color: #007bff;
  font-weight: 400;
  margin-bottom: 20px;
  strong {
    color: #000;
    font-weight: 600;
  }
`;

const InfoLabel = styled.p`
  font-size: 1.1rem;
  color: #002fc8;
  margin: 5px 0;
  
  strong {
    color: #000;
    font-weight: 600;
  }
`;
const TitleDetails = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 3px solid #0360ff; /* Rojo para diferenciarlo del azul de Home */
  display: inline-block;
  padding-bottom: 10px;
  padding-left: 30px;
  margin: 20px;
`;

const DescriptionBox = styled.div`
  max-width: 600px;
  margin: 30px auto 0;
  text-align: justify;
  line-height: 1.6;
  color: #e51111;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const StatusMessage = styled.div`
  padding: 40px;
  text-align: center;
  color: ${props => props.error ? '#dc3545' : '#666'};
  font-weight: ${props => props.error ? 'bold' : 'normal'};
`
export{
    DetailContainer,
    TrackImage,
    TrackTitle,
    ArtistName,
    InfoLabel,
    DescriptionBox,
    StatusMessage,
    DetailBackground,
    TitleDetails
}