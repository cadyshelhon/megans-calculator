import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  List,
  ListItem,
  Text,
  Button,
} from "@chakra-ui/react";
import { Result } from "../types";

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
                  <Text><b>Days Supply:</b> {result.result}</Text>
                  <Button onClick={() => onDelete(result.id)}>Delete</Button>
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
