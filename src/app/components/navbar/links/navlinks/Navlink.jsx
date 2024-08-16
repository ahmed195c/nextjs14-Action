"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "@/app/components/navbar/links/navlinks/navlink.module.css"
const NavLink = ({item}) => {

    const pathName = usePathname();

    return(
        
        <Link href={item.path} className={`${styles.cont} ${pathName === item.path && styles.active}`}>
            {item.title} 
        </Link>

      

    )
}

export default NavLink