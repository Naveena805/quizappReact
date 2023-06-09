import React from 'react'
import Main from './components/pages/Main'
import { Provider } from 'react-redux'
import store from './components/pages/store'
 //import Main from './components/Weatherapp/Main'
const App = () => {

  return (
    <div>
    <Provider store={store}>
    <Main/>
   </Provider>

    </div>
  )
}

export default App