import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
  Stack
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const DaysSupplyCalculator = () => {
    

  return (
    <form>
      <FormControl>
        <FormLabel>Total Quantity</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Dose Quantity</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Doses Per Day</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Cadence</FormLabel>
        <Select placeholder="Select option">
          <option value="option1">Monthly</option>
          <option value="option2">Biweekly</option>
          <option value="option3">Weekly</option>
        </Select>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="purple" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default DaysSupplyCalculator;
