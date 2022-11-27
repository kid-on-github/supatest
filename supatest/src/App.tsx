import './App.css'
import { Home } from './components/Home/Home'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { AuthPage } from './components/AuthPage/AuthPage'

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/',
		element: <Home />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
