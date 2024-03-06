import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

import { Container as StyledContainer } from '../common/Container.styled';

export const StyledFooter = styled.footer`
  padding: 20px 0;
  background-color: ${theme.color.gray.footer};
  color: ${theme.color.white.text};
`;

export const Container = styled(StyledContainer)``;
