import React, { Component } from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=39bee2cde97145189fedd9c1abd896a2&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    console.log('result', this.state.articles);
  }
  handleNext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 3))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=39bee2cde97145189fedd9c1abd896a2&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();

      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=39bee2cde97145189fedd9c1abd896a2&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: parseData.articles, page: this.state.page - 1 });
  };
  render() {
    return (
      <>
        <NavBar />
        <div className="container my-3">
          <h2 className="text-center" style={{textTransform:'capitalize'}}>Top News Headline:{this.props.category}</h2>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <div className="row">
              {this.state.articles &&
                this.state.articles.map((item, index) => (
                  <div className="col-md-4 my-2" key={index}>
                    <NewsItem
                      title={item.title && item.title.slice(0, 40)}
                      tooltip={item.title && item.title}
                      description={
                        item.description && item.description.slice(0, 30)
                      }
                      imageUrl={!item.urlToImag && item.urlToImage}
                      newsUrls={item.url && item.url}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between p-5">
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            type="button"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
