'use client';

import Logo from '../../Logo';
import { Container, Column, TextWrapper } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Column>
        <Logo />
        <TextWrapper>
          <p>
            Av. Marcos P. de U. Rodrigues, 939 - Edif. C. Branco Office Park, Torre Jatobá, 11º andar
            Alphaville Industrial - Barueri, SP - 06460-040 - CNPJ: 09.296.295/0001-60
          </p>
          <p>© 2022 Azul - Linhas Aéreas Brasileira</p>
        </TextWrapper>
      </Column>
      <Column>
        <p>Precisa de ajuda?</p>
        <button>Fale conosco</button>
      </Column>
    </Container>
  );
};
