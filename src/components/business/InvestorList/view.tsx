import * as React from 'react';

import './style.css';

import ListPanel from 'comps/utils/ListPanel';

const InvestorList = ({ investors, activeInvestor, activateInvestor }) => (
  <div className="investor-list">
    <h3>
      Investor List
      <span> (5 independent one at most)</span>
    </h3>
    <ListPanel.view>
      <ul className="odd-even-list">
        {investors.map(({ id }) => (
          <li
            key={id}
            className={id === activeInvestor ? 'active' : ''}
            onClick={() => void activateInvestor(id)}
          >
            {id}
          </li>
        ))}
      </ul>
    </ListPanel.view>
  </div>
);

export default InvestorList;
