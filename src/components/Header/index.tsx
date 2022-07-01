import { HiMenu } from 'react-icons/hi';
import { Container, MenuButton } from './style';

const Header = () => (
  <Container>
    <h2>{'<M />'}</h2>

    <MenuButton type="button">
      <HiMenu />
    </MenuButton>
  </Container>
);

export default Header;
