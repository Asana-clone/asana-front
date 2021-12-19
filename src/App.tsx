import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import GlobalNav from './components/UI/organisms/GlobalNav';

const UserHome = lazy(() => import('./components/pages/user/UserHome'));
const Board = lazy(() => import('./components/pages/project/Board'));
const Calendar = lazy(() => import('./components/pages/project/Calendar'));
const Dashboard = lazy(() => import('./components/pages/project/Dashboard'));
const List = lazy(() => import('./components/pages/project/List'));
const Overview = lazy(() => import('./components/pages/project/Overview'));

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<GlobalNav />
					<div style={{ marginLeft: '270px' }}>
						<Routes>
							<Route path="/" element={<UserHome test={'홈입니다.'} />} />
							<Route path="/overview" element={<Overview />} />
							<Route path="/board" element={<Board />} />
							<Route path="/calendar" element={<Calendar />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/list" element={<List />} />
						</Routes>
					</div>
				</Suspense>
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;
