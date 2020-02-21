
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

// Test에서 사용하기 위해 따로 관리


export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory // context설정
  }
}); // 사가 미들웨어를 만듭니다.

const store = createStore(
  rootReducer,
  // 선언순서가 logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware, // 사가 미들웨어를 적용하고
      logger
    )
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

// 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 이 코드를 실행해야합니다.
console.log('[System]','redux store is created')
sagaMiddleware.run(rootSaga); 

export default store;