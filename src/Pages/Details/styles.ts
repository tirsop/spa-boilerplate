import styled from '@emotion/styled';

const tcPurple = '#7935D2';

export const DetailsWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin: 0 auto 60px;
`;

export const Content = styled.div`
  padding: 0 30px;
`;


export const Banner = styled.img`
  width: 100%;
  height: auto;
`;

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
export const Address = styled.div`
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  padding: 0 16px;
  width: 400px;
  display: flex;
  align-items: center;
  gap: 24px;
  svg {
    font-size: 32px;
    color: ${tcPurple};
  }
  div {
    display: inline-block;
    // flex-basis: auto;
    p {
      margin: 4px 0;
    }
  }
`