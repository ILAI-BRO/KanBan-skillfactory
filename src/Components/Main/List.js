import { useState } from "react";
import { Link} from "react-router-dom";
import { LIST_TYPES} from "../../config";
import DropDown from './DropDown';
import FormNewTask from './FormNewTask';

import styles from './List.module.css';

function List (props) {
    const { type, title, tasks, addNewTask, setTasks, task } = props;
	const [isFormVisible, setFormVisible] = useState(false);
	
	const handleClick = () => {
		setFormVisible (!isFormVisible );
	};
	const back = tasks.filter(obj => {return obj.status === "backlog"});
	const read = tasks.filter(obj => {return obj.status === "ready"});
	const inProgres = tasks.filter(obj => {return obj.status === "inProgress"});
	
	return (
		
		<div className={styles.list}  >
			<div className = {styles.listItem}>
			<h2 className={styles.listTitle}>{title}</h2>
			{type === LIST_TYPES.FINISHED && <span className={styles.listdel} onClick= {() => setTasks(tasks.filter(task => task.status !== "finished"))}>X</span>}
			</div>
			{ task.length? 
				task.map(task => 
					<Link to={`/tasks/${task.id}`} key={task.id} className={styles.taskLink}>
						<div className= {styles.task} >{task.title}</div>
						
					</Link>
				) : <p>No tasks added yet</p>
			}
			
			{type === LIST_TYPES.BACKLOG && isFormVisible && ( <FormNewTask 
			        addNewTask = {addNewTask} 
			        setFormVisible = {setFormVisible}  /> 
			)}
			
			{type === LIST_TYPES.BACKLOG && <button className={styles.addButton}    onClick={handleClick}  style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

			{type === LIST_TYPES.READY &&  <button  className={ back.length === 0  ?  styles.add : styles.addButton}   onClick={handleClick} disabled= {back.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

			{type === LIST_TYPES.IN_PROGRESS &&  <button  className={ read.length === 0  ? styles.add : styles.addButton}   onClick={handleClick} disabled= {read.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}
			
			{type === LIST_TYPES.FINISHED && <button  className={ inProgres.length === 0  ? styles.add : styles.addButton}   onClick={handleClick} disabled= {inProgres.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

			
			
			{type !== LIST_TYPES.BACKLOG && isFormVisible && ( <DropDown 
				type={type}
				tasks = {tasks}
				setFormVisible = {setFormVisible}
				isFormVisible = {isFormVisible}
				addNewTask = {addNewTask }
				    setTasks = {setTasks}
				task = {task}
				back = {back}
				read = {read}
				inProgres = {inProgres}

					
			/> 
					
			)}
			
		</div>
		
	);
};

export default List;