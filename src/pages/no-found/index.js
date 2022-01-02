import React, { memo } from "react";

import { NoFoundWrapper } from "./style";

export default memo(function NoFound() {

  function backRoute() {
    window.history.back(-1)
  }

  return (
    <NoFoundWrapper>
      <h2>
        非常抱歉，你访问的页面消失了哦！
        <a onClick={() => backRoute()}>点击我</a>返回上一级页面
      </h2>
    </NoFoundWrapper>
  );
});
