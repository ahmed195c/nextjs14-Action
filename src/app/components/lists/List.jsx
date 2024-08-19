import styles from "./lists.module.css"

const data = [
    {name:"ahmed",
        age:22,
        position:"worker",
    },
    {name:"amonges",
        age:45,
        position:"boss",
    },
]






const List = () =>{
    return(
        <>
        <div>

        {data.map(( item, index) => (
            <div key={index}>
                <h1>{item.name}</h1>
            </div>
        ))}
        </div>
            <div className={styles.cont}>
                lists
            </div>
        </>
    )
}

export default List