import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { Base_Url } from '../utiles';

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export class TopNews extends Component {

  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loader: false,
      page: 1
    }
    // console.log(this.articles)
  }

  async updateNews() {
    this.props.progress(10);
    this.setState({ loader: true });
    const url = `${Base_Url(this.props.country, this.props.category, this.props.apiKey, this.props.pageSize)}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("parse", parsedData);
    this.props.progress(100);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loader: false,
    })
  }
  async componentDidMount() {
    console.log("This runs after the render");
    // let url = `${Base_Url(this.props.country, this.props.category, this.props.pageSize)}&page=${this.state.page}&page=${this.state.page}`;
    this.updateNews();
  }

  handlePrev = async () => {
    console.log("prev");
    // let url = `${Base_Url(this.props.country, this.props.category, this.props.pageSize)}&page=${this.state.page}&page=${this.state.page - 1}`;
    await this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }
  handleNext = async() => {

    console.log("Next");
    // this.setState(
    //   () => ({
    //     page: this.state.page + 1
    //   }),
    //   this.updateNews)
    // let url = `${Base_Url(this.props.country, this.props.category, this.props.pageSize)}&page=${this.state.page}&page=${this.state.page + 1}`;
    await this.setState({
      page: this.state.page + 1
    })
    this.updateNews();
  }

  render() {

    return (
      <div className='container'>
        <h1 className='text-center mb-5'>Top Headline News on {this.props.category}</h1>
        {this.state.loader && <ClipLoader cssOverride={override} size={100} />}
        <div className='row'>
          {!(this.state.loader) && this.state.articles.map((article, index) => (
            <div className='col-4' key={index}> {/*{key should be unique} */}
              <NewsItem title={article.title ? article.title : "no title"} imgUrl={article.urlToImage ? article.urlToImage : "https://fetna.org/assets/404-image-1ae2b737.jpg"}
                desc={article.description ? article.description : ""} newsUrl={article.url} author={article.author ? article.author : "No author"} publishedAt={article.publishedAt} source={article.source.name} />
            </div>
          ))}
        </div>
        <div className='container d-flex justify-content-center mt-3'>
          <button disabled={this.state.page <= 1} className='btn btn-dark me-2' onClick={this.handlePrev}>Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}

export default TopNews

