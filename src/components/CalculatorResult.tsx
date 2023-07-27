import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  List,
  ListItem,
  Text
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Result } from "../types";

interface Props {
    children: ReactNode,
    result: Result
}

const CalculatorResult = ({children, result}: Props) => {
  return (
    <Accordion variant="" allowToggle={true}>
      <AccordionItem >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {children}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List>
            <ListItem>
                <Text>{ `( ${result.totalQuantity} total units / ( ${result.dose} units * ${result.dosePerDay}x per day ) ) * ${result.cadence} = ${result.result} days supply`}</Text>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CalculatorResult;
