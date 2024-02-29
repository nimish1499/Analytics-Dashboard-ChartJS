export const calculateMetrics = (data) => {
  let totalSales = 0;
  let totalRevenue = 0;
  let totalUsers = 0;

  const salesByYear = {};
  const revenueByYear = {};

  data.forEach((item) => {
    totalSales += item.sales;
    totalRevenue += item.revenue;
    totalUsers += item.userActivity;


    // Calculating sales and revenue by year
    if (salesByYear[item.year]) {
      salesByYear[item.year] += item.sales;
    } else {
      salesByYear[item.year] = item.sales;
    }

    if (revenueByYear[item.year]) {
      revenueByYear[item.year] += item.revenue;
    } else {
      revenueByYear[item.year] = item.revenue;
    }
  });

  const averageSalePerMonth = totalSales / data.length;
  const averageRevenuePerMonth = totalRevenue / data.length;
  const averageUsersPerMonth = totalUsers / data.length;


  return {
    totalSales,
    averageSalePerMonth,
    totalRevenue,
    averageRevenuePerMonth,
    totalUsers,
    averageUsersPerMonth
  };
};
