import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Sessions() {
    const [film, setFilm] = useState({})
    const { filmId } = useParams()

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`)

        promisse.then((res) => {
            setFilm(res.data)
            console.log(film.days)
        })

        promisse.catch((error) => {
            console.log(error.response.data)
        })
    }, [])

    return (
        <>
            <SelectTime>
                <p>Selecione o horário</p>
            </SelectTime>
                {
                    film.days.map((d) => 
                    <ConteinerSession key={d.id}>
                    <div className="weekday">{d.weekday} - {d.date}</div>
                    {
                        d.showtimes.map((t)=>
                            <Link to={`/seats/${t.id}`}>
                                <div className="times">{t.name}</div>
                            </Link>
                        
                        )
                    }
                    </ConteinerSession>
                )} 
            <Footer>
                <img src={film.posterURL} alt="imagem do filme" />
                <p>{film.title}</p>
            </Footer>
        </>
    )
}

const SelectTime = styled.div`
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
    .weekday{
        font-size: 20px;
    }
    .times{
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

