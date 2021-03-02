import React from 'react';
import ReactDOM from 'react-dom';

import AppShell from './router/appshell';
import { ApolloProvider } from "@apollo/client";

import client from './apollo';

ReactDOM.render(
	<ApolloProvider client={ client }>
		<AppShell />
	</ApolloProvider>,
	document.getElementById('app-root')
);