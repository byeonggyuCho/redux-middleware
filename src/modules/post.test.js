import posts, { getPost } from './posts';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import configureStore from '../configureStore';

describe('post', () => {
  describe('actions', () => {
    const store = configureMockStore([thunk])();
    
    it('getPost dispatches proper actions', async () => {
      nock('http://jsonplaceholder.typicode.com')
        .get('/posts/1').once().reply(200, {
          title: 'hello world',
          body: 'world'
        });
      await store.dispatch(getPost(1));
      expect(store.getActions()[0]).toHaveProperty('type', 'GET_POST');
      //expect(store.getActions()[1]).toHaveProperty('type', 'GET_POST_SUCCESS');
      expect(store.getActions()).toMatchSnapshot();
    });

    it('fails', async () => {
      store.clearActions(); // 기존 액션 비우기
      nock('http://jsonplaceholder.typicode.com')
      .get('/posts/0').once().reply(400);
      try {
        await store.dispatch(getPost(0));
      } catch (e) {

      }
      expect(store.getActions()).toMatchSnapshot();
    });
  });

//   describe('reducer', () => {
//     const store = configureStore();
//     it('should process getPost', async () => {
//       nock('http://jsonplaceholder.typicode.com')
//         .get('/posts/1').once().reply(200, {
//           title: 'hello world',
//           body: 'world'
//         });
//         await store.dispatch(getPost(1));
//         expect(store.getState().post.title).toBe('hello world');
//     });
//   });
});