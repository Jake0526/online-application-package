import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import {Panel, DataTable} from "meteor/smart-template";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

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
            <div className="subheader-block d-lg-flex align-items-center border-faded border-right-0 border-top-0 border-bottom-0 ml-3 pl-3">
              {/* <div className="d-inline-flex flex-column justify-content-center mr-3">
                  <span className="fw-300 fs-xs d-block opacity-50">
                      <small>Contract of Servicec</small>
                  </span>
                  <span className="fw-500 fs-xl d-block color-danger-500">
                  123,456
                  </span>
              </div> */}
              {/* <span className="sparklines hidden-lg-down" sparktype="bar" sparkbarcolor="#fe6bb0" sparkheight="32px" sparkbarwidth="5px" values="1,4,3,6,5,3,9,6,5,9,7"></span> */}
            </div>
          </div>
				<Panel title="Dashboard" hideAction={true}>
					<Panel.Content>

					</Panel.Content>
				</Panel>
				</ApolloProvider>
			</App>
		);
	}
};