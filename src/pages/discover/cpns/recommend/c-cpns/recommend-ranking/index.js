import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import ThemeHeaderRcm from '../../../../../../components/theme-header-rcm'
import TopRanking from '../../../../../../components/top-ranking'
import { getTopListAction } from '../../store/actionCreators'
import { RankingWrapper } from './style'

export default memo(function RecommendRanking() {

  // redux hook
  const dispatch = useDispatch()
  const {upRanking, newRanking, originRanking} = useSelector((state) => ({
    upRanking: state.recommend.upRanking,
    newRanking: state.recommend.newRanking,
    originRanking: state.recommend.originRanking
  }), shallowEqual)

  // other hook
  useEffect(() => {

    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="版单" />
      <div className='tops'>
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
