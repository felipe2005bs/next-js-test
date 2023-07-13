import 'styled-components';
import theme from '@/presentation/theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
