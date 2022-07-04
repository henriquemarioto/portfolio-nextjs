import { HiMenu } from 'react-icons/hi';
import ContentContainer from '../ContentContainer';
import { Container, MenuButton } from './style';

const Header = () => (
  <Container>
    <ContentContainer>
      <h2>{'<M />'}</h2>
      <MenuButton type="button">
        <HiMenu />
      </MenuButton>
    </ContentContainer>
  </Container>
);

export default Header;
