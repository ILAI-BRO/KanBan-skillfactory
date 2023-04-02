import {  Routes, Route} from "react-router-dom";
import Board from "./Board";
import Task from "./Task";
import styles from './Main.module.css';

function Main(props) {
    return (
    <main className={styles.main} >
    <Routes>
        <Route path={"/"} element={<Board {...props} />} />
        <Route path={"tasks/:taskId"} element={<Task {...props} />} />
    </Routes>
    </main>
    )
}

export default Main;