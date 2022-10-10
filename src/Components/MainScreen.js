import styled from "styled-components";
import FilmsPanel from "./FilmsPanel";
import Seats from "./Seats";
import Sessions from "./Sessions";
import Sucess from "./Sucess";

export default function MainScreen(){
    return(
        <PageMain>
            <Header>
                <p>CINEFLEX</p>
            </Header>
            <SelecionarFilme>
                <p>Selecione o filme</p>
            </SelecionarFilme>
            <FilmsPanel/>
            {/* <Sessions/> */}
            {/* <Seats/> */}
            {/* <Sucess/> */}
        </PageMain>
    )
}

const PageMain = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FFEFD5;
`
const Header = styled.div`
    width: 375px;
    height: 67px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #E8833A; 
        font-size: 34px;
    }
`
const SelecionarFilme = styled.div`
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