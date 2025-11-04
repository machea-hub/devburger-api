import {
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react';

export function Header() {
  return (
    <Container>
      <Content>
          <Navigation>
            <div>
              <HeaderLink>Home</HeaderLink>
              <HeaderLink>Cardápio</HeaderLink>
            </div>
          </Navigation>
          <Options>
            <Profile>
              <UserCircleIcon color="#fff" size={24} />
              <div>
                <p>
                  Olá, <span>Lucas</span>
                </p>
                <Logout>Sair</Logout>
              </div>
            </Profile>
          </Options>
          <LinkContainer>
            <ShoppingCartIcon color="#fff" size={24} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
      </Content>
    </Container>
  );
}
