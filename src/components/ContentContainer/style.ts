import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.padding.section};

  margin: 0 auto;
  width: ${p => p.theme.padding.width};
  min-width: 300px;
  max-width: 1366px;

  @media (min-width: 600px) {
    padding: ${p => p.theme.padding.section_600};
  }
`;
