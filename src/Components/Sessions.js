import ListFilms from "../mock/Films";
import styled from "styled-components";

export default function Sessions(){
    return(
        <>
            <SelecionarHorario>
                <p>Selecione o horário</p>
            </SelecionarHorario>
            {/* fazer um map aqui */}
            <ConteinerSession> 
                <p>Dia da Semana - DD/MM/AAAA</p>
                <div>15:00</div>
                <div>19:00</div>
            </ConteinerSession>
            <Footer>
                <img/>
                <p>Filme escolhido</p>
            </Footer>
        </>
    )
}

const SelecionarHorario = styled.div`
    width: 374px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;
    p{
        font-size: 24px;
    }
`
const ConteinerSession = styled.div`
    font-size: 20px;
    margin-left: 24px;
    width: 375px;
    display: flex;
    p{
        margin-left: 24px;
    }
    div{
        width: 82px;
        height: 43px;
        background-color: #E8833A;
        margin-top: 22px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
    }
`
// const Horario = styled.div`
    
// `
const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 375px;
    height: 117px;
    display: flex;
    align-items: center;
    background-color: #DFE6ED;
    img{        
        width: 48px;
        height: 72px;
        margin-right: 18px;
        margin-left: 18px;
    }
`