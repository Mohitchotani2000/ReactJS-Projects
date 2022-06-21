import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,name} = this.props;

    return (
      <div className="my-4">
        <div className="card">
          <img src={!imageUrl?"newsalt.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <footer className="blockquote-footer mt-2"><cite title="Source Title">{!name?"Unknown":name}</cite></footer>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Uknowm":author} on {new Date(date).toGMTString().substr(0,25)}</small></p>
          <a href={newsUrl} target={"_blank"} rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
