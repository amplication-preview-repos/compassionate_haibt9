import { StatisticsWhereInput } from "./StatisticsWhereInput";
import { StatisticsOrderByInput } from "./StatisticsOrderByInput";

export type StatisticsFindManyArgs = {
  where?: StatisticsWhereInput;
  orderBy?: Array<StatisticsOrderByInput>;
  skip?: number;
  take?: number;
};
