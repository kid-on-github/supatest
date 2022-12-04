import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import styles from './Header.module.css'
import { supaClient } from '../../utils/supaClient'

export const Header = () => {
	const signOut = async () => {
		const { error } = await supaClient.auth.signOut()
	}

	const { user = null } = useContext(UserContext)?.session ?? {}
	console.log('user', user)

	return (
		<div className={styles.Header}>
			<div className={styles.HeaderContent}>
				<Link to={'/'} className={styles.Logo}>
					<h1>logo</h1>
				</Link>

				{user ? (
					<button className={styles.AuthButton} onClick={signOut}>
						Sign Out
					</button>
				) : (
					<Link to={'/auth'} className={styles.AuthButton}>
						Sign In
					</Link>
				)}
			</div>
		</div>
	)
}
