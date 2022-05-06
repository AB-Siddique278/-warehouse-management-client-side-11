import { useEffect, useState } from "react"

const useServices = () =>{

    const [inventory, setInventory] =useState([])
    useEffect(()=>{

        fetch('https://serene-reaches-38236.herokuapp.com/service')
        .then(response => response.json())
        .then(data => setInventory(data))

    },[])
    return [inventory, setInventory]

}
export default useServices;