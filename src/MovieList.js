import { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: 1000,
            id: 1
        },
        {
            name: "Lord of The Rings",
            price: 2000,
            id: 2
        },
        {
            name: "Shawshank Redemption",
            price: 3000,
            id: 3
        }
    ])

    return ( 
        <>
            {
                movies.map((movie) => (
                    <Movie name={movie.name} price={movie.price} key={movie.id}/>
                ))
            }
        </>

     );
}
 
export default MovieList;