import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import {
  Box,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  fetchData,
  fetchTopSelling,
} from "../redux/chartData/chartData.action";

// import BarChart from "../components/BarChart";

const Loader = dynamic(() => import("../components/Loader"));
const SelectYear = dynamic(() => import("../components/SelectYear"));
const BarChart = dynamic(()=>import("../components/BarChart"), {ssr:false})

const Index = () => {
  const router = useRouter();

  const isMobile = useBreakpointValue({ base: true, sm: false });
  const dispatch = useDispatch();
  const { loading, chartData, topSelling } = useSelector(
    (store) => store?.chartData
  );

  const [queryParams, setQueryParams] = useState(router.query);
  const [selectedYear, setSelectedYear] = useState(
    router?.query?.year ?? "2023"
  );
  const [salesData, setSalesData] = useState({});
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setShowChart(false);
    dispatch(fetchData(selectedYear));
    dispatch(fetchTopSelling(selectedYear));
  }, [selectedYear, dispatch]);

  useEffect(() => {
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
  }, [chartData]);

  useEffect(() => {
    setSelectedYear(router?.query?.year ?? "2023");
  }, [router?.query?.year]);

  const handleYearChange = (year) => {
    router.push({
      pathname: router.pathname,
      query: { ...queryParams, year },
    });
  };

  useEffect(() => {
    if (chartData?.[0] && !showChart) {
      setShowChart(true);
    }
  }, [chartData, showChart]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showChart && salesData?.datasets?.[0]?.data?.length > 0 ? (
            <div style={{ width: "100%" }}>
              <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
                <Box ml={{ base: 0 }} p="8">
                  <SelectYear
                    selectedYear={selectedYear}
                    onSelectYear={handleYearChange}
                  />

                  <BarChart
                    data={salesData}
                    aspectRatio={isMobile ? 1 / 0.72 : 1 / 0.4}
                  />
                </Box>
              </Box>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Index;
