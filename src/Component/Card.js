import React from 'react'
import { Link } from 'react-router-dom'
import Card1 from './Card1'

function Card(props) {
    return (
<div className='row'>
        <div className="col-md-3">
               <Card1 title='wochinmachine liquid '  discription="my dic"/>
            </div>
            <div className="col-md-3">
            <Card1 title='cloth liquid  '  discription="my dic" />
             
         </div>
         <div className="col-md-3">
            <Card1 title='vashan liquid '  discription="API" />
         </div>
         <div className="col-md-3">
            <Card1 title='machinary liquid '  discription="my dic" />
         </div>
         <div className="col-md-3">
            <Card1 title='floor cliner  '  discription="my dic" />
         </div>
         </div>
            
            
            
    )
}

export default Card
