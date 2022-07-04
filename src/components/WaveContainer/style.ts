import styled from 'styled-components';

interface Props {
  img: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  max-width: 100%;
  height: 70px;

  background-image: url(${p => p.img});
  background-repeat: no-repeat;
  background-size: cover 70px;
`;
