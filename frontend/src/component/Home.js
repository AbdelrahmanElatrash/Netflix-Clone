import { useState,useEffect } from 'react';
import MovieList from './MovieList'



function Home() {
    const serverURL=process.env.REACT_APP_SERVER_URL
    const TRENDING_URL = serverURL+"/trending" //|| "http://localhost:5000/trending"
    console.log(TRENDING_URL)
    const [data, setData]=useState([]);

    const fetchData=()=>{
        fetch(TRENDING_URL)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err);
            });
        

        
    }
        
    useEffect(()=>{
        fetchData() ;
    },[])     
           


    return (

           <MovieList data={data} />

    )
}
export default Home;