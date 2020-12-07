import React from 'react'
import './index.scss'

const ItemHeader = () => (
  <div className="item-wrapper">      
    <div className="col-xs-10 col-sm-6">
      <label>rank</label>
    </div>
    <div className="col-2 text-right mobile-hide">
      <label>Votes</label>
    </div>
    <div className="col-2 text-right">
      <label>Vote Weight</label>
    </div>
    <div className="col-2 text-right mobile-hide">
      <label>Proposals Voted</label>
    </div>
  </div>
)

export default ItemHeader