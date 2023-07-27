import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  List,
  ListItem,
  Text,
  CloseButton,
} from "@chakra-ui/react";
import { Result } from "../types";
import CalculatorResult from "./CalculatorResult";

interface Props {
  title: string;
  results?: Result[];
  onDelete: (id: number) => void;
}

const HistoryCard = ({ title, results, onDelete }: Props) => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody overflowY="auto" maxHeight={385}>
          <List>
            {results?.map((result) => (
              <ListItem>
                <Card
                  direction="row"
                  align="center"
                  justify="space-between"
                  p={2}
                  m={2}
                  variant="outline"
                >
                  <CalculatorResult result={result}><b>Days Supply:</b> {result.result}</CalculatorResult>
                  <CloseButton onClick={() => onDelete(result.id)}></CloseButton>
                </Card>
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>
    </Container>
  );
};

export default HistoryCard;
