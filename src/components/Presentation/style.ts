import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding-top: 60px;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  p {
    text-transform: uppercase;
    font-size: 14px;

    @media (min-width: 900px) {
      font-size: 28px;
    }
  }

  div {
    h1 {
      font-size: 34px;
      font-weight: bold;

      @media (min-width: 900px) {
        font-size: 68px;
      }
    }

    h2 {
      font-size: 16px;
      color: ${p => p.theme.colors.blue};
      text-transform: uppercase;

      @media (min-width: 900px) {
        font-size: 32px;
      }
    }
  }

  span {
    color: ${p => p.theme.colors.grey_0};
    font-size: 12px;
    width: 58%;

    @media (min-width: 900px) {
      font-size: 24px;
      width: 80%;
    }
  }

  @media (min-width: 900px) {
    width: 40%;
    max-width: 430px;
  }
`;

export const SecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  @media (min-width: 900px) {
    width: 50%;
    max-width: 586px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  width: 100%;

  @media (min-width: 900px) {
    gap: 30px;
  }
`;

export const ContainerAvatar = styled.div`
  width: 124px;
  min-width: 124px;
  height: 124px;
  min-height: 124px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 900px) {
    width: 220px;
    min-width: 220px;
    height: 220px;
    min-height: 220px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    @media (min-width: 900px) {
      font-size: 28px;
    }
  }

  span {
    font-size: 12px;
    color: ${p => p.theme.colors.grey_200};

    @media (min-width: 900px) {
      font-size: 20px;
    }
  }

  @media (min-width: 900px) {
    gap: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  > a {
    @media (min-width: 900px) {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
