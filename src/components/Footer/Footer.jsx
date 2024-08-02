import styled from "styled-components";



const FooterDiv = styled.div`
    position: relative;
    bottom: 2%;
    width: 100%;
    height: 10%;
    background-color: red;
`

const Footer = () => {
  return (
    <FooterDiv>
      <p>�� 2023 Cyber Security Solutions. All rights reserved.</p>
    </FooterDiv>
  );
};

export default Footer;