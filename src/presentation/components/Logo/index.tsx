import { accountRepository } from '@/infra/repositories/AccountRepository';
import LogoDefault from '@/public/assets/images/logo-default.svg';
import LogoToBG from '@/public/assets/images/logo-to-bg.svg';
import LogoWhite from '@/public/assets/images/logo-wite.svg';
import { useCallback, useEffect } from 'react';
import { LogoProps, LogoVariantEnum } from './Logo.types';

const logoComponents = {
  [LogoVariantEnum.ToBg]: LogoToBG,
  [LogoVariantEnum.White]: LogoWhite,
  [LogoVariantEnum.Default]: LogoDefault,
};

const Logo: React.FC<LogoProps> = ({ variant }) => {
  const LogoComponent =
    logoComponents[variant ?? LogoVariantEnum.Default] || LogoDefault;

  const getAllAccounts = useCallback(async () => {
    try {
      const response = await accountRepository.getAllAccounts({
        Key: 'f261b1d3cea64d8aa4233ffa94e9f20c',
        page: 1,
        pagesize: 30,
      });
     console.log('response:', response);
    } catch (exception) {
      console.error(exception);
    }
  }, []);

  useEffect(() => {
    getAllAccounts();
}, []);

  return (
    <div>
      <LogoComponent />
    </div>
  );
};

export default Logo;
