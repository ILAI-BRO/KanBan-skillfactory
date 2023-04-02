import { useState } from "react";
import {useMatch, Link} from "react-router-dom";
import styles from './Task.module.css';

function Task(props) {
    const [isEdit, setIsEdit] = useState(false);
    const match = useMatch("tasks/:taskId")
    const {taskId} = match.params;
    const {tasks, setTasks} = props;
    const tas = tasks.find(task => task.id === taskId);

    let element;
    if(!isEdit) {
        element = <span className={styles.descript} onClick={(e) => setIsEdit(true)}  title="Редактировать">
            {tas.discription || "This task has no description"}
        </span>
    } else {

        element = <textarea className={styles.areaText} name="discription" value={tas.discription} onChange={event => setTasks(tasks.map(task => task.id === taskId ? {...task, [event.target.name]: event.target.value} : task))}
        onBlur={() => setIsEdit(false)}/>
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>{tas.title}</h2>
                <p className={styles.textArea}>Description: {element}</p>
            </div>
                <Link to='/' className={styles.homeLink}>&#9587;</Link>
        </div>
    );
};

export default Task;