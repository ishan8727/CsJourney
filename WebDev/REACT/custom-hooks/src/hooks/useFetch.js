/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

function useFetch(url){

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    async function fetchData(){
        setLoading(true);

        let res = await fetch(url);
        res = await res.json(); 
        setData(res);

        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetch;
