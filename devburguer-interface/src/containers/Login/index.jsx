import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api.js';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  LoginContainer,
  RightContainer,
  Title,
} from './styles';

import { Button } from '../../components/Button';

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
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
    const response = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Login realizado com sucesso 👌',
        error: 'Falha ao realizar login 🤯',
      },
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <LoginContainer>
          <Title>
            Olá, seja bem vindo ao <span>Dev Burguer!</span> <br /> Acesse com
            seu <span>Login e senha.</span>
          </Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit">Entrar</Button>
          </Form>
          <p>
            Não possui conta? <a href="*">Clique aqui</a>.
          </p>
        </LoginContainer>
      </RightContainer>
    </Container>
  );
}
