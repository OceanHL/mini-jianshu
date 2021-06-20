/* 
  rcredux
  rcreduxp
  rfcredux
  rfcreduxp
*/
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, InputWrapper, Input, Button } from './style';

class Login extends PureComponent {
  render() {
    const { login, handleLogin } = this.props;
    if (!login) {
      // 没有登陆
      return (
        <LoginWrapper>
          <LoginBox>
            <InputWrapper>
              <Input
                className='no-bottom'
                placeholder='账号'
                ref={input => (this.account = input)}
              />
              <Input placeholder='密码' type='password' ref={input => (this.password = input)} />
            </InputWrapper>
            <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      // 登陆了
      // 跳回到首页
      return <Redirect to='/' />;
    }
  }
}

const mapStateToProps = state => {
  return {
    login: state.getIn(['loginState', 'login']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin(accountElement, passwordElement) {
      dispatch(actionCreators.login(accountElement.value, passwordElement.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
