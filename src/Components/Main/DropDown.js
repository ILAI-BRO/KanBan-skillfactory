import {useState} from 'react';
import uniqid from "uniqid";
import { LIST_TYPES } from '../../config';
import Arrow from '../../asset/Vector-arrow.svg';
import styles from './DropDown.module.css';


function DropDown(props) {
const {type, tasks, setTasks, setFormVisible, back, read, inProgres} = props;
const [isEdit, setIsEdit] = useState(false);
    const onClick = (e) => {
        e.preventDefault();
        setIsEdit(true);

        const task = {
            id: uniqid(),
            title: e.target.title,
            description: e.target.getAttribute("data-des"),
            status: type,
        };
        setTasks([...tasks, task])
    };
    const remItem = (e) => {
        setTasks(tasks.filter(task => task.id === e.target.id))
        setFormVisible(false)
    };

    return (
        <div className={styles.arrow}>
            <div className={styles.dropdown}>
                <img src={Arrow} alt="Arrow" />
            </div>
                <div className={styles.dropdownTitle}>
                    {type === LIST_TYPES.READY && back.map(title => 
                        <p key={title.id} id={title.id} title={title.title} data-tag={title.status} data-des = {title.description} data-desc = 'title' className={styles.title} onClick={(e) => !isEdit ? onClick(e) : remItem(e)}>{title.title}</p>)}
                    
                    {type === LIST_TYPES.IN_PROGRESS && read.map(title => 
			         <p key={title.id} id = {title.id}  title ={title.title} data-tag = {title.status} data-desc = 'description'  data-des = {title.description} className={styles.title}   onClick={(e) => !isEdit?onClick(e):remItem(e)}>{title.title}</p>
				)}  
                
			    	{type === LIST_TYPES.FINISHED && inProgres.map(title => 
			         <p key={title.id} id = {title.id}  title ={title.title} data-tag = {title.status} data-desc = 'description'  data-des = {title.description} className={styles.title} onClick={(e) => !isEdit?onClick(e):remItem(e)} >{title.title}</p>
				)}  
                </div>
        </div>
    )
}
export default DropDown;