import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${p => p.theme.colors.blue};
  border-radius: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border: 1px solid ${p => p.theme.colors.grey_100};
  border-radius: 5px;
  font-size: 12px;
`;
