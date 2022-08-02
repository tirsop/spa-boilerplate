import styled from '@emotion/styled';

const tcPurple = '#7935D2';

export const MapStyled = styled.div`
  .map-container {
    width: 100%;
    height: 500px;
    position: relative;
  }
`;

export const MarkerContent = styled.div`
  svg {
    font-size: 32px;
    color: ${tcPurple};
  }
`;