import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListWrapper, ListItem, ListInfo, ListMore } from '../style';
import { actionCreators } from '../store';
class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <ListWrapper>
        {articleList.map((item, index) => {
          return (
            <ListItem key={index}>
              <img className='img-blur-done' src={item.get('imgUrl')} alt={item.get('title')} />
              <ListInfo>
                <Link to={`/detail/${item.get('id')}`} className='title'>
                  {item.get('title')}
                </Link>
                <p className='description'>{item.get('desc')}</p>
                <div>热点</div>
              </ListInfo>
            </ListItem>
          );
        })}
        <ListMore onClick={() => getMoreList(articlePage)}>阅读更多</ListMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['homeState', 'articleList']),
    articlePage: state.getIn(['homeState', 'articlePage']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoreList(articlePage) {
      dispatch(actionCreators.getMoreList(articlePage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
