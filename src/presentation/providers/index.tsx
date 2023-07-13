import theme from '@/presentation/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface IAppProvider {
  children: ReactNode;
}

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
