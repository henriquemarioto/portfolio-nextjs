import styled from 'styled-components';

interface Props {
  bgColor: string;
  textColor: string;
  borded: boolean;
  allWidth: boolean;
}

export const Container = styled.button<Props>`
  background-color: ${p => p.bgColor || p.theme.colors.black};
  color: ${p => p.textColor || p.theme.colors.white};

  width: ${p => (p.allWidth ? '100%' : 'auto')};
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: ${p => p.borded && `1px solid ${p.theme.colors.grey_100}`};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
