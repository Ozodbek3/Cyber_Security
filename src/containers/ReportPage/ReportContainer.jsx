import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin-top: 8%;
    flex-direction: column;
`
const Muammo = styled.div`
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
const Option = styled.button`
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
const Button = styled.button`
    padding: 1rem;
    font-size: medium;
    border-radius: 12px;
`
const ReportContainer = () => {
    const navigate = useNavigate()
    return(
        <Container>
            <Muammo>
                <Title>Siz reklamadan norozimisiz? Balki qonun buzsarlarga nima deyish kerakligini bilmayapsizmi?</Title> <br />
                <Title>Iltimos pastagi variantlardan birini tanlang</Title>
                <BtnCon>
                    <Option>Reklamaga shikoyat</Option>
                    <Option>Meni aldashyatganini qanday aniqlayman</Option>
                    <Option>Jinoyatchi bilan yordam</Option>
                </BtnCon>
                <Title>Iltimos yoshingizni kiriting</Title>
                <Yosh type="text" />
                <Title>Reklamani videosini tashlang</Title>
                <input type="file" />
                <Button onClick={navigate("/report/chat")}>Muammoni yechish</Button>
            </Muammo>
        </Container>
    )
}

export default ReportContainer