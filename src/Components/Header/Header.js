import UserLogin from './UserLogin'
import styles from './Header.module.css';

function Header () {

    return (
        <header className={styles.header}>
            <h1 className = {styles.title}>Awesome Kanban Board</h1>
            <div ><UserLogin/></div>
        </header>
    )
}

export default Header