import './App.css'
import { Home } from './components/Home/Home'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { AuthPage } from './components/AuthPage/AuthPage'
import { UserInfo, useSession } from './utils/useSession'
import { createContext } from 'react'
import { Welcome } from './components/Welcome/Welcome'

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/welcome',
		element: <Welcome />,
	},
	{
		path: '/',
		element: <Home />,
	},
])

export const UserContext = createContext<UserInfo>({
	session: null,
	profile: null,
})

function App() {
	const userInfo = useSession()
	return (
		<UserContext.Provider value={userInfo}>
			<RouterProvider router={router} />
		</UserContext.Provider>
	)
}

export default App
