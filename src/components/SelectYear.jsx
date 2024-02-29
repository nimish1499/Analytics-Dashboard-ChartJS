import { Flex, Select, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";

const SelectYear = () => {
  const router = useRouter();
  const { query } = router;
  const [year, setCurrentYear] = useState(query.year || "2023");

  useEffect(() => {
    setCurrentYear(query.year || "2023");
  }, [query]);

  const handleChange = (e) => {
    const { value } = e.target;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, year: value },
    });
  };

  return (
    <Flex gap={"12px"} cursor={"pointer"} alignItems={"center"}>
      <Text as="span">Select Year : </Text>
      <Select
        maxW={{base:"30%",md:"20%"}}
        value={year}
        onChange={handleChange}
      >
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </Select>
    </Flex>
  );
};

export default SelectYear;
