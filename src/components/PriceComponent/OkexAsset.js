import React, { useState, useEffect, Fragment } from 'react'
import { getDerivedETHFromUniswap } from 'API'
import _ from 'lodash'
import moment from 'moment'
import {useInterval} from 'react-use';
import { request } from 'graphql-request'
import Spinner from 'assets/spinner.svg'

const getAsset = (pair) => _.split(pair, '-')[0] 

const Asset = ({asset, price}) => {
  const [pricePercentage, setPricePercentage] = useState(null)
  const [timestamp, setTimestamp] = useState(null)
  const [pastTime, setPastTime] = useState(0)

  useInterval(() => {
    const timeDiff = moment().diff(timestamp)
    setPastTime(moment.utc(timeDiff).format('mm [min],ss [secs]'))
  }, 1000)
  useEffect(() => {
    setTimestamp(moment())
    if (price === null)
      setPricePercentage(0)
    else
      setPricePercentage(parseFloat(((parseFloat(price) - parseFloat(price)) / parseFloat(price) * 100).toFixed(2)))
  }, [asset, price])
  return (
    <div className="prices-card">
      {pastTime && asset.length > 0 ? <Fragment>
        <div className="prices-card__text-section">
          <div className="prices-card__text">
            {asset}
          </div>
          <div className="prices-card__subtext-section">
            <h3 className="prices-card__text">{price > 0 && "$"}{price}</h3>
            <p className={`prices-card__subtext ${pricePercentage < 0 ? "prices-card__subtext--red" : "prices-card__subtext--green"}`}>
              {pricePercentage > 0 && '+'}{pricePercentage}{typeof pricePercentage === "number" && "%"}
            </p>
          </div>
          <div className="prices-card__subtext-section">
            <p className="prices-card__subtext">{pastTime} ago</p>
          </div>
        </div>
        <img className="prices-card__icon" src={require(`../../assets/${asset.toLowerCase()}.png`)} alt="icon" />
      </Fragment>: <img src={Spinner} alt="Spinner" />}
    </div>
  )
}

export default Asset;