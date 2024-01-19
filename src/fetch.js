import { useState,useEffect }from 'react'
export let api="http://www.omdbapi.com/?apikey=727bbdc1";

export default function Fetch(apiParams) {
    let [Loading,setLoading]=useState(true)
    const [Error,setError]=useState({show:"false",msg:""});
    let [movies,setmovies]=useState([])

    let getMovies=async (url)=>{
        setLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data.Response==="True") {
                setLoading(false)
                setmovies(data.Search||data);
                setError({ show: "false", msg: "" });
            }
            else{setError({
                show : "true",
                msg : data.Error,
            })}
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        // debouncing 
        let timerout=setTimeout(() => {
            getMovies(`${api}&s=${apiParams}`);
        }, 700);
       return ()=>clearTimeout(timerout)
    },[apiParams]) 
    return { Loading, Error, movies };
}
