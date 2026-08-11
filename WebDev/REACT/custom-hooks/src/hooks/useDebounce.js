import { useEffect, useRef, useState } from "react";

function useDebounce(value, time){

  const [debounced, setDebouncedValue] = useState();
  
  useEffect(()=>{

    const interval = setTimeout(()=>{
      setDebouncedValue(value);
    }, time)

    return()=>{
      clearTimeout(interval);
    }
  }, [value])
  
  return debounced;
}

export default useDebounce;