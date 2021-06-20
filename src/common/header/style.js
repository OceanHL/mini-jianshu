/*
 * @Author: jhl
 * @Date: 2021-05-19 20:11:35
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 09:22:46
 * @Description: Header组件样式
 */
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
`;

// a标签是一个内联标签
export const Logo = styled.div`
  display: block;
  position: absolute;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain; // 让背景图片大小铺满整个DIV
`;

export const Nav = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export const NavCenter = styled.div`
  max-width: 945px;
  height: 100%;
  margin: 0 auto;
`;

// NavItem组件的className中有.left则向左浮动
// NavItem组件的className中有.right则向左浮动
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  &.left {
    float: left;
    color: #333;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  .to-home {
    text-decoration: none;
  }
  .menu-icon {
    margin-right: 5px;
    font-size: 20px;
  }
`;

export const SearchWrapper = styled.div`
  float: left; // float触发了bfc
  position: relative;
  .zoom {
    position: absolute;
    right: 10px;
    bottom: 5px;
    line-height: 30px; // 内部文本垂直居中
    text-align: center; // 内部文本水平居中
    width: 30px;
    height: 30px;
    border-radius: 15px;
    /* 拥有.zoom样式类和.focused的样式类的字体图标 */
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const NanSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
    padding-right: 45px;
  }
  /* 动画效果 */
  &.slide-enter {
    /* 入场的第一个时刻，给我来一个过度效果 */
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center; // 设置旋转中心
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
  margin-top: 15px;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`;

// 悬浮在右上角
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  text-align: center;
  /* background-color: #bfa; */
`;

export const Button = styled.button`
  margin-top: 9px;
  line-height: 38px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 19px;
  padding: 0 20px;
  margin-right: 20px;
  &.register {
    color: #ea6f5a;
  }
  &.writing {
    color: #fff;
    background-color: #ea6f5a;
  }
  cursor: pointer;
  :hover {
    border-color: rgba(236, 97, 73, 1);
  }
`;
