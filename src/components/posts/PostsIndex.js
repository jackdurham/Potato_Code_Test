import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';


class PostsIndex extends React.Component {
  state = {
    title: null,
    images: null,
    published: null,
    author: null,
    link: null
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?',
      dataType: 'jsonp',
      success: (data) => this.setState({ images: data.items })
    });
  }

  render() {
    return (
      <div>
        { this.state.images && this.state.images.map(image =>
          <div>
          <h2>{image.title}</h2>
          <img
            src={image.media.m}
          />
          <h4>{image.author}</h4>
          <h4>{image.published}</h4>
        </div>
        )}




      </div>
    )
  }
}

export default PostsIndex;
