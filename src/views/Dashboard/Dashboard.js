import React from 'react';
import DashboardBody from './DashboardBody';
import DashboardNavbar from './DashboardNavbar';

const Dashboard = () => {
	return (
		<div className="h-screen dark:bg-template-signup-text dark:text-white">
			<DashboardNavbar />
			<DashboardBody />
		</div>
	);
};

export default Dashboard;
