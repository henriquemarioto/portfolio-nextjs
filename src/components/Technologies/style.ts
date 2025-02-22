import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 900px) {
    width: 60%;
    margin: auto;

    gap: 80px;
  }
`;

export const StackSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  li {
    height: 25px;
    background-color: ${p => p.theme.colors.white};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;

    transition: 300ms;

    :hover {
      transform: scale(150%);
    }

    > a {
      height: 100%;
      color: ${p => p.theme.colors.black};
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      svg {
        width: 25px;
        height: 25px;

        @media (min-width: 600px) {
          height: 40px;
          width: 40px;
        }

        @media (min-width: 900px) {
          height: 50px;
          width: 50px;
        }
      }
    }

    @media (min-width: 600px) {
      font-size: 18px;
    }

    @media (min-width: 900px) {
      font-size: 24px;
    }
  }

  @media (min-width: 600px) {
    gap: 25px;
  }

  @media (min-width: 900px) {
    gap: 40px;
  }
`;
