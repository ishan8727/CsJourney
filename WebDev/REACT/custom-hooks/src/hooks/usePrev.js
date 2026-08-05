import { useEffect, useRef } from "react";

function usePrev(currentVal){

    const ref = useRef('click to track');
    
    useEffect(()=>{
        ref.current = currentVal;
    },[currentVal])

    return ref.current;
}

export default usePrev;