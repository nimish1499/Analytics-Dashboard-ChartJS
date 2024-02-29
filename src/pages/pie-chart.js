import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import {
  Box,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

import {
  fetchData,
  fetchTopSelling,
} from "../redux/chartData/chartData.action";
import { generateRandomColor } from "../scripts/generateColors";
import PieChart from "../components/PieChart";

const Loader = dynamic(() => import("../components/Loader"));
const SelectYear = dynamic(() => import("../components/SelectYear"));
// const PieChart = dynamic(() => import("./PieChart"));

const Sidebar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const dispatch = useDispatch();
  const { loading, chartData, topSelling } = useSelector(
    (store) => store.chartData
  );
  const [queryParams, setQueryParams] = useState(router.query);
  const [selectedYear, setSelectedYear] = useState(queryParams?.year ?? "2023");
  const [salesData, setSalesData] = useState({
    labels: chartData?.map((data) => data?.month),
    datasets: [
      {
        label: "Total Sales",
        data: chartData?.map((data) => data?.sales),
        backgroundColor: generateRandomColor(),
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total Revenue",
        data: chartData?.map((data) => data?.revenue),
        backgroundColor: generateRandomColor(),
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total Users Active",
        data: chartData?.map((data) => data?.userActivity),
        backgroundColor: generateRandomColor(),
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
            label: "Total Revenue",
            data: chartData?.map((data) => data?.revenue),
            backgroundColor: generateRandomColor(),
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "Total Active Users",
            data: chartData?.map((data) => data?.userActivity),
            backgroundColor: generateRandomColor(),
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "Total Sales",
            data: chartData?.map((data) => data?.sales),
            backgroundColor: generateRandomColor(),
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

  return (
    <>
      {chartData && (
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
                  <Flex maxH={{ md: "75vh" }} justifyContent={"center"}>
                    <PieChart data={salesData} />
                  </Flex>
                </>
              )}
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Sidebar;
