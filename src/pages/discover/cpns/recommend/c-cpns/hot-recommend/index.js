import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HotRecommendWrapper } from "./style";
import { getHotRecommendsAction } from "../../store/actionCreators";

import ThemeHeaderRCM from "../../../../../../components/theme-header-rcm";
import SongsCover from "../../../../../../components/songs-cover";


export default memo(function HotRecommend() {
  // 组件 和 redux 关联：获取数据和进行操作
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 其他 hook 操作
  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
  }, [dispatch]);
  console.log(hotRecommends);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <SongsCover key={item.id} info={item}></SongsCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  );
});
