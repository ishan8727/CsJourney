import { useEffect, useState } from "react";

function useSwr(url){
    
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    
    useEffect(()=>{

      const controller = new AbortController();

        (async () => {
          setLoading(true);
          setErr(null);
            try {
                let res = await fetch(url, {
                  signal: controller.signal
                });
                res = await res.json();
                if(res){
                  setData(res);
                }else {
                  console.log('No data!');
                  return;
                } 
            } catch (error) {
              if(error.name == "AbortError"){
                return;
              }
                setErr(error);
                console.log('error fetching data!');
            }
            finally{
              setLoading(false);
            }
          
        })();

        return()=>{
          controller.abort();
        }
        
    },[url]);

    return { data, loading, err }
}

export default useSwr;