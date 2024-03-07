import styled from '@emotion/styled';
import { ReactComponent as MapPinSvg } from '../../../images/svg/map-pin.svg';
import { ReactComponent as MailSvg } from '../../../images/svg/mail.svg';
import { ReactComponent as PhoneSvg } from '../../../images/svg/phone.svg';
import { theme } from 'theme/theme';

export const ContactBox = styled.div``;

export const Title = styled.h2``;

export const AddressContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const AddressIcon = styled(MapPinSvg)`
  width: 24px;
  height: 24px;
  fill: ${theme.color.red[1]};
`;

export const Address = styled.address``;

export const ContactList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SvgMail = styled(MailSvg)`
  width: 20px;
  height: 20px;
  fill: ${theme.color.red[1]};
`;

export const SvgPhone = styled(PhoneSvg)`
  width: 20px;
  height: 20px;
  fill: ${theme.color.red[1]};
`;
