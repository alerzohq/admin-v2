export type SelectDateProp={
  selection:{
    startDate: Date;
    endDate: Date;
    key: string;
  }
}

export type DateRangeProps = {
  selectionRange: { [key: string]: any }
  handleSelect: (item: any) => void
}
