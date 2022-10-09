import ListFilms from "../mock/Films";
import styled from "styled-components";
import selecionado from "../assets/img/selecionado.png";
import disponivel from "../assets/img/disponivel.png";
import indisponivel from "../assets/img/indisponivel.png";

export default function Seats() {
    return (
        <>
            <SelectSeat>
                <p>Selecione o(s) assentos</p>
            </SelectSeat>
            <ConteinerSeat> 
                <button>1</button>     
            </ConteinerSeat>
            <StatusSeat>
                <div>
                    <img src={selecionado}/>
                    <p>Selecionado</p>
                </div>
                <div>
                    <img src={disponivel}/>
                    <p>Disponível</p>
                </div>
                <div>
                    <img src={indisponivel}/>
                    <p>Indisponível</p>    
                </div>
            </StatusSeat>
            <Formulario>
                <form>
                    <label for="Name">Nome</label>
                    <input type="text"/> <br/>
                    <label for="Name">Cpf</label>
                    <input type="number"/>
                </form>
            </Formulario>
            <Footer>
                <img src=""/>
                <p>Filme escolhido</p>
            </Footer>
        </>
    )
}

const SelectSeat = styled.div`
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
const ConteinerSeat = styled.div`
    border: 1px solid green;
    margin: 0px 24px 16px 24px;
    button{
        width: 26px;
        height: 26px;
        border-radius: 100%;
        margin-right: 8px;
    }    
`
const StatusSeat = styled.div`
    display: flex;
    justify-content: space-around;
    /* border: 1px solid green;     */
    div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid green; */
    }
    img{
        width: 25px;
        height: 25px;
        margin-bottom: 5px;
        /* border-radius: 100%; */
    }
`
const Formulario = styled.div`
    width: 375px;
`