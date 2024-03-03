import { routes } from '../../constants/routes';

import { LogoLink, Img } from './Logo.styled';
import gajowyTransLogo from '../../images/logo/gajowy-trans_logo.png';

const Logo = () => {
  return (
    <LogoLink to={routes.MAIN_PAGE}>
      <Img src={gajowyTransLogo} alt="logo" />
    </LogoLink>
  );
};

export default Logo;
