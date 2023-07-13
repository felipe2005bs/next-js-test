import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${theme.colors.NEUTRAL[800]};
    padding: 16px 0px 0px 16px;
    background-color: ${theme.colors.ORANGE[50]};
  `}
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  margin-left: 24px;
  max-width: 477px;

  p {
    margin: 0;
  }
`;
