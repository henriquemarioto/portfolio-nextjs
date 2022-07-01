import styled from 'styled-components';

interface Props {
  fontColor?: string;
  backgroundColor?: string;
  img?: any;
}

export const Container = styled.section<Props>`
  color: ${p => {
    switch (p.fontColor) {
      case 'white':
        return p.theme.colors.white;
      case 'black':
        return p.theme.colors.black;
      case 'blue':
        return p.theme.colors.white;
      default:
        return p.theme.colors.white;
    }
  }};
  background-color: ${p => {
    switch (p.backgroundColor) {
      case 'white':
        return p.theme.colors.white;
      case 'black':
        return p.theme.colors.black;
      case 'blue':
        return p.theme.colors.blue;
      default:
        return 'transparent';
    }
  }};

  position: relative;

  display: flex;
  flex-direction: column;
`;

export const BGImageContainer = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url(${p => p.img});
  background-size: 150%;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: transparent;
  opacity: 0.04;
  z-index: -1;
`;
