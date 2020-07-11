import React from "react"
import "./App.scss"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./Redux/index"
import cardItemSaga from "./Redux/store/CardItem/CardItem.sagas"
import descriptionItemSaga from "./Redux/store/DescriptionItem/DescriptionItem.sagas"
import ListItems from "./Components/ListItems/ListItems"
import DescriptionItem from "./Components/DescriptionItem/DescriptionItem"
import MessengerPage from "./Pages/MessengerPage/MessengerPage"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(cardItemSaga)
sagaMiddleware.run(descriptionItemSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <div className={"wrapper"}>
      <main className={"main"}>
        <MessengerPage />
      </main>
    </div>
  </Provider>
)

export default App
