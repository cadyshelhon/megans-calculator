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
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { timePeriods } from "../timePeriods";

const schema = z.object({
  totalQuantity: z.number(),
  dose: z.number(),
  dosePerDay: z.number(),
  cadence: z.enum(timePeriods),
});

type CalculatorFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: CalculatorFormData) => void;
}

const DaysSupplyCalculator = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Total Quantity</FormLabel>
        <NumberInput>
          <NumberInputField
            {...register("totalQuantity", { valueAsNumber: true })}
          />
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
          <NumberInputField {...register("dose", { valueAsNumber: true })} />
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
          <NumberInputField
            {...register("dosePerDay", { valueAsNumber: true })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Cadence</FormLabel>
        <Select placeholder="Select option" {...register("cadence")}>
          {timePeriods.map(timePeriod => <option key={timePeriod} value={timePeriod}>{timePeriod}</option>)}
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
