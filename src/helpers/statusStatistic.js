const getStatistic = (list) => {
   const statistic = {
      hired: 0,
      scheduled: 0,
      explored: 0,
      one_of_screen: 0,
   };
   list.forEach(item => {
      if (item.status === 'Hire') statistic.hired++;
      if (item.status === 'Scheduled') statistic.scheduled++;
      if (item.status === 'one of Screen') statistic.one_of_screen++;
      if (item.status === 'Explored') statistic.explored++;
   });
   return statistic;
};

export default getStatistic;