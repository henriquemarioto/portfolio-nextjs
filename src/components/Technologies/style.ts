import styled from 'styled-components';

export const Container = styled.section`
  padding: ${p => p.theme.padding.section};

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Studying = styled(TechStack)``;

export const IconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: auto;
    height: 25px;

    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
