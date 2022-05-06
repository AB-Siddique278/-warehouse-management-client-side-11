import { useEffect, useState } from "react";


const useItemDetail = serviceId =>{
   
    const [service, setService] = useState({});
    useEffect(() => {

        const url = `https://serene-reaches-38236.herokuapp.com/service${serviceId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setService(data))

    }, [serviceId]);
    return[service]

}
export default useItemDetail