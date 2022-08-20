import React from 'react'
import { Link } from 'react-router-dom';

function Card1(props) {
  let {title, discription} = props;
  return (  
    <div className="my-3">
     <div className="card">
    <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0'
    }
    }> 
    </div>
    <img  src="vpllex1.jpeg" className="card-img-top" alt="How to do laundry" />
    <div className="article-card-wrapper with-image">
        <h5 className="article-card-content">{title}  </h5>
        <p className="card-text">{discription} </p>
        <Link rel="noreferrer" to="/TextUtils" target="_blank" className="btn btn-sm btn-dark">Read More</Link>
    </div>
</div>
</div>
  )
}

export default Card1