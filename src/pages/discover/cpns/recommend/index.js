import React, { memo } from "react";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import TopBanner from "./c-cpns/top-banner";

import { Content, RecommendLeft, RecommendRight, RecommendWrapper } from "./style";

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight/>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);

// function Recommend(props) {

//   const { getBanners, topBanners } = props

//   useEffect(() => {

//     getBanners()

//   }, [getBanners])

//   return (
//     <div>
//       <h2>recommend</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
