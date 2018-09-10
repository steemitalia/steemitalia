import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import './Topics.less';

const customTopics = [
  'bitcoin',
  'blockchain',
  'cryptocurrency',
  'economy',
  'money',
  'society',
  'politics',
  'work',
  'psychology',
  'philosophy',
  'communication',
  'literature',
  'history',
  'book',
  'nature',
  'health',
  'science ',
  'technology',
  'scienze ',
  'itastem',
  'travel',
  'world',
  'adventure',
  'story',
  'writing',
  'poetry',
  'life',
  'art',
  'photography ',
  'drawing',
  'video',
  'food',
  'howto',
  'tutorial',
  'hobby',
  'game',
  'entertainment ',
  'sport ',
  'music ',
  'cinema',
  'introduceyourself ',
  'steemit ',
  'contest',
];

class Topics extends React.Component {
  static propTypes = {
    favorite: PropTypes.bool,
    // topics: PropTypes.arrayOf(PropTypes.string),
    maxItems: PropTypes.number,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    favorite: false,
    // topics: [],
    maxItems: 10,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  changeVisibility(showMore) {
    this.setState({ showMore });
  }

  render() {
    const { favorite, maxItems, loading } = this.props;
    const topics = customTopics;
    const displayedTopics = this.state.showMore ? topics : topics.slice(0, maxItems);

    return (
      <div className="Topics">
        <h4>
          <FormattedMessage
            id={favorite ? 'favorite_topics' : 'trending_topics'}
            defaultMessage={favorite ? 'Favorite topics' : 'Trending topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && topics.length > maxItems && !this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && topics.length > maxItems && this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}
      </div>
    );
  }
}

export default Topics;
