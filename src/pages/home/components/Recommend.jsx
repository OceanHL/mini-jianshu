import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecomentWrapper, RecomentItem } from '../style';

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return (
      <RecomentWrapper>
        {recommendList.map(item => {
          return <RecomentItem key={item.get('id')} imgUrl={item.get('imgUrl')} />;
        })}
      </RecomentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendList: state.getIn(['homeState', 'recommendList']),
  };
};

export default connect(mapStateToProps)(Recommend);
