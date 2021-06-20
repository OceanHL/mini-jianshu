/*
 * @Author: jhl
 * @Date: 2021-05-24 10:53:37
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-25 10:58:18
 * @Description:
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 300px;
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const HomeLeft = styled.div`
  float: left;
  padding-top: 30px;
  padding-left: 15px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    object-fit: cover;
  }
`;

export const HomeRight = styled.div`
  float: right;
  padding-top: 30px;
  padding-left: 15px;
  min-width: 24px;
`;

// Topic 样式
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
  ::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  color: #000;
  border: 1px solid #dcdcdc;
  background-color: #f7f7f7;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    object-fit: cover;
  }
`;

export const HotTopic = styled.a`
  float: left;
  height: 34px;
  line-height: 34px;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  .right {
    margin-left: 5px;
  }
  /* ::after {
    content: '';
    position: absolute;
    right: -30px;
    top: 5px;
    border: 10px solid transparent;
    border-top-color: red;
    transform: rotate(-90deg);
    transform-origin: center center;
  } */
`;

// List样式
export const ListWrapper = styled.div``;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .img-blur-done {
    float: right;
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  width: 458px;
  height: 100px;
  float: left;
  box-sizing: border-box;
  .title {
    margin-top: 0;
    margin-bottom: 4px;
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    text-decoration-line: none;
    color: #333;
    :hover {
      text-decoration-line: underline;
    }
  }
  .title:visited {
    color: #969696;
  }
  .description {
    height: 48px;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 13px;
    color: #999;
    //设置了第几行出现省略号后,要添加行高为当前高度的几分之一,才会适配移动端.
    line-height: 24px;
    /* 多行文本末尾显示省略号 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    // 在第几行出现省略号,数字就写几,我是第2行出现省略号,所以我写2
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const RecomentWrapper = styled.div`
  margin-bottom: 30px;
  width: 280px;
`;
export const RecomentItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 5px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  border-radius: 3px;
`;

export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
  .page-change {
    float: right;
  }
  .change {
    font-size: 14px;
    margin-right: 3px;
  }
`;

export const WriterContent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  p {
    margin: 0;
  }
`;

export const WriterItem = styled.li`
  margin-top: 15px;
  overflow: hidden;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .follow {
    float: right;
    font-size: 13px;
    color: #42c02e;
  }
  .name {
    padding-top: 5px;
    font-size: 14px;
    color: #333;
  }
  .description {
    margin: 5px 0 7px;
    font-size: 12px;
    color: #969696;
  }
`;

export const ListMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  border-radius: 20px;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.button`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: transparent;
  .top {
    font-size: 18px;
  }
`;
