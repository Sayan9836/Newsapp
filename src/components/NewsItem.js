// import React, { Component } from 'react'
import React from 'react'
import LoadingBar from 'react-top-loading-bar'

// export class NewsItem extends Component {
const NewsItem = (props) => {
  // render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "16px auto" }}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1 }}>
          {source}
          <span className="visually-hidden"></span>
        </span>
        <img src={imageUrl ? imageUrl : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DKD5DWHJCQI6XIV2HPRR2NESLA.jpg&w=1440"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}


export default NewsItem
