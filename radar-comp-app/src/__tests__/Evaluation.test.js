import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer'
import store from '../store/configureStore'
import Evaluation from '../components/ModelEvaluation/Evaluation';

test('List of skills appears when render', () => {
    const comp = renderer.create(
        <Provider store={store}>
            <Evaluation/>
        </Provider>
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
})