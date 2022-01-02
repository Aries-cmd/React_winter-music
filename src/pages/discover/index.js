import React, { memo, useEffect } from 'react'

import { dicoverMenu } from '@/common/local-data'

import { DiscoverWrapper, TopMenu } from './style'
import { NavLink, Outlet } from 'react-router-dom'

export default memo(function WINDiscover() {

  return (
      <DiscoverWrapper>
        <div className='top'>
          <TopMenu className='wrap-v1'>
            {
              dicoverMenu.map((item, index) => {
                return (
                  <div key={item.title} className='item'>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </div>
                )
              })
            }
          </TopMenu>
        </div>
        <Outlet/>
      </DiscoverWrapper>
  )
})
