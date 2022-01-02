import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`


// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import { getHotRecommendsAction } from '../../store/actionCreators'


// // 组件 和 redux 关联：获取数据和进行操作
// const { hotRecommends } = useSelector((state) => ({
//   hotRecommends: state.recommend.hotRecommends
// }), shallowEqual)
// const dispatch = useDispatch()
// console.log(hotRecommends);

// // 其他 hook 操作
// useEffect(() => {

//   dispatch(getHotRecommendsAction(8))

// }, [dispatch])



