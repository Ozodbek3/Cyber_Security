import styled from "styled-components";



const FooterDiv = styled.div`
    position: relative;
    bottom: 2%;
    width: 100%;
    height: 50%;
    background-color: ${({theme}) => theme.footer};
`
const Safetyh3 = styled.h3`
  margin-top:16rem;
  margin-left: 3rem;
`

const Footer = () => {
  return (
    <FooterDiv>
      <h3>Network security solutions</h3>
      <Safetyh3>UzSafety Network </Safetyh3>
      
    </FooterDiv>
  );
};

export default Footer;