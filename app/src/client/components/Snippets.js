import React from 'react';
import Relay from 'react-relay';
import Snippet from './Snippet';

class Snippets extends React.Component {
  _handleSeeMore = event => {
    event.preventDefault();
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    });
  }

  render() {
    return (
      <div>
        <h1>Snippets</h1>
        <ul>
          {
            this.props.viewer.snippets.edges.map(edge => {
              const snippet = edge.node;
              return (
                <li key={snippet.id}>
                  <Snippet snippet={snippet} />
                </li>
              );
            })
          }
        </ul>
        {
          this.props.viewer.snippets.pageInfo.hasNextPage ?
            <a href="#more" onClick={this._handleSeeMore}>Load more&hellip;</a> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(Snippets, {
  initialVariables: {
    count: 3,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
        snippets(first: $count) {
          edges {
            node {
              id
              ${Snippet.getFragment('snippet')}
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
  },
});
