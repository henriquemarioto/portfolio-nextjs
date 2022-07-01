import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 5px solid ${p => p.theme.colors.blue};
  padding: ${p => p.theme.padding.section};
  color: ${p => p.theme.colors.white};

  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
