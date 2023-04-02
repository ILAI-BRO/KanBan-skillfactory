import {LIST_TYPES} from "../../config";
import styles from './Footer.module.css';

function Footer(props) {
	const {tasks} = props;
    const listBaklog = tasks.filter(task => task.status === LIST_TYPES.BACKLOG);
	const listFinished = tasks.filter(task => task.status === LIST_TYPES.FINISHED);
	const elem = <div>
		               <span className= {styles.count} >Active tasks: <span>{ `< ${listBaklog.length} >` }</span></span>
					   <span className= {styles.count} >Finished tasks: <span>{ `< ${listFinished.length} >` }</span></span>
		         </div>
	
	return (
		<footer className={styles.footer}>
			<div className={styles.counts}>
				
				{elem}
					    
			</div>
			<div>Kanban board by {`SkillFactory: FR-1016, Ayderhanov Ilyas  2023`}</div>
			
		</footer>
	);
}

export default Footer;