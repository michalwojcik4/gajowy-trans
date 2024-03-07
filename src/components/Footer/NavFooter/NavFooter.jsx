import { routes } from 'constants/routes';
import { Link, Nav, NavItem, NavList, Title } from './NavFooter.styled';

const NavFooter = () => {
  return (
    <Nav>
      <Title>Menu</Title>
      <NavList>
        <NavItem>
          <Link to={routes.MAIN_PAGE} activeclassname="active">
            Strona Główna
          </Link>
        </NavItem>
        <NavItem>
          <Link to={routes.ABOUT_PAGE} activeclassname="active">
            O nas
          </Link>
        </NavItem>
        <NavItem>
          <Link to={routes.OFFER_PAGE} activeclassname="active">
            Oferta
          </Link>
        </NavItem>
        <NavItem>
          <Link to={routes.PRICE_PAGE} activeclassname="active">
            Cennik
          </Link>
        </NavItem>
        <NavItem>
          <Link to={routes.CONTACT_PAGE} activeclassname="active">
            Kontakt
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavFooter;
