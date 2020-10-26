import React, { useState, useEffect, Fragment } from 'react'
import { priceFeedAPI } from 'API'
import _ from 'lodash'
import moment from 'moment'
import {useInterval} from 'react-use';
import Spinner from 'assets/spinner.svg'

const getAsset = (pair) => _.split(pair, '-')[0] 

const Asset = ({pricePair}) => {
  const [assetName, setAssetName] = useState('')
  const [pricePercentage, setPricePercentage] = useState(null)
  const [price, setPrice] = useState(null)
  const [hoursBefore, setHoursBefore] = useState(null)
  const [priceFetchTime, setPriceFetchTime] = useState(0)

  useInterval(() => {
    setPriceFetchTime(t => t + 1)
  }, _.random(5, 50) * 1000);

  useEffect(() => {
    priceFeedAPI(pricePair).then(result => {
      const { data } = result
      const timeDiff = moment().diff(moment(data.time))
      setHoursBefore(moment.utc(timeDiff).format('mm [min],ss [secs]'))
      if (price === null)
        setPricePercentage(0)
      else
        setPricePercentage(parseFloat(((parseFloat(data.price) - parseFloat(price)) / parseFloat(price) * 100).toFixed(2)))
      setPrice(parseFloat(data.price).toFixed(2))
      setAssetName(getAsset(pricePair))
    })
  }, [priceFetchTime])
  console.log('assetname', assetName)
  return (
    <div className="prices-card">
      {hoursBefore && assetName.length > 0 ? <Fragment>
        <div className="prices-card__text-section">
          <div className="prices-card__text">
            {assetName}
          </div>
          <div className="prices-card__subtext-section">
            <h3 className="prices-card__text">{price > 0 && "$"}{price}</h3>
            <p className={`prices-card__subtext ${pricePercentage < 0 ? "prices-card__subtext--red" : "prices-card__subtext--green"}`}>
              {pricePercentage > 0 && '+'}{pricePercentage}{typeof pricePercentage === "number" && "%"}
            </p>
          </div>
          <div className="prices-card__subtext-section">
            <p className="prices-card__subtext">{hoursBefore} ago</p>
          </div>
        </div>
        <img className="prices-card__icon" src={require(`cryptocurrency-icons/svg/color/${assetName.toLowerCase()}.svg`)} alt="icon" />
      </Fragment>: <img src={Spinner} alt="Spinner" />}
    </div>
  )
}

const PriceWrapper = ({ Assets }) => {
  return (
    <div className="row">
      {
        Assets.map(asset => 
        <div className="col-xs-6 col-sm-6 col-lg-3">
          <Asset pricePair={asset} />
        </div>)
      }
    </div>
  )
}

export { PriceWrapper }