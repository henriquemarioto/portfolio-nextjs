import styled from 'styled-components';

interface Props {
  img: any;
}

export const Container = styled.li`
  padding: 10px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  border-radius: 5px;
  min-height: 450px;
  max-width: 400px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;
export const ImageContainer = styled.div<Props>`
  width: 100%;
  height: 240px;
  border-radius: 5px;

  background-color: ${p => p.theme.colors.grey_800};
  background-image: url(${p => p.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 34px;
    font-weight: bold;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    color: ${p => p.theme.colors.grey_500};
  }
`;

export const Description = styled.p`
  font-size: 12px;
`;

export const Technologies = styled.p`
  font-size: 12px;

  strong {
    font-weight: bold;
  }

  span {
  }
`;

export const Links = styled.div`
  font-size: 12px;
  color: ${p => p.theme.colors.black};

  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${p => p.theme.colors.black};

    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
