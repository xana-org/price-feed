import React from 'react'
import './index.scss'

const TableItem = ({name, rank, votes, voteWeight, proposalsVoted}) => (
  <a className="d-flex align-items-center flex-wrap delegatee-summary">
    <div className="col-xs-10 col-sm-6">
      <div className="delegatee-summary__details d-flex align-items-center">
        <div className="delegatee-summary__details__rank-view">
          <label className="delegatee-summary__details__rank">
            {rank}
          </label>
        </div>
        <div className="gov-profile-image gov-profile-image--small">
          <img 
            id="img-0x9aa835bc7b8ce13b9b0c9764a52fbf71ac62ccf1" 
            className="gov-profile-image__raw-image" 
            src="https://profile.compound.finance/1cANZxX2uHM_gbyIKhhmJnQtsBv59IS2N/F4y7ebcI7OXCNuEfBfWkMW0eWefxQKIjxKtf9q97r2w=" />
          <div class="gov-profile-image__proposer-icon gov-profile-image__proposer-icon--small gov-profile-image__proposer-icon--light" />
        </div>
        <span>{name}</span>
      </div>
    </div>
    <div className="col-2 text-right mobile-hide">{votes}</div>
    <div className="col-2 text-right">{voteWeight}</div>
    <div className="col-2 text-right">{proposalsVoted}</div>
  </a>
)

export default TableItem