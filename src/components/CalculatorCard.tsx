import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
} from "@chakra-ui/react";
import DaysSupplyCalculator from "./DaysSupplyCalculator";
import { Result } from '../types'
import { timeValueMap } from '../timePeriods'

 
interface Props {
  title: string;
  setResults: (data: Result[]) => void;
  currentResults: Result[];
}

const CalculatorCard = ({ title, setResults, currentResults }: Props) => {

  return (
    <Container>
      <Card gap={3}>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <DaysSupplyCalculator onSubmit={newResult => {
            console.log(newResult);
            const cadenceValue = timeValueMap.get(newResult.cadence);
            if(cadenceValue) {
              const daysSupply =  ( newResult.totalQuantity / (newResult.dose * newResult.dosePerDay) ) * cadenceValue;
              setResults([...currentResults, {...newResult, id: currentResults.length + 1, result: daysSupply}]);
            } else if (newResult.custom) {
              const daysSupply =  ( newResult.totalQuantity / (newResult.dose * newResult.dosePerDay) ) * newResult.custom;
              setResults([...currentResults, {...newResult, id: currentResults.length + 1, result: daysSupply}]);
            }
          }}></DaysSupplyCalculator>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CalculatorCard;
