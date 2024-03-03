import { Button, Svg } from "./BurgerButton.styled";

const BurgerButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Svg />
    </Button>
  );
};

export default BurgerButton;
