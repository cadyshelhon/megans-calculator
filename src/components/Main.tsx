import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CalculatorCard from "./CalculatorCard";
import HistoryCard from "./HistoryCard";

interface Result {
    id: number,
    result: number,
    totalQuantity: number,
    dose: number,
    dosePerDay: number,
    cadence: string
}

const Main = () => {
  const [results, setResults] = useState([] as Result[]);

  return (
    <Flex
      bg="lavender"
      justify="center"
      direction={["column", "row"]}
      gap={5}
      p={5}
    >
      <CalculatorCard
        currentResults={results}
        setResults={setResults}
        title="Calculate Days Supply"
      ></CalculatorCard>
      <HistoryCard title="History" results={results} onDelete={(id) => setResults(results.filter(e => e.id !== id))}></HistoryCard>
    </Flex>
  );
};

export default Main;
