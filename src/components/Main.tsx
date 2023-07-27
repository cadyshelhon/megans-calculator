import { Stack, Flex } from "@chakra-ui/react";
import CalculatorCard from "./CalculatorCard";
import HistoryCard from "./HistoryCard";

const Main = () => {
  return (
    <Flex bg="lavender" justify="center" direction={["column", "row"]}>
        <CalculatorCard title="Calculate"></CalculatorCard>
        <HistoryCard title="History"></HistoryCard>
    </Flex>
  );
};

export default Main;
