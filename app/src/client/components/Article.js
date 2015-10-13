import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import PrerenderedMarkup from './PrerenderedMarkup';
import Tags from './Tags';
import When from './When';

class Article extends React.Component {
  render() {
    const {article} = this.props;
    // TODO handle redirects
    return (
      <article>
        <h1>
          <Link to={article.url}>
            {article.title}
          </Link>
        </h1>
        <When createdAt={article.createdAt} updatedAt={article.updatedAt} />
        <div>
          <PrerenderedMarkup html={article.body.html} />
        </div>
        <Tags taggable={article} />
      </article>
    );
  }
}

export default Relay.createContainer(Article, {
  initialVariables: {
    baseHeadingLevel: 2,
  },
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        id
        title
        createdAt
        updatedAt
        url
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
        ${Tags.getFragment('taggable')}
      }
    `,
  },
});