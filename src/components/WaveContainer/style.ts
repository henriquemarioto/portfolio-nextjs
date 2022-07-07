import styled from 'styled-components';

interface Props {
  backgroundColor: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  background-color: ${p => p.backgroundColor || 'transparent'};
  max-width: 100%;
  height: 70px;
  position: relative;
  overflow-x: hidden;
`;
