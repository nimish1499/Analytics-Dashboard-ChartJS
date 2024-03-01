import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { Box, useColorModeValue, Flex } from "@chakra-ui/react";

import {
  fetchData,
  fetchTopSelling,
} from "../redux/chartData/chartData.action";

import PieChart from "../components/PieChart";

const Loader = dynamic(() => import("../components/Loader"));
const SelectYear = dynamic(() => import("../components/SelectYear"));

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, chartData, topSelling } = useSelector(
    (store) => store?.chartData
  );
  const [queryParams, setQueryParams] = useState(router.query);
  const [selectedYear, setSelectedYear] = useState(queryParams?.year ?? "2023");
  const [salesData, setSalesData] = useState({
    labels: chartData?.map((data) => data?.month),
    datasets: [
      {
        label: "Total Sales",
        data: chartData?.map((data) => data?.sales),
        backgroundColor: "#0847ad",
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total Revenue",
        data: chartData?.map((data) => data?.revenue),
        backgroundColor: "#9c10b2",
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total Active Users",
        data: chartData?.map((data) => data?.userActivity),
        backgroundColor: "#0a842d",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    dispatch(fetchData(selectedYear));
    dispatch(fetchTopSelling(selectedYear));
  }, [selectedYear, dispatch]);

  useEffect(() => {
    if (typeof window) {
      setSalesData({
        labels: chartData?.map((data) => data?.month),
        datasets: [
          {
            label: "Total Sales",
            data: chartData?.map((data) => data?.sales),
            backgroundColor: "#0847ad",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "Total Revenue",
            data: chartData?.map((data) => data?.revenue),
            backgroundColor: "#9c10b2",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "Total Active Users",
            data: chartData?.map((data) => data?.userActivity),
            backgroundColor: "#0a842d",
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    }
  }, [chartData, typeof window]);

  useEffect(() => {
    setSelectedYear(router?.query?.year ?? "2023");
  }, [router?.query?.year]);

  const handleYearChange = (year) => {
    router.push({
      pathname: router.pathname,
      query: { ...queryParams, year },
    });
  };

  const totalSalesData = {
    labels: salesData?.labels,
    datasets: [salesData?.datasets?.[0]],
  };

  const totalRevenueData = {
    labels: salesData?.labels,
    datasets: [salesData?.datasets?.[1]],
  };

  const totalActiveUsersData = {
    labels: salesData?.labels,
    datasets: [salesData?.datasets?.[2]],
  };

  return (
    <>
      {salesData?.datasets?.length > 0 ? (
        <div style={{ width: "100%" }}>
          <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Box ml={{ base: 0 }} p="8">
              <SelectYear
                selectedYear={selectedYear}
                onSelectYear={handleYearChange}
              />

              {loading ? (
                <Loader />
              ) : (
                <>
                  <Box justifyContent="center">
                    <Flex
                      direction="column"
                      alignItems="center"
                      style={{ maxHeight: "70vh", margin: "40px 0" }}
                    >
                      <PieChart data={totalSalesData} />
                      <h3>Total Sales</h3>
                    </Flex>
                    <Flex
                      direction="column"
                      alignItems="center"
                      style={{ maxHeight: "70vh", marginBottom: "40px" }}
                    >
                      <PieChart data={totalRevenueData} />
                      <h3>Total Revenue</h3>
                    </Flex>
                    <Flex
                      direction="column"
                      alignItems="center"
                      style={{ maxHeight: "70vh", marginBottom: "40px" }}
                    >
                      <PieChart data={totalActiveUsersData} />
                      <h3>Total Active Users</h3>
                    </Flex>
                  </Box>
                  ;
                </>
              )}
            </Box>
          </Box>
        </div>
      ) : null}
    </>
  );
};

export default Index;
