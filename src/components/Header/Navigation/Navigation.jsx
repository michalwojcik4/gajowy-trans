import { routes } from '../../../constants/routes';
import { NavList, NavItem, NavLinkStyled } from './Navigation.styled';

const Navigation = props => {
  return (
    <NavList fd={props.fd}>
      <NavItem>
        <NavLinkStyled
          to={routes.MAIN_PAGE}
          onClick={props.onClick}
          activeclassname="active"
        >
          Strona Główna
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled
          to={routes.ABOUT_PAGE}
          onClick={props.onClick}
          activeclassname="active"
        >
          O nas
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled
          to={routes.OFFER_PAGE}
          onClick={props.onClick}
          activeclassname="active"
        >
          Oferta
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled
          to={routes.PRICE_PAGE}
          onClick={props.onClick}
          activeclassname="active"
        >
          Cennik
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled
          to={routes.CONTACT_PAGE}
          onClick={props.onClick}
          activeclassname="active"
        >
          Kontakt
        </NavLinkStyled>
      </NavItem>
    </NavList>
  );
};

export default Navigation;
