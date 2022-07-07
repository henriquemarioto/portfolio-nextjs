import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import theme from '../../styles/theme';
import Button from '../Button';
import { Form, Input, Loading, TextArea } from './style';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    contact: yup.string().required('Contact is required'),
    message: yup.string().required('Message is required')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = async (data: any) => {
    setIsLoading(true);

    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SID,
        process.env.NEXT_PUBLIC_EMAILJS_TID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PKID
      )
      .then(() => {
        toast.success('Email sent!');
      })
      .catch(error => {
        toast.error('FAILED... ', error);
      });

    setIsLoading(false);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <div>
          <Input placeholder="Name" {...register('name')} />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
      </div>

      <div>
        <div>
          <Input placeholder="Email" {...register('email')} />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <Input placeholder="Phone Number" {...register('contact')} />
          {errors?.contact && <p>{errors.contact.message}</p>}
        </div>
      </div>

      <div>
        <div>
          <TextArea
            placeholder="Message"
            {...register('message')}
            rows={5}
            cols={33}
          />
          {errors?.message && <p>{errors.message.message}</p>}
        </div>
      </div>

      {isLoading ? (
        <Button
          bgColor={theme.colors.blue}
          textColor={theme.colors.white}
          type="button"
          disabled
        >
          <Loading />
        </Button>
      ) : (
        <Button
          bgColor={theme.colors.blue}
          textColor={theme.colors.white}
          type="submit"
        >
          Send
        </Button>
      )}
    </Form>
  );
};

export default ContactForm;
