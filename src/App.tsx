import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalNav from './components/UI/organisms/GlobalNav';

const UserHome = lazy(() => import('./components/pages/user/UserHome'));
const Board = lazy(() => import('./components/pages/project/Board'));
const Calendar = lazy(() => import('./components/pages/project/Calendar'));
const Dashboard = lazy(() => import('./components/pages/project/Dashboard'));
const List = lazy(() => import('./components/pages/project/List'));
const Overview = lazy(() => import('./components/pages/project/Overview'));

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<GlobalNav />
				<div style={{ marginLeft: '270px' }}>
					<Routes>
						<Route path="/" element={<UserHome />} />
						<Route path="/overview/:id" element={<Overview />} />
						<Route path="/board" element={<Board />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/list" element={<List />} />
					</Routes>
				</div>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
