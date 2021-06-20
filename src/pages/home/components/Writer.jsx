import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterTitle, WriterContent, WriterItem } from '../style';
class Writer extends PureComponent {
  render() {
    const { writerList, writerPage } = this.props;
    const newWriterList = writerList.toJS();
    const pageList = [];

    // 初次渲染newWriterList长度为0，
    // 每次只渲染5个
    if (newWriterList.length > 0) {
      for (let i = (writerPage - 1) * 5; i < writerPage * 5; i++) {
        pageList.push(
          <WriterItem key={newWriterList[i].id}>
            <a href='https://www.baidu.com' className='avatar' target='_blank' rel='noreferrer'>
              <img src={newWriterList[i].avatar} alt='头像' />
            </a>
            <span className='follow'>
              <i className='iconfont'>&#xe624;</i>关注
            </span>
            <p className='name'>{newWriterList[i].name}</p>
            <p className='description'>
              写了{newWriterList[i].wordNumber}k字 · {newWriterList[i].fansNumber}喜欢
            </p>
          </WriterItem>
        );
      }
    }

    return (
      <WriterWrapper>
        <WriterTitle>
          <span>推荐作者</span>
          <span className='page-change'>
            <i className='iconfont change'>&#xe851;</i>换一批
          </span>
        </WriterTitle>
        <WriterContent>{pageList}</WriterContent>
      </WriterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    writerList: state.getIn(['homeState', 'writerList']),
    writerPage: state.getIn(['homeState', 'writerPage']),
  };
};
export default connect(mapStateToProps)(Writer);
