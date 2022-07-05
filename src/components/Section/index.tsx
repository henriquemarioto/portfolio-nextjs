import { ReactNode } from 'react';
import { BGImageContainer, Container } from './style';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  img?: any;
  id?: string;
}

const Section = ({
  children,
  fontColor,
  backgroundColor,
  img,
  ...rest
}: Props) => (
  <Container fontColor={fontColor} backgroundColor={backgroundColor} {...rest}>
    <>
      {img && <BGImageContainer img={img} />}
      {children}
    </>
  </Container>
);

Section.defaultProps = {
  fontColor: '',
  backgroundColor: '',
  img: undefined,
  id: ''
};

export default Section;
