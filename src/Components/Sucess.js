import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Sucess(){
    const {nameClient, cpf, title, time, day, nameSeat} = useLocation().state
    return(
        <>
        <SucessMsg>
            <p>Pedido feito com sucesso!</p>
        </SucessMsg>
        <DefaultSucess>
            <div>
                <p>Filme e Sessão</p>
                <p>{title}</p>
                <p>{day} - {time}</p>
            </div>
            <div>
                <p>Ingressos</p>
                {nameSeat?.map((s, i) => (
                    <p key={i}>Assento {s}</p>
                ))}
            </div>
            <div>
                <p>Comprador</p>
                <p >Nome: {nameClient}</p>
                <p >CPF: {cpf}</p>
            </div>            
        </DefaultSucess>
        <Link to="/">
                <button>Voltar para o início</button>
        </Link>
        </>
    )
}

const SucessMsg = styled.div`
    width: 374px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;
    color: #247A6B;
    p{
        font-size: 24px;
    }
`
const DefaultSucess = styled.p`
    margin-left: 28px;
    font-size: 22px;
    div{
        width: 374px;
        height: 110px;
    }
    p{
        margin-bottom: 8px;
    }
`
