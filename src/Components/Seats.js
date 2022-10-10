import styled from "styled-components";
import selecionado from "../assets/img/selecionado.png";
import disponivel from "../assets/img/disponivel.png";
import indisponivel from "../assets/img/indisponivel.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat";

export default function Seats() {
    const [seat, setSeats] = useState({})
    const { sessionId } = useParams()
    const [places, SetPlaces] = useState([])
    const [nameSeat, SetNameseat] = useState([])
    const [nameClient, setNameclient] = useState("")
    const [cpf, setCpf] = useState("")
    const [title, setTitle] = useState("")
    const [day, setDay] = useState("")
    const [time, setTime] = useState("")
    const navegate = useNavigate()

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promisse.then((res) => {
            setSeats(res.data)
            setTitle(res.data.movie.title)
            setDay(res.data.day.date)
            setTime(res.data.name)
        })

        promisse.catch((error) => {
            console.log(error.response.data)
        })

    }, [])

    function SubmitForm(e){
        e.preventDefault()


        const body = {
            ids: places,
            name: nameClient,
            cpf
        }

        console.log(body)

        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
        
        promisse.then(() => {
            navegate("/sucess", {state: {nameClient, cpf, title, time, day, nameSeat}}) 
        })

        
    }

    return (
        <>
            <SelectSeat>
                <p>Selecione o(s) assentos</p>
            </SelectSeat>
            <ConteinerSeat>
                {
                    seat?.seats?.map((s) => 
                        <>
                            <Seat key={s.id} name={s.name} free={s.isAvailable} places={places} SetPlaces={SetPlaces} id={s.id} nameSeat={nameSeat} SetNameseat={SetNameseat}/>
                        </>                        
                    )
                }
            </ConteinerSeat>
            <StatusSeat>
                <div>
                    <img src={selecionado} />
                    <p>Selecionado</p>
                </div>
                <div>
                    <img src={disponivel} />
                    <p>Disponível</p>
                </div>
                <div>
                    <img src={indisponivel} />
                    <p>Indisponível</p>
                </div>
            </StatusSeat>
            <InfostoBuy>
                <form onSubmit={SubmitForm}>
                    <label htmlFor="Name">Nome</label>
                    <br/>
                    <input 
                        type="text" 
                        onChange={(e) => setNameclient(e.target.value)}
                        value={nameClient}
                        required
                    />
                    <br/>
                    <label htmlFor="Name">Cpf</label>
                    <br/>
                    <input 
                        type="text" 
                        onChange={(e) => setCpf(e.target.value)}
                        value={cpf}
                        required    
                    />
                    <br/>
                    <button>Reservar assento</button>
                </form>
            </InfostoBuy>
            <Footer>
                <img src={seat?.movie?.posterURL} alt="img do filme" />
                <div>
                    <p>{seat?.movie?.title}</p>
                    <p>{seat?.day?.weekday} - {seat?.name}</p>
                </div>
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
const ConteinerSeat = styled.div`
    /* border: 1px solid green; */
    margin-left: 24px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;    
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
const InfostoBuy = styled.div`
    width: 100%;
    margin-left: 24px;
    margin-top: 41px;
    margin-bottom: 200px;
    font-size: 18px;
    input{
        width: 327px;
        height: 45px;
        margin: 15px;
        border: 1px solid #AFAFAF;
    }
    button{
        width: 225px;
        height: 42px;
        color: white;
        background-color: #E8833A;
        border: none;
        margin-left: 70px;
        margin-top: 15px;
        font-size: 18px;
    }
`
const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
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
    p{
        margin-bottom: 8px;
    }
`
