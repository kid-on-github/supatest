import { useState } from 'react'
import { supaClient } from '../../utils/supaClient'
import { Page } from '../Page/Page'
import styles from './AuthPage.module.css'
import type { Provider } from '@supabase/gotrue-js'

const register = async () => {
	const { data, error } = await supaClient.auth.signUp({
		email: 'example@email.com',
		password: 'example-password',
	})
}

const login = async () => {
	const { data, error } = await supaClient.auth.signInWithPassword({
		email: 'example@email.com',
		password: 'example-password',
	})
}

const socialLogin = async (provider: Provider) => {
	const { data, error } = await supaClient.auth.signInWithOAuth({
		provider,
	})
}

export const AuthPage = () => {
	const [actionType, setActionType] = useState<'sign_in' | 'sign_up'>('sign_in')

	const toggleActionType = () => {
		setActionType(actionType === 'sign_in' ? 'sign_up' : 'sign_in')
	}

	return (
		<Page>
			<div className={styles.AuthPage}>
				<div className={styles.AuthCard}>
					<h1>{actionType === 'sign_in' ? 'Sign In' : 'Register'}</h1>

					<button className={styles.ActionButton}>
						{actionType === 'sign_in' ? 'Sign In' : 'Register'}
					</button>

					<button className={styles.AuthToggle} onClick={toggleActionType}>
						{actionType === 'sign_in' ? 'Create an Account' : 'Sign in'}
					</button>

					<span className={styles.Or}>
						<hr />
						<p>or</p>
						<hr />
					</span>

					<button
						className={styles.GoogleAuth}
						onClick={() => socialLogin('google')}
					>
						Sign In with Google
					</button>
				</div>
			</div>
		</Page>
	)
}
