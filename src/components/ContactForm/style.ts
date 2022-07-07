import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${p => p.theme.colors.blue};
  border-radius: 5px;
  padding: 10px;
  max-width: 345px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    gap: 10px;

    > div {
      width: 100%;
    }
  }

  p {
    color: red;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border: 1px solid ${p => p.theme.colors.grey_100};
  border-radius: 5px;
  font-size: 12px;

  @media (min-width: 900px) {
    padding: 10px 5px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  border: 1px solid ${p => p.theme.colors.grey_100};
  border-radius: 5px;
  font-size: 12px;

  @media (min-width: 900px) {
    padding: 10px 5px;
    font-size: 14px;
  }
`;

export const Loading = styled.div`
  /* From uiverse.io by @G4b413l */
  --uib-size: 20px;
  --uib-speed: 1.5s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: rotate936 calc(var(--uib-speed) * 1.667) infinite linear;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 60%;
    width: 60%;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.white};
    will-change: transform;
    flex-shrink: 0;
  }

  ::before {
    animation: orbit var(--uib-speed) linear infinite;
  }

  ::after {
    animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2)
      infinite;
  }

  @keyframes rotate936 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes orbit {
    0% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }

    5% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.684208);
      opacity: 0.58;
    }

    10% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.631576);
      opacity: 0.51;
    }

    15% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.578944);
      opacity: 0.44;
    }

    20% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.526312);
      opacity: 0.37;
    }

    25% {
      transform: translate(0%) scale(0.47368);
      opacity: 0.3;
    }

    30% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.526312);
      opacity: 0.37;
    }

    35% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.578944);
      opacity: 0.44;
    }

    40% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.631576);
      opacity: 0.51;
    }

    45% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.684208);
      opacity: 0.58;
    }

    50% {
      transform: translate(calc(var(--uib-size) * -0.5)) scale(0.73684);
      opacity: 0.65;
    }

    55% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.789472);
      opacity: 0.72;
    }

    60% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.842104);
      opacity: 0.79;
    }

    65% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.894736);
      opacity: 0.86;
    }

    70% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.947368);
      opacity: 0.93;
    }

    75% {
      transform: translate(0%) scale(1);
      opacity: 1;
    }

    80% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.947368);
      opacity: 0.93;
    }

    85% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.894736);
      opacity: 0.86;
    }

    90% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.842104);
      opacity: 0.79;
    }

    95% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.789472);
      opacity: 0.72;
    }

    100% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }
  }
`;
