import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import queryString from 'query-string';
import {
  DetailWrapper,
  Header,
  WriterWrapper,
  WriterInfo,
  WriterName,
  WriterDetails,
  Content,
} from './style';
import avatar from '../../statics/avatar.png';
import { actionCreators } from './store';

// 被withRouter包裹后，变成路由组件，props上多出3个路由对象
class Detail extends PureComponent {
  componentDidMount() {
    // 1. 动态路由传参获取方式
    const {
      getDetail,
      match: {
        params: { id },
      },
    } = this.props;
    getDetail(id);
    // 2. 查询字符串参数获取方式
    /* const search = queryString.parse(this.props.location.search);
    this.props.getDetail(search.id); */
  }
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <WriterWrapper>
          <Link to='/' className='avatar'>
            <img src={avatar} alt='' />
          </Link>
          <WriterInfo>
            <WriterName>
              <span>志丹瑜伽</span>
              <i>标志</i>
              <button>关注</button>
            </WriterName>
            <WriterDetails>2021.05.15 20:15:17 字数 1,837 阅读 2,790</WriterDetails>
          </WriterInfo>
        </WriterWrapper>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.getIn(['detailState', 'title']),
    content: state.getIn(['detailState', 'content']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
