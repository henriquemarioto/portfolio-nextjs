import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 900px) {
    width: 60%;
    margin: auto;
  }
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

    height: 25px;

    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;

    transition: 100ms;

    :hover {
      transform: scale(150%);
    }

    svg {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 600px) {
      height: 40px;
      font-size: 18px;
    }

    @media (min-width: 900px) {
      height: 50px;
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
