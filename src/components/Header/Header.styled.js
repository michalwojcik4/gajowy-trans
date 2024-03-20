import styled from '@emotion/styled';
import { Container as StyledContainer } from '../common/Container.styled';
import { theme } from 'theme/theme';

export const Container = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1px;
  padding-bottom: 1px;
`;

export const StyledHeader = styled.header`
  position: relative;
  z-index: 2;
  padding: 5px 0;
  background-color: ${theme.color.black[1]};
`;
