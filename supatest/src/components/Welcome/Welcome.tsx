import { Page } from '../Page/Page'
import styles from './Welcome.module.css'

export const Welcome = () => {
	return (
		<div className={styles.Welcome}>
			<h1>Welcome to supatest!</h1>
			<p>Start editing to see some magic happen!</p>
		</div>
	)
}
