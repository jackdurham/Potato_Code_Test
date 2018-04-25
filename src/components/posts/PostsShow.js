import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import BackButton from '../utility/BackButton';


class PostsShow extends React.Component {
  state = {
    title: null,
    images: null,
    published: null,
    author: null,
    link: null,
    description: null,
    tags: null
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?',
      dataType: 'jsonp',
      success: (data) => this.setState({ image: data.items }, () => console.log(data))
    });
  }

  render() {
    return (
      <div className="container">
        { this.state.imagess && this.state.imagess.map((images,i) =>
          <section>
            <div className="border" key={i}>
              <div>
                <div className="col-md-9">
                  <a href={images.link}><h2>{images.title}</h2></a>
                  <h4>{images.author}</h4>
                  <h4>{images.published}</h4>
                  <img
                    src={images.media.m}
                  />
                </div>
                <div>
                  <BackButton />
                  <p className="description">{images.description}</p>
                  <p>{images.tags}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    )
  }
}



export default PostsShow;
