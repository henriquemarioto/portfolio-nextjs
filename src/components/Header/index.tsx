import { BsPersonFill } from 'react-icons/bs';
import { FaDesktop, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoMdMail } from 'react-icons/io';
import ContentContainer from '../ContentContainer';
import { Container, MenuButton } from './style';

const Header = () => (
  <Container>
    <ContentContainer>
      <h2>{'<M />'}</h2>
      <MenuButton role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy
                smooth
                offset={50}
                duration={500}
              >
                <BsPersonFill />
                About me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="techs"
                spy
                smooth
                offset={50}
                duration={500}
              >
                <FaDesktop />
                Techs
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy
                smooth
                offset={50}
                duration={500}
              >
                <FaFileAlt />
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={50}
                duration={500}
              >
                <IoMdMail />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </MenuButton>
    </ContentContainer>
  </Container>
);

export default Header;
