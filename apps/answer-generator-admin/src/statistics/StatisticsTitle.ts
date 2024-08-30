import { Statistics as TStatistics } from "../api/statistics/Statistics";

export const STATISTICS_TITLE_FIELD = "id";

export const StatisticsTitle = (record: TStatistics): string => {
  return record.id?.toString() || String(record.id);
};
