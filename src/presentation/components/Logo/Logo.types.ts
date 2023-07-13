type LogoVariantType = 'Default' | 'ToBg' | 'White';

export enum LogoVariantEnum {
  Default = 'Default',
  ToBg = 'ToBg',
  White = 'White',
}

export type LogoProps = {
  variant?: LogoVariantType | null;
};
