// import React, { Component } from 'react'

// export class NewsItem extends Component {

//     render() {
//         let {imgUrl, title, desc, newsUrl} = this.props;
//         return (
//             <div>
//                 <div className="card" style={{width: "25rem"}}>
//                     <img src={imgUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{desc}</p>
//                         <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem

import React from 'react';

const NewsItem = ({ title, imgUrl, desc, newsUrl, author, publishedAt, source }) => {
    return (
        <div>
            <div className="card mb-3" style={{ width: "23rem" }}>
                <span className='position-absolute top-0 badge rounded-pill bg-danger'>{source}</span>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                     <p className="card-text"><strong>Author:</strong> {author}</p>
                    {publishedAt && <p className="card-text"><strong>Published At:</strong> {new Date(publishedAt).toLocaleString()}</p>}
                    <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
