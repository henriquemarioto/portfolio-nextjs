import { ReactNode } from 'react';
import { Container } from './style';

interface Props {
  bgColor?: string;
  textColor?: string;
  borded?: boolean;
  allWidth?: boolean;
  children: ReactNode;
}

export const Button = ({
  bgColor,
  textColor,
  borded,
  allWidth,
  children
}: Props) => (
  <Container
    bgColor={bgColor}
    textColor={textColor}
    borded={borded}
    allWidth={allWidth}
  >
    {children}
  </Container>
);

Button.defaultProps = {
  borded: false,
  allWidth: false,
  bgColor: '',
  textColor: ''
};

export default Button;
