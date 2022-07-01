import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.padding.section};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > button {
    width: 50%;
  }
`;
