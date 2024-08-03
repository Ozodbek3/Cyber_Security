import styled from "styled-components";
import {
  FaTelegram,
  FaInstagramSquare,
  FaYoutube,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiFinderFill } from "react-icons/ri";
import { IoPhonePortraitOutline } from "react-icons/io5";




const FooterDiv = styled.div`
    position: relative;
    width: 100%;
    height: 60%;
    background-color: blue;
`
const Safetyh3 = styled.h3`
  position: absolute;
  top: 25rem;
  margin-left: 40rem;
`;
const FooterLine = styled.div`
  position: absolute;
  left: 5rem;
  top: 23rem;
  width: 90%;
  height: 1px;
  background-color: white;
`;
const Solutions = styled.div`
    position: absolute;
    left: 5rem;
    top: 1rem;
    display: flex;
    justify-content:space-between;
    height: 20rem;
    width: 90%;

`
const SolutionsDiv = styled.div`
    position: relative;
    left: 3rem;
    width: 20%;
`
const SolutionsA = styled.a`
  position: relative;
  top: 1rem;
  display: block;
  height: 2rem;
  align-items: center;
  cursor: pointer;
  color: black;
  &&:hover {
    text-decoration: 0.5px white underline;
  }
  
`;

const P = styled.p`
  position: absolute;
  top: 26.5rem;
  margin-left: 35rem;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Solutions>
        <SolutionsDiv>
          <h3 >Network security solutions</h3>
          <SolutionsA>Brausers antivirus</SolutionsA>
          <SolutionsA>VPN for Windows</SolutionsA>
          <SolutionsA>VPN for MacOS </SolutionsA>
          <SolutionsA>VPN for Linux</SolutionsA>
          <SolutionsA>All VPNs</SolutionsA>
          <SolutionsA>All Antivirus</SolutionsA>
        </SolutionsDiv>
        <SolutionsDiv>
          <h3>PC or laptop antivirus</h3>
          <SolutionsA>
            <FaWindows />
            Windows Antivirus
          </SolutionsA>
          <SolutionsA>
            <RiFinderFill />
            MacOS Antivirus
          </SolutionsA>
          <SolutionsA>
            <FaLinux />
            Linux Antivirus
          </SolutionsA>
          <SolutionsA>
            <IoPhonePortraitOutline />
            Phone Antivirus
          </SolutionsA>
          <SolutionsA>All Antiviruses</SolutionsA>
        </SolutionsDiv>
        <SolutionsDiv>
          <h3>Kids on Internet</h3>
          <SolutionsA>Parental control</SolutionsA>
          <SolutionsA>Brausers Security</SolutionsA>
          <SolutionsA>Time of using</SolutionsA>
          <SolutionsA>All Solutions for kids</SolutionsA>
        </SolutionsDiv>
        <SolutionsDiv>
          <h3>Social Media</h3>
          <SolutionsA href="https://t.me/UzSafetynews">
            <FaTelegram />
            Telegram
          </SolutionsA>
          <SolutionsA>
            <FaInstagramSquare />
            Instagram
          </SolutionsA>
          <SolutionsA href="https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_">
            <FaYoutube />
            Youtube
          </SolutionsA>
          <SolutionsA href="https://x.com/home">
            <FaSquareXTwitter />
            X.com
          </SolutionsA>
          <SolutionsA>All information about us</SolutionsA>
        </SolutionsDiv>
      </Solutions>
      <FooterLine></FooterLine>
      <Safetyh3>Uzbekistan Safety Network</Safetyh3>
      <P>©️ 2024 Uzbekistan Safety Network. All rights reserved.</P>

    </FooterDiv>
  );
};

export default Footer;
