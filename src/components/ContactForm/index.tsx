import theme from '../../styles/theme';
import Button from '../Button';
import { Form, Input } from './style';

const ContactForm = () => (
  <Form>
    <Input placeholder="Name" />

    <div>
      <Input placeholder="Email" />
      <Input placeholder="Contact" />
    </div>
    <Input placeholder="Message" />
    <Button bgColor={theme.colors.blue} textColor={theme.colors.white}>
      Send
    </Button>
  </Form>
);

export default ContactForm;
