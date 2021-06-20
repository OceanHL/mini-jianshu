import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, HotTopic } from '../style';

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {topicList.map(item => (
          <TopicItem key={item.get('id')}>
            <img className='topic-pic' src={item.get('imgUrl')} alt={item.get('title')} />
            {item.get('title')}
          </TopicItem>
        ))}

        <HotTopic>
          更多热门专题<i className='iconfont right'>&#xe60d;</i>
        </HotTopic>
      </TopicWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicList: state.getIn(['homeState', 'topicList']),
  };
};

export default connect(mapStateToProps)(Topic);
