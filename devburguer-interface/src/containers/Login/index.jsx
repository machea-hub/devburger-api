import Logo from '../../assets/logo.svg';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

import { Button } from '../../components/Button'

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br /> Acesse com seu{' '}
          <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input type="password" id />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a href="*">Clique aqui</a>.
        </p>
      </RightContainer>
    </Container>
  );
}
