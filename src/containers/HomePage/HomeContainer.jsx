import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.primary};
`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Sec1_text = styled.div`
  height: 60%;
  width: 45%;
  color: white;
`
const Sec1_photo = styled.video`
  height: 80%;
  width: 45%;
  background-color: red;
`
const HomeContainer = ({ theme }) => {
  return(
    <Container>
      <Section>
        <Sec1_photo>

        </Sec1_photo>
        <Sec1_text>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque placeat molestiae laudantium.</h4>
        </Sec1_text>
      </Section>

      <Section>2</Section>

      <Section>3</Section>
    </Container>
  )
};

export default HomeContainer;
