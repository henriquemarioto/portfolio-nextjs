import styled from 'styled-components';

interface Props {
  fontColor?: string;
  backgroundColor?: string;
  img?: any;
}

export const Container = styled.section<Props>`
  color: ${p => p.fontColor};
  background-color: ${p => p.backgroundColor};

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
