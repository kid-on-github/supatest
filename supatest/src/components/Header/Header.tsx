import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<div className={styles.Header}>
			<div className={styles.HeaderContent}>
				<Link to={'/'} className={styles.Logo}>
					<h1>logo</h1>
				</Link>

				<Link to={'/auth'} className={styles.SignIn}>
					Sign In
				</Link>
			</div>
		</div>
	)
}
