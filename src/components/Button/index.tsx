import { AnchorHTMLAttributes, ReactNode } from 'react';
import { Container } from './style';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
  children,
  ...rest
}: Props) => (
  <Container
    bgColor={bgColor}
    textColor={textColor}
    borded={borded}
    allWidth={allWidth}
    {...rest}
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
