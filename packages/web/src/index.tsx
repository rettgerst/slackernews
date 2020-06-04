import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import "./index.scss";

const httpLink = createHttpLink({
	uri: "http://localhost:4000",
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
