import styled from "styled-components"

export default function Sucess(){
    return(
        <>
        <SucessMsg>
            <p>Pedido feito com sucesso!</p>
        </SucessMsg>
        <DefaultSucess>
            <div>
                <p>Filme e Sessão</p>
                <p>Filme escolhido</p>
                <p>DD/MM/AAAA 00:00</p>
            </div>
            <div>
                <p>Ingressos</p>
                <p>Assento 00</p>
            </div>
            <div>
                <p>Comprador</p>
                <p>Nome: </p>
                <p>Cpf: </p>
            </div>            
        </DefaultSucess>
        <Button>
            Volta para home 
        </Button>
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
const Button = styled.button`

`