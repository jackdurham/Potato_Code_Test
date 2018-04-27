import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import BackButton from '../utility/BackButton';


class PostsShow extends React.Component {
  state = {
    image: null
  }

  componentDidMount() {
    const photoId = this.props.match.params.id;

    $.ajax({
      url:
      `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=5bd3ac199df53e2dd8c5b5ee0810db48&photo_id=${photoId}&format=json&nojsoncallback=1`,
      dataType: 'json',
      success: (data) => this.setState({ image: data }),
    });
  }

  render() {
    const { image } = this.state;

    return (
      <div className="container">
        { this.state.image &&
          <div className="border">
            <main>
              <BackButton />
              <a href={image.link}><h2>{image.photo.title._content}</h2></a>
              <h4 className="showInfo">{image.photo.owner.username}</h4>
              <h4 className="showInfo">{image.photo.dates.taken}</h4>
              <img
                src={image.photo.urls.url._content}
              />
              <p>{image.photo.description._content}</p>
              <p>{image.photo.tags.tag._content}</p>
            </main>
          </div>
        }
      </div>
    )
  }
}



export default PostsShow;
