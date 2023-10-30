"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Providers = ({ children }: { children: any }) => {
	const client = new ApolloClient({
		uri: "https://az-swapkam.cyclic.app",
		//uri: "http://localhost:8000",
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

