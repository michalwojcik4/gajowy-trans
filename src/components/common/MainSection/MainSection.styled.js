import styled from '@emotion/styled';
import { Container as StyledContainer } from '../Container.styled';
import { theme } from 'theme/theme';

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  background-color: ${theme.color.black[1]};
`;

export const Container = styled(StyledContainer)``;
