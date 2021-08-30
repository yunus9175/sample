import React, { Component } from 'react';
import defaultImg from '../assets/image/noimage.png';
class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    const { title, description, imageUrl, newsUrls, tooltip } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={imageUrl === null ? defaultImg : imageUrl}
            className="card-img-top"
            alt="no image"
            height="200"
            width="200"
          />
          <div className="card-body">
            <span
              class="d-inline-block"
              tabindex="0"
              data-bs-toggle="tooltip"
              title={tooltip}
            >
              <h5
                className="card-title btn-whit"
                // data-bs-toggle="tooltip"
                // data-bs-placement="bottom"
              >
                {title}...
              </h5>
            </span>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrls}
              target="_blank"
              className="btn btn-primary btn-sm "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
