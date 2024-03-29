import styled from '@emotion/styled';
import { Box } from 'components/common/Box.styled';
import { theme } from 'theme/theme';

export const Why = styled(Box)`
  gap: 40px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${theme.color.red[1]};
  font-size: ${theme.fontSizes[6]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[7]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[8]};
  }
`;

export const BoxMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  max-width: 550px;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 48vw;
    margin: 0;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    max-width: 25vw;
    height: 60vh;
    margin-block: auto;
  }
`;

export const ExtraBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    height: auto;
    justify-content: space-between;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 3px solid ${theme.color.red[1]};
  padding-left: 5px;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    max-width: 30vw;
  }
`;

export const TitleText = styled.h2`
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights.semibold};
`;

export const Text = styled.p``;

export const BoxDesktop = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;
