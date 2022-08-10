// import React, { Component } from 'react'
import React, { useEffect, useState, } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//Converting class based component into function based component
const News = (props) => {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    // static defaultProps = {
    //     country: "id",
    //     pageSize: 8,
    //     category: 'general'
    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string
    // }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //  article: this.article,
    //         articles: [],
    //         loading: false,
    //         page: 1,
    //         totalResults: 0
    //     }
    //     document.title = `${this.capitalizeFirstLetter(props.category)}-NewsMonkey`
    // }

    const updateNews = async () => {
        props.setprogress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setprogress(30)
        let parsedata = await data.json()
        props.setprogress(60)
        setarticles(parsedata.articles);
        settotalResults(parsedata.totalResults);

        // this.setState({
        //     page: this.state.page,
        //     articles: parsedata.articles,
        //     totalResults: parsedata.totalResults
        // });
        props.setprogress(100)
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, []);
    // async componentDidMount() {

    //     //this.setState({ page: this.state.page = 1 })
    //     this.updateNews()
    // }
    // const handleprevclick = async () => {

    //     // this.setState({ page: this.state.page - 1 })
    //     // this.updateNews()
    //     setpage(page - 1)
    //     updateNews()

    // }
    // const handlenextclick = async () => {
    //     //  if (Math.ceil(this.state.totalResults / props.pageSize) >= this.state.page) {}
    //     // this.setState({ page: this.state.page + 1 })
    //     // this.updateNews()
    //     setpage(page + 1)
    //     updateNews()

    // }

    const fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedata = await data.json()
        // setpage(page)
        setarticles(articles.concat(parsedata.articles))
        settotalResults(parsedata.totalResults)
        // this.setState({
        //     page: this.state.page,
        //     articles: this.state.articles.concat(parsedata.articles),
        //     totalResults: parsedata.totalResults
        // });
    }

    // render() {
    return (
        <>
            {/* <div className='container my-3'> */}
            <h3 className='text-center' style={{ marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h3>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>

    )
}

News.defaultProps = {
    country: "id",
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News

