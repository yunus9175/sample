import React, { Component } from 'react';
import defaultImg from '../assets/image/noimage.png';
import Style from 'style-it';
class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    const { title, description, imageUrl, newsUrls, tooltip } = this.props;
    return (
      <div>
        <Style>
          {`
          .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  // width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

        `}
          <div className="card position-relative">
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
              <p className="card-text">
                {description ? description + '...' : 'no data'}
              </p>
              <a
                href={newsUrls}
                target="_blank"
                className="btn btn-primary btn-sm "
              >
                Read More
              </a>
            </div>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {this.props.source.name}
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>
        </Style>
      </div>
    );
  }
}

export default NewsItem;
