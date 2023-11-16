import { DateCalendarProps } from "@mui/x-date-pickers";
import { Dispatch, SetStateAction } from "react";
import { Control, FieldError } from "react-hook-form";

export interface DateCalendarExtendedProps extends DateCalendarProps<any> {
  label: string;
  control: Control<any>;
  name: string;
  error: FieldError | undefined;
  defaultDateValue: Date;
  setDefaultDateValue: any;
  selectedDate: any[];
  setSelectedDate: any;
  typeValuesDate: string;
  setTypeValuesDate: any;
  rangeOfDate: Date[];
  setRangeOfDate: any;
  values: Date[];
  setValues: any;
  ref: any;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  cleanValues: () => void;
}
