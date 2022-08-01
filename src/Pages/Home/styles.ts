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

const medQuer660 = '660px';
const medQuer450 = '450px';
const tcPurple = '#7935D2';

// ----------------------------------- SETUP ---------------------------------- //
export const Grid = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin: 60px auto;
`;

// ----------------------------------- FORM ---------------------------------- //
export const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
      position: absolute;
      top: 16px;
      left: 15px;
      color: #c8c8c8;
      font-size: 19px;
    }
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid #D2D2D2;
    padding-left:50px;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: ${tcPurple};
  padding: 12px;
  width: 100%;
`;

// ----------------------------------- CARD ---------------------------------- //
export const Card = styled(Link)`
  text-decoration: none;
  margin-bottom: 40px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 2px 2px 9px -6px rgb(0, 0, 0, 50%);
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media (max-width: ${medQuer660}) {
    gap: 0;
    margin-bottom: 32px;
  }
  @media (max-width: ${medQuer450}) {
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: ${medQuer660}) {
    gap: 6px;
    margin-left: 20px;
    padding: 16px 0;
  }
`;

export const Img = styled.img`
  width: 25%;
  aspect-ratio: 1.5;
  object-fit: cover;
  border-radius: 4px 0 0 4px;
  @media (max-width: ${medQuer660}) {
    width: 100%;
    height: 100px;
    border-radius: 4px 4px 0 0;
    object-position: center;
  }
`;

export const Name = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 500;
`

export const Tags = styled.div`
`

export const Tag = styled.p`
  background-color: #E3E3E3;
  border-radius: 16px;
  padding: 3px 8px;
  display: inline;
  color: #000;
  font-size: 12px;
  margin-right: 8px;
`

export const Price = styled.div`
  color: ${tcPurple};
  span {
    padding: 0 16px 0 8px;
  }
`