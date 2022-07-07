import { ReactNode } from 'react';
import { Container } from './style';

interface Props {
  fade?: string;
  children: ReactNode;
}

const ContentContainer = ({ fade, children }: Props) => (
  <Container data-aos={fade}>{children}</Container>
);

ContentContainer.defaultProps = {
  fade: `fade-right`
};

export default ContentContainer;
