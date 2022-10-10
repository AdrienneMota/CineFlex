import styled from "styled-components"
import ListFilms from "../mock/Films"

function Film({ img }) {
    return (
        <img src={img} alt="film's image" />
    )
}

export default function FilmsPanel() {
    return (
        <ConteinerFilms>
            {ListFilms.map(
                (f) => <Film key={f.id} img={f.posterURL} />
            )}
        </ConteinerFilms>
    )
}

const ConteinerFilms = styled.div`
    width: 374px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img{
        width: 129px;
        height: 193px;
        margin-bottom: 30px;
        border: 2px solid white;
    }
`