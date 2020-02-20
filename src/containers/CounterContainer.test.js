import React from 'react';
import { mount } from 'enzyme';
import CounterContainer from './CounterContainer';
import configureMockStore from 'redux-mock-store';

import { Provider } from 'react-redux';

import * as counterActions from '../modules/counter';
import store from '../configureStore.js';

describe('CounterContainer', () => {
  let component = null;
  let buttons = null;
  const mockStore = configureMockStore();

  // 데이터들을 받아올 가짜 스토어 만들기
  let store = mockStore({
    counter: {
      number: 0
    }
  });

  it('renders properly', () => {
    //component = mount(<CounterContainer store={store} />);
   
    component = mount( 
     <Provider store={store}>
        <CounterContainer />
    </Provider>);
    });


//   it('matches snapshot', () => {
//     expect(component).toMatchSnapshot();
//   });

//   it('dispatches INCREASE action', () => {
//     component.find('button').at(0).simulate('click');
//     expect(store.getActions()[0]).toEqual(counterActions.increase());
//   });

//   it('dispatches DECREASE action', () => {
//     component.find('button').at(1).simulate('click');
//     expect(store.getActions()[1]).toEqual(counterActions.decrease());
//     console.log(store.getActions());
//   });
});