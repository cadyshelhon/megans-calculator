import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
} from "@chakra-ui/react";
import DaysSupplyCalculator from "./DaysSupplyCalculator";

interface Props {
  title: string;
}

const CalculatorCard = ({ title }: Props) => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <DaysSupplyCalculator></DaysSupplyCalculator>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CalculatorCard;
