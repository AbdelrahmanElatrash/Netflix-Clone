import { useState,useEffect } from 'react';
import MovieList from './MovieList'

const TRENDING_URL = process.env.TRENDING_URL || "http://localhost:5000/trending"

function Home() {
    const [data, setData]=useState([]);
    const fetchData=()=>{
        fetch(TRENDING_URL)
            .then((res) => res.json())
            .then((data) => {
                setData([data])
            })
            .catch((err) => {
                console.log(err);
            });
    }
        
    useEffect(()=>{
        fetchData();
    }, [])     
           


    return (
        <>
            <MovieList movies={data} />
        </>
    )
}
export default Home;