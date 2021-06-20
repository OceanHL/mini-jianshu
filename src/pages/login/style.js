/*
 * @Author: jhl
 * @Date: 2021-05-26 09:07:37
 * @LastEditors: jhl
 * @LastEditTime: 2021-05-26 09:47:07
 * @Description:
 */
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 220px;
  margin: 80px auto;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  color: #777;
  outline: none;
  border: 1px solid #c8c8c8;
  &.no-bottom {
    border-bottom: none;
  }
`;

export const Button = styled.div`
  width: 260px;
  height: 30px;
  line-height: 30px;
  padding: 9px 18px;
  font-size: 18px;
  color: #fff;
  background-color: #3194d0;
  border-radius: 25px;
  text-align: center;
`;
