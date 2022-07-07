import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.div<Props>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${p => `/${[p.color, 'wave'].join('_')}.png`});
  background-size: 50% 100%;

  @media (min-width: 900px) {
    background-size: 50% 100%;
  }

  :nth-of-type(1) {
    animation: animate 5s linear infinite;
    z-index: 3;
  }

  :nth-of-type(2) {
    animation: animate 13s reverse linear infinite;
    z-index: 2;
    opacity: 0.7;
  }

  :nth-of-type(3) {
    animation: animate 20s linear infinite;
    z-index: 1;
    opacity: 0.4;
  }

  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 100%;
    }
  }
`;
