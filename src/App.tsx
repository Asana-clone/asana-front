import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';


const UserHome = lazy(() => import('./components/pages/user/UserHome'))
const Board = lazy(() => import('./components/pages/project/Board'))
const Calendar = lazy(() => import('./components/pages/project/Calendar'))
const Dashboard = lazy(() => import('./components/pages/project/Dashboard'))
const List = lazy(() => import('./components/pages/project/List'))
const Overview = lazy(() => import('./components/pages/project/Overview'))


const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<UserHome test={'홈입니다.'}/>}/>
					<Route path="/overview" element={<Overview/>}/>
					<Route path="/board" element={<Board/>}/>
					<Route path="/calendar" element={<Calendar/>}/>
					<Route path="/dashboard" element={<Dashboard/>}/>
					<Route path="/list" element={<List />} />
				</Routes>
				</Suspense>
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;
