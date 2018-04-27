import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import LoadMore from '../../components/utility/LoadMore';


class PostsIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      images: null,
      per_page: 5
    };
    this.loadMore = this.loadMore.bind(this);
  }


  componentDidMount() {
    $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?',
      dataType: 'jsonp',
      success: (data) => {
        data.items.map(item => {
          const linkArray = item.link.split('/');
          item.link = linkArray[linkArray.length - 2] + linkArray[linkArray.length - 1];
        });
        this.setState({ images: data.items });
      }
    });
  }

  loadMore() {
    this.setState(prevState => ({ per_page: prevState.per_page + 5 }));
    this.componentDidMount();
  }

  render() {
    return (
      <div className="container">

        {this.state.images && this.state.images.map((image,i) =>
          <div className="border" key={i}>
            <div className="row">
              <div className="col-md-9">
                <Link to={`/posts/${image.link}`}>
                <img
                  src={image.media.m}
                />
              </Link>
            </div>
            <div>
              <Link to={`/posts/${image.link}`} className="title"><h2>{image.title}</h2></Link>
              <h4 className="author"><a href={image.author_id}>{image.author}</a></h4>
              <h4 className="published">{image.published}</h4>
              <a href={image.link} className="view">View on Flickr</a>
            </div>
          </div>
        </div>
      )}
      <button onClick={this.loadMore} className="form-control btn btn-danger load-button">Load more</button>
    </div>
  )
}
}

export default PostsIndex;
