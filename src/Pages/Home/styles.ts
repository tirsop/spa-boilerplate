import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


import { Headline, PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin: 60px auto;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid #D2D2D2;
    padding-left:50px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin: 60px auto;
`;

export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 20%;
  aspect-ratio: 1.5;
  object-fit: cover;
  border-radius: 4px;
`;

export const Name = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 500;
`