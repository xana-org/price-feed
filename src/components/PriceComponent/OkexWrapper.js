import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import OkexAsset from './OkexAsset'

const PriceWrapper = ({ Assets }) => {
  return (
    <div className="row">
      {
        Assets.map((asset, index) => 
        <div className="col-xs-6 col-sm-6 col-lg-3" key={`assetIndex-${index}`}>
          <OkexAsset {...asset} />
        </div>)
      }
    </div>
  )
}

export default PriceWrapper