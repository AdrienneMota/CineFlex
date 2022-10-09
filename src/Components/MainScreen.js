import styled from "styled-components";
import FilmsPanel from "./FilmsPanel";
import Sessions from "./Sessions";

export default function MainScreen(){
    return(
        <PageMain>
            <Header>
                <p>CINEFLEX</p>
            </Header>
            <SelecionarFilme>
                <p>Selecione o filme</p>
            </SelecionarFilme>
            {/* <FilmsPanel/> */}
            <Sessions/>
        </PageMain>
    )
}

const PageMain = styled.div`
    width: 375px;
    height: 877px;
    background-color: #FFEFD5;
    border: 1px solid #00FF00;
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