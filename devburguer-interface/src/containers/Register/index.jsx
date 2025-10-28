import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  LoginContainer,
  RightContainer,
  Title,
  Link,
} from './styles';

import { Button } from '../../components/Button';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 400) {
        toast.error('E-mail já cadastrado! Faça login para continuar.');
      } else {
        throw new Error();
      }
    } catch (_error) {
      toast.error('Falha no sistema! Tente novamente mais tarde.');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <LoginContainer>
          <Title>Criar conta</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input type="text" {...register('name')} />
              <p>{errors?.name?.message}</p>
            </InputContainer>

            <InputContainer>
              <label htmlFor="email">Email</label>
              <input type="email" {...register('email')} />
              <p>{errors?.email?.message}</p>
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">Senha</label>
              <input type="password" {...register('password')} />
              <p>{errors?.password?.message}</p>
            </InputContainer>

            <InputContainer>
              <label htmlFor="confirmPassword">Confirme a senha</label>
              <input type="password" {...register('confirmPassword')} />
              <p>{errors?.confirmPassword?.message}</p>
            </InputContainer>

            <Button type="submit">Criar conta</Button>
          </Form>
          <p>
            já possui conta? <Link to="/login">Clique aqui</Link>.
          </p>
        </LoginContainer>
      </RightContainer>
    </Container>
  );
}
