import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';
class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    // 绑定一些事件
    this.bindEvents();
  }

  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  };

  // 回到顶部
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  // 卸载事件监听
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src='https://th.bing.com/th/id/R7b5902f746291dbe12d2b11a34f902c5?rik=%2fBpw80YGgxTWpw&riu=http%3a%2f%2fimage.namedq.com%2fuploads%2f20200816%2f11%2f1597550363-ioRHegjwqA.jpg&ehk=PftSoq1klaTT2Y0uYOLoyJk19FoCBZNh8TgLMP1E4jA%3d&risl=&pid=ImgRaw'
            alt='读书图片'
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <DownloadApp />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>
            <i className='iconfont top'>&#xe60c;</i>
          </BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => ({
  showScroll: state.getIn(['homeState', 'showScroll']),
});

const mapDispatchToProps = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 400) {
        /* 显示回到顶部按钮 */
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        // 不显示回到顶部按钮
        dispatch(actionCreators.toggleTopShow(false));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
