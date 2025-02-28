import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 1em;
  gap: 1em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Made with</h3>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
