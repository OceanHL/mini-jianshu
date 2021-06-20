import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Writer extends Component {
  render() {
    const { login } = this.props;
    if (login) {
      // 没有登陆
      return <div>写文章页面</div>;
    } else {
      // 登陆了
      // 跳回到首页
      return <Redirect to='/login' />;
    }
  }
}

const mapStateToProps = state => ({
  login: state.getIn(['loginState', 'login']),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
