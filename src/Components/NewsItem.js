import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title,description,imageUrl,newsUrl,author,date}=this.props;
  //  destructing this.prop object hai us say pull kar kay  title and description 
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://gizmodo.com/app/uploads/2024/11/YouTubeOld.jpg":imageUrl} className="card-img-top" alt="..."/>
  {/* use ternary operator in img if notimageurl tab hum imageurl use kary gay otherwise hum null k mjg is urlm ko replace kary gay */}
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By{!author?"unknown":author} on{new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
