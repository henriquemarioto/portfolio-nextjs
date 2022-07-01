import { ReactNode } from 'react';
import { BGImageContainer, Container } from './style';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  img?: any;
}

const Section = ({ children, fontColor, backgroundColor, img }: Props) => (
  <Container fontColor={fontColor} backgroundColor={backgroundColor}>
    {img && <BGImageContainer img={img} />}
    {children}
  </Container>
);

Section.defaultProps = {
  fontColor: '',
  backgroundColor: '',
  img: undefined
};

export default Section;
