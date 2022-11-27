import { useState } from 'react'
import { Page } from '../Page/Page'
import styles from './AuthPage.module.css'

export const AuthPage = () => {
	const [actionType, setActionType] = useState('auth')

	const toggleActionType = () => {
		setActionType(actionType === 'auth' ? 'register' : 'auth')
	}

	return (
		<Page>
			<div className={styles.AuthPage}>
				<div className={styles.AuthCard}>
					<h1>{actionType === 'auth' ? 'Sign In' : 'Register'}</h1>

					<button className={styles.ActionButton}>
						{actionType === 'auth' ? 'Sign In' : 'Register'}
					</button>

					<button className={styles.AuthToggle} onClick={toggleActionType}>
						{actionType === 'auth' ? 'Create an Account' : 'Sign in'}
					</button>

					<span className={styles.Or}>
						<hr />
						<p>or</p>
						<hr />
					</span>

					<button className={styles.GoogleAuth}>Sign in with Google</button>
				</div>
			</div>
		</Page>
	)
}
