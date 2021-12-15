import React, { Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const UserHome = lazy(() => import('./components/pages/user/UserHome'))
const Board = lazy(() => import('./components/pages/project/Board'))
const Calendar = lazy(() => import('./components/pages/project/Calendar'))
const Dashboard = lazy(() => import('./components/pages/project/Dashboard'))
const List = lazy(() => import('./components/pages/project/List'))
const Overview = lazy(() => import('./components/pages/project/Overview'))

const App = () => {
	return (
		<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<UserHome test={'홈입니다.'}/>}/>
					<Route path="/Overview" element={<Overview/>}/>
					<Route path="/Board" element={<Board/>}/>
					<Route path="/Calendar" element={<Calendar/>}/>
					<Route path="/Dashboard" element={<Dashboard/>}/>
					<Route path="/List" element={<List/>}/>
				</Routes>
				</Suspense>
		</BrowserRouter>
	);
};

export default App;
