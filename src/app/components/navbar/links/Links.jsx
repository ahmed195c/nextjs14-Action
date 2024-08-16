"use client"

import {useState} from "react"
// import styles from "./links.module.css"
import Navlink from "@/app/components/navbar/links/navlinks/Navlink"


const Links = () =>{
    const links = [
        {title:"Homepage",
            path:"/",
        },
        {title:"About",
            path:"/About"
        },
        {title:"Contact",
            path:"/contact"
        }
    ]

    const [open,set0pen] = useState(false)

    return(
        <>
            {links.map((link => (
                <h1>working</h1>,
                <Navlink item={link} key={link.title}> {link.title} </Navlink>
            )))}
        </>
    )
}

export default Links