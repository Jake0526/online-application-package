import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { DashboardContent } from './content/DashboardContent';

import App from '../app/App';

export default class HomeGuest extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// $('body').addClass('layout-top-nav');
	}

	render() {

		return (
			<App active="home-guest">
				<div className="row">
					<div className="col-md-3 col-sm-4">
						<h3>sample</h3>
=					</div>
					<div className="col-md-9 col-sm-8">
						<h1>sample</h1>
					</div>
				</div>
			</App>
		);
	}
};