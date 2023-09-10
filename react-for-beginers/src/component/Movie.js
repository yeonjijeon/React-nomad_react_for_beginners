import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PropTypes } from 'prop-types'

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

// Movie.propTypes = {
//   id: PropTypes.number.isReauired,
//   coverImg: PropTypes.string.isReauired,
//   title: PropTypes.string.isReauired,
//   summary: PropTypes.string.isReauired,
//   genres: PropTypes.arrayOf(PropTypes.string).isReauired,
// }

export default Movie
