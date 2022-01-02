import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";

import { NavLink, useNavigate } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

export default memo(function WINAppHeader() {
  const navigate = useNavigate();

  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <h2 className="logo sprite_01" onClick={() => navigate("/")}></h2>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            allowClear
            size="small"
            className="search"
          />
          <button className="center">
            <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter">
              创作者中心
            </a>
          </button>
          <a className="right">登录</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
