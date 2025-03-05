import { getGummys } from "../api"
import { useState, useEffect } from "react"
import { GummyCard } from "../components/GummyCard"

export function Home() {

    const [gummys, setGummys] = useState([])

    useEffect( () => {

        async function loadAllGummys(){
            const data = await getGummys()
            data.sort((d1, d2) => new Date(d2.dateCreated).getTime() - new Date(d1.dateCreated).getTime())
            setGummys(data)
            
        }
        loadAllGummys()
    }, [])

    return(
        <>
        Home Page

        {gummys.map((gummy) => {
            return (
<GummyCard gummy={gummy}/>
            )
        })}
        </>
    )
}
