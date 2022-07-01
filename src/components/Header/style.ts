import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  width: 100%;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.white};

  svg {
    width: 30px;
    height: 100%;
  }
`;
