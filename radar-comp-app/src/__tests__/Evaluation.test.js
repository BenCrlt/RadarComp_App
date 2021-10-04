import React from 'react';
import Evaluation from '../components/ModelEvaluation/Evaluation'
import {create} from 'react-test-renderer'
import { Provider } from 'react-redux';
import store from '../store/configureStore'
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

describe('Evaluation', () => {
    let client;
    beforeEach(() => {
        client = new ApolloClient({
            uri: 'http://localhost:4000/',
            cache: new InMemoryCache()
        });
    })
    test('Displays the information when the query is loaded', () => {
        const evaluationComponent = create(
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Evaluation/>
                </Provider>
            </ApolloProvider>
        );
        let tree = evaluationComponent.toJSON();
        expect(tree).toMatchSnapshot();
    }) 
})

