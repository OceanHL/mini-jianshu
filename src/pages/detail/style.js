/*
 * @Author: jhl
 * @Date: 2021-05-25 14:35:08
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-25 15:24:00
 * @Description:
 */
import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 666px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const Header = styled.h1`
  margin: 50px 0 20px 0;
  font-size: 30px;
  line-height: 44px;
  color: #404040;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  display: flex;
  font-size: 13px;
  margin-bottom: 32px;
  .avatar {
    display: block;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    img {
      box-sizing: border-box;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #eee;
      object-fit: contain;
    }
  }
`;

export const WriterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

export const WriterName = styled.div`
  margin-top: 3px;
  span {
    font-size: 16px;
    font-weight: 500;
    margin-right: 8px;
  }
  i {
    margin-right: 8px;
  }
`;

export const WriterDetails = styled.div`
  color: #969696;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 0 0 20px;
    font-size: 16px;
    word-break: break-word;
    line-height: 1.8;
    b {
      font-weight: bold;
    }
  }
`;
