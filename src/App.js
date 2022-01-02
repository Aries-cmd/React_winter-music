import React, { memo } from 'react'
import { Provider } from 'react-redux'

import Router from './router'
import store from './store'

import WINAppHeader from 'components/app-header'
import WINAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <WINAppHeader/>
      {Router()}
      <WINAppFooter/>
    </Provider>
  )
})


