import React from 'react';
import NavMenu from '../components/UI/molecules/NavMenu';
import AddButton from '../components/UI/molecules/AddButton';

export default {
	title: 'Molecules',
	component: NavMenu,
};

export const navMenu = () => {
	return <NavMenu menu={'nav-home'}/>;
};

export const projectNav = () => {
	return <AddButton />;
};