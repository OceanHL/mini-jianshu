import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavCenter,
  NavItem,
  NanSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

class Header extends PureComponent {
  getListArea = () => {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const pageList = [];
    const newList = list.toJS();
    // 0 - 9, 10 - 19, 20 - 29
    /* 
      初次渲染时，newList为[]空数组，newList[i]为undefined，会出现key不唯一现象
      只有当newList非空时，再循环处理
    */
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={icon => (this.spinIcon = icon)} className='iconfont spin'>
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
            <SearchInfoList>{pageList}</SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, list, login, handleInputFocus, handleInputBlur, handleLogout } = this.props;
    return (
      <HeaderWrapper>
        <Nav>
          <Link to='/'>
            <Logo />
          </Link>
          <NavCenter>
            <Link to='/'>
              <NavItem className='left active'>
                <i className='iconfont menu-icon'>&#xe60f;</i>首页
              </NavItem>
            </Link>
            <Link to='/app'>
              <NavItem className='left'>
                <i className='iconfont  menu-icon'>&#xe6c3;</i>下载App
              </NavItem>
            </Link>
            {login ? (
              <Link to='/'>
                <NavItem className='right' onClick={handleLogout}>
                  退出
                </NavItem>
              </Link>
            ) : (
              <Link to='/login'>
                <NavItem className='right'>登录</NavItem>
              </Link>
            )}
            <NavItem className='right'>
              <i className='iconfont menu-icon'>&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames='slide' // 自动给子组件样式类名加slide-前缀【自定 义前缀】
              >
                <NanSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
              {this.getListArea()}
            </SearchWrapper>
          </NavCenter>
          <Addition>
            <Button className='register'>注册</Button>
            <Link to='/writer'>
              <Button className='writing'>
                <i className='iconfont'>&#xe708;</i>写文章
              </Button>
            </Link>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

// 从store中引入state数据
const mapStateToProps = state => ({
  focused: state.getIn(['headerState', 'focused']),
  list: state.getIn(['headerState', 'list']),
  page: state.getIn(['headerState', 'page']),
  totalPage: state.getIn(['headerState', 'totalPage']),
  mouseIn: state.getIn(['headerState', 'mouseIn']),
  login: state.getIn(['loginState', 'login']),
  // state.get('headerState').get('focused'),
});

// 修改store中的state数据
const mapDispatchToProps = dispatch => ({
  handleInputFocus(list) {
    // 获取焦点处理函数
    // 处理数据，必须需要一个action对象
    list.size === 0 && dispatch(actionCreators.getList());
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur() {
    // 失去焦点处理函数
    dispatch(actionCreators.searchBlur());
  },
  handleMouseEnter() {
    // 鼠标进入处理函数
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    // 鼠标移出处理函数
    dispatch(actionCreators.mouseLeave());
  },
  handleChangePage(page, totalPage, spinIcon) {
    // 将非数字的内容替换为空
    let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, '');
    if (originAngle) {
      originAngle = parseInt(originAngle);
    } else {
      originAngle = 0;
    }
    spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
    if (page < totalPage) {
      // 小于总页数
      dispatch(actionCreators.changePage(page + 1));
    } else {
      // 等于总页数，重置为第1页
      dispatch(actionCreators.changePage(1));
    }
    // 换一换点击事件处理函数
    // dispatch(actionCreators.changePage());
  },
  handleLogout() {
    // 改变loginState中的数据
    dispatch(loginActionCreators.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
