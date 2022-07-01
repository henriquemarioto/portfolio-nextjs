import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: ${p => p.theme.padding.section};
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    text-transform: uppercase;
    font-size: 14px;
  }

  div {
    h1 {
      font-size: 34px;
      font-weight: bold;
    }

    h2 {
      font-size: 16px;
      color: ${p => p.theme.colors.blue};
      text-transform: uppercase;
    }
  }

  span {
    color: ${p => p.theme.colors.grey_0};
    font-size: 12px;
    width: 58%;
  }
`;

export const SecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const ContainerAvatar = styled.div`
  width: 124px;
`;

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 12px;
    color: ${p => p.theme.colors.grey_200};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
