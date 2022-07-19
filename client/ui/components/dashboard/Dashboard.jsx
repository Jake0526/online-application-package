import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import {Panel, DataTable} from "meteor/smart-template";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { DashboardContent } from './content/DashboardContent';

import App from '../app/App';

const client = new ApolloClient({
    uri: "/online-application/graphql",
    cache: new InMemoryCache()
});

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// $('body').addClass('layout-top-nav');
	}

	render() {

		return (
			<App active="dashboard" state={this.props.state}>
				<ApolloProvider client={client}>
				<div className="subheader">
					<h1 className="subheader-title">
						<i className='subheader-icon fal fa-chart-area'></i> Dashboard
					</h1>
				</div>
				<Panel title="Dashboard" hideAction={true}>
					<Panel.Content>
						{/* <DashboardContent /> */}
					</Panel.Content>
				</Panel>
				</ApolloProvider>
			</App>
		);
	}
};