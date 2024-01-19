import{ createContext,useContext, useState } from "react";
import fetch from "./fetch";

let UserContext = createContext();

const AppProvider = ({ children }) => {
    let [query,setquery]=useState("titanic");
    let { Loading, Error, movies } = fetch(query);
    return <UserContext.Provider value={{Error, Loading, movies,query,setquery}} >{children}</UserContext.Provider>
};
// global custome hook
const useGlobalContext = () => {
    return useContext(UserContext)
};
export {UserContext,AppProvider,useGlobalContext}



// let api="http://www.omdbapi.com/?apikey=727bbdc1";
   //{ let [movies,setmovies]=useState([])
    // let [Loading,setLoading]=useState(true)
    // const [Error,setError]=useState({show:"false",msg:""});
    // let getMovies=async (url)=>{
    //     setLoading(true)
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         console.log(data)
    //         if (data.Response==="True") {
    //             setLoading(false)
    //             setmovies(data.Search);
    //         }
    //         else{setError({
    //             show : "true",
    //             msg : data.Error,
    //         })}
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     // debouncing 
    //     let timerout=setTimeout(() => {
    //         getMovies(`${api}+&s=${query}`);
    //     }, 700);
    //    return ()=>clearTimeout(timerout)
    // },[query])  }