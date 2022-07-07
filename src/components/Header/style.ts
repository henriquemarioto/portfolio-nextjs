import styled from 'styled-components';

export const Container = styled.header`
  height: 55px;
  width: 100%;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};

  display: flex;
  align-items: center;

  position: fixed;
  z-index: 9999;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    h2 {
      font-size: 24px;
    }

    ul {
      display: none;

      li {
        a {
          color: white;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: 300ms;

          :hover {
            color: black;
            cursor: pointer;
          }
        }
      }

      @media (min-width: 700px) {
        display: flex;
        gap: 20px;
      }
    }
  }
`;

export const MenuButton = styled.nav`
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.white};
  position: relative;

  @media (min-width: 700px) {
    display: none;
  }

  #menuToggle {
    display: block;
    position: relative;
    z-index: 1;

    ul {
      display: block;
    }
  }
  #menuToggle li:hover {
    color: black;
    cursor: pointer;
  }
  #menuToggle input {
    display: block;
    position: absolute;
    cursor: pointer;
    width: 40px;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    background: #fff;
    position: relative;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s ease-in-out, background 0.5s ease-in-out,
      opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, 1px);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  #menu {
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin: -41px 0px 0px -200px;
    padding: 50px;
    background: ${p => p.theme.colors.blue};
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s ease-in-out;
  }
  #menu li {
    padding: 10px 0px;
    font-size: 22px;
    color: white;
    transition: 0.2s;

    > a {
      color: white;
      display: flex;
      align-items: center;
      gap: 10px;

      transition: 0.2s;

      :hover {
        color: black;
      }
    }
  }
  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;
