import React from 'react'
import { Text, View } from 'react-native/types'
import { Provider } from 'react-redux'
import CounterSlice from './src/redux/CounterSlice'
import store from './src/redux/Store'

function App() {
  return (
    <Provider store={store}>
      <CounterSlice />
    </Provider>
  )
}

export default App