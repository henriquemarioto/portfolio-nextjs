import { Container } from './style';

const WaveContainer = ({ backgroundColor = undefined, children }) => (
  <Container backgroundColor={backgroundColor}>{children}</Container>
);

export default WaveContainer;
