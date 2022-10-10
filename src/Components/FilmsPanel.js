import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function Film({ img }) {
    return (
        <img src={img} alt="film's image" />
    )
}

export default function FilmsPanel() {

    const [films, setFilms] = useState(undefined)
    const [error, setError] = useState(false)

    useEffect( ()=> {
        const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promisse = axios.get(url)

        promisse.then((res) => {
            setFilms(res.data)
        })

        promisse.catch((err) => {
            console.log(err.respose.data)
            setError(true)
        })

        }, []
    )

    if(error){
        return <div>Erro na requisição! Tente de novo</div>
    }
    if(!error && films === undefined){
        return <div>Carregando</div>
    }

    return (
        <>
            <SelectFilm>
                <p>Selecione o filme</p>
            </SelectFilm>
                <Link to="./sessions">
                    <ConteinerFilms>
                        {films.map(
                            (f) => <Film key={f.id} img={f.posterURL} />
                        )}
                    </ConteinerFilms>
                </Link>
        </>
    )
}

const SelectFilm = styled.div`
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
const ConteinerFilms = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0px auto 0px auto;
    img{
        width: 129px;
        height: 193px;
        margin-bottom: 30px;
        border: 2px solid white;
    }
`