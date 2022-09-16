import { ReactNode } from "react";

export interface TableMapperItem<T = any> {
  title: string | (() => JSX.Element);
  key: string;
  sortable?: boolean;
  render?: (data: T, i?: number) => ReactNode;
}

export interface DynamicTableProps<T = any> {
  mappers: TableMapperItem<any>[];
  loading?: boolean;
  data: T[];
}
