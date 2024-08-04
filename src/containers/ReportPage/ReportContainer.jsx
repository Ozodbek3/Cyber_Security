import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin-top: 8%;
    flex-direction: column;
    background-color: #1d3557;
`
const Muammo = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10%;
    height: 30%;
    width: 100%;
`
const Title = styled.h2`
    text-align: center;
    color: white;
    cursor: default !important;
`
const Option = styled.input`
    display: flex;
    padding: 1rem;
    height: 2rem;
    align-items: center;
    border-radius: 12px;
    font-size: larger;
    border: 1px;
    cursor: pointer;
    background-color: white;
    &:hover{
        background-color: #dbdbdb;
    }
    &:focus{
        border: 4px solid black;
    }
`
const BtnCon = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 20%;
    width: 100%;
`
const Yosh = styled.input`
    width: 20%;
`
const Button = styled.input`
    padding: 1rem;
    font-size: medium;
    border-radius: 12px;
`
const ReportContainer = () => {
    const [show , setShow] = useState(true)
    const navigate = useNavigate()
    return(
        (show && <Container>
            <Muammo onSubmit={(e) =>  e.preventDefault}>
                <Title>Siz reklamadan norozimisiz? Balki qonun buzsarlarga nima deyish kerakligini bilmayapsizmi?</Title> <br />
                <Title>Iltimos pastagi variantlardan birini tanlang</Title>
                <BtnCon>
                    <h3>Jinoyatchi bilan yordam</h3>
                    <Option type="radio" name="option" required/>
                    <h3 htmlFor="">Meni aldashyatganini qanday aniqlayman</h3>
                    <Option type="radio" name="option" required/>
                    <h3 htmlFor="">Reklamaga shikoyat</h3>
                    <Option type="radio" name="option" required/>
                </BtnCon>
                <Title>Iltimos yoshingizni kiriting</Title>
                <Yosh type="text" required/>
                <Button type="submit" value="Muammoni yechish"/>
            </Muammo>
        </Container>)
    )
}

export default ReportContainer