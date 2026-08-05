import { useEffect, useState } from "react";

function useIsOnline(){

        const [isOnline, setIsOnline] = useState(navigator.onLine);
        
        useEffect(() => {
          function updateOnlineListener() {
            setIsOnline(navigation.onLine);
          }
          
          window.addEventListener("online", updateOnlineListener);
          window.addEventListener("offline", updateOnlineListener);
          
          return () => {
            window.removeEventListener("online", updateOnlineListener);
            window.removeEventListener("offline", updateOnlineListener);
          };
        }, []);

        return isOnline;
}

export default useIsOnline;