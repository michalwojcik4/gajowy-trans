import Navigation from "../Navigation/Navigation";
import { Wrapper, Button, Svg } from "./BurgerMenu.styled";

const BurgerMenu = ({ onClose }) => {
  return (
    <Wrapper>
      <Button onClick={onClose}>
        <Svg />
      </Button>
      <Navigation fd="column" onClick={onClose} />
    </Wrapper>
  );
};

export default BurgerMenu;
