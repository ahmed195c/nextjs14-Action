import styles from "@/app/components/navbar/navbar.module.css"
import Links from "@/app/components/navbar/links/Links"

const Navbar = () => {

    return(
        <>
        <div className={styles.cont}>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <Links />
            </div>
        </div>
        </>

    )

}

export default Navbar;