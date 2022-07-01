import theme from '../../styles/theme';
import { Container } from './style';

interface Props {
  title: string;
  subTitle: string;
  fontColor?: string;
}

const SectionTitle = ({ title, subTitle, fontColor }: Props) => (
  <Container fontColor={fontColor}>
    <h3>{title}</h3>
    <h4>{subTitle}</h4>
  </Container>
);

SectionTitle.defaultProps = {
  fontColor: theme.colors.black
};

export default SectionTitle;
