import React from 'react';
import getStatistic from '../../helpers/statusStatistic';

const Statistics = ({list}) => {
   const stat = getStatistic(list);
   return (
      <div className="statistics">
         <div>Statuses:</div>
         <span className="item">#Hire: {stat.hired}</span>
         <span className="item">#Explored: {stat.explored}</span>
         <span className="item">#One of Screen: {stat.one_of_screen}</span>
         <span className="item">#Scheduled: {stat.scheduled}</span>
      </div>
   )
};

export default Statistics;