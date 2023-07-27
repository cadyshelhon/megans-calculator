import { Card, CardBody, CardHeader, Container, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
}

const HistoryCard = ({ title }: Props) => {
  return (
    <Container m={5}>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <ul>
            <li>some list</li>
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
};

export default HistoryCard;
