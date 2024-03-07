import {
  Address,
  AddressContainer,
  AddressIcon,
  ContactBox,
  ContactItem,
  ContactList,
  SvgMail,
  SvgPhone,
  Title,
} from './Adress.styled';

const Adress = () => {
  return (
    <ContactBox>
      <Title>Adres</Title>
      <AddressContainer>
        <AddressIcon />
        <Address>
          Wyszyńskiego 12/11
          <br />
          62-800 Kalisz
        </Address>
      </AddressContainer>

      <Title>Kontakt</Title>
      <ContactList>
        <ContactItem>
          <SvgMail />
          <p>example@example.com</p>
        </ContactItem>
        <ContactItem>
          <SvgPhone />
          <p>123 123 123</p>
        </ContactItem>
      </ContactList>
    </ContactBox>
  );
};

export default Adress;
