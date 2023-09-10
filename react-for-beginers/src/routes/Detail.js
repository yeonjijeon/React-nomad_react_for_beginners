import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Detail() {
    const { id } = useParams()
    const getMovie = async () => {
        const json = (
            await fetch(
                `https://yts.mx/apihttps://yts.mx/api/v2/list_movies.json?movie_id=${id}`
            )
        ).json()
    }
    useEffect(() => {
        getMovie()
    }, [])

    return <h1>Detail</h1>
}

export default Detail
