import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannersAction } from "../../store/actionCreators";

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel } from "antd";  // 引入轮播图组件

function TopBanner() {

  // 
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件 和 redux 关联：获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  ); // shallowEqual：进行浅层比较
  const dispatch = useDispatch();

  // 其他的 hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  // console.log(topBanners);
  // 如果把一个函数作为参数传到一个组件里面，
  // 可以使用 useCallback 来对当前状态进行缓存和记忆
  // BannerWrapper 毛边玻璃背景函数
  const bannerChangeBg = useCallback((from, to) => {
    // console.log(from, to);
    setCurrentIndex(to)
  })
  // 后面拼接 "?imageView&blur=40x20" 就会变成毛边玻璃  
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay dotPosition="bottom" ref={bannerRef} beforeChange={bannerChangeBg}>
           {
             topBanners.map((item, index) => {
               return (
                 <div key={item.targetId} className="banner-item">
                   <img className="image" src={item.imageUrl} />
                 </div>
               )
             })
           }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        {/* 导入控制点击按钮让轮播图滚动 */}
        {/* bannerRef.current.pre()  切换上一张轮播图 */}
        {/* bannerRef.current.next()  切换下一张轮播图 */}
        <BannerControl>
          <button className="btn left" onClick={() => bannerRef.current.pre()}></button>
          <button className="btn right" onClick={() => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}

export default memo(TopBanner);
