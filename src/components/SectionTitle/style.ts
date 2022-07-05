import styled from 'styled-components';

interface Props {
  fontColor: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: ${p => {
      switch (p.fontColor) {
        case 'black':
          return p.theme.colors.black;
        case 'white':
          return p.theme.colors.white;
        default:
          return p.theme.colors.black;
      }
    }};

    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;

    @media (min-width: 600px) {
      font-size: 42px;
    }
  }

  h4 {
    color: ${p => {
      switch (p.fontColor) {
        case 'black':
          return p.theme.colors.grey_100;
        case 'white' || 'blue':
          return p.theme.colors.grey_500;
        default:
          return p.theme.colors.grey_100;
      }
    }};

    font-size: 12px;
    font-weight: bold;

    @media (min-width: 600px) {
      font-size: 18px;
    }
  }
`;
