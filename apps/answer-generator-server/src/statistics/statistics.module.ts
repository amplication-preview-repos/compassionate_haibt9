import { Module } from "@nestjs/common";
import { StatisticsModuleBase } from "./base/statistics.module.base";
import { StatisticsService } from "./statistics.service";
import { StatisticsController } from "./statistics.controller";
import { StatisticsResolver } from "./statistics.resolver";

@Module({
  imports: [StatisticsModuleBase],
  controllers: [StatisticsController],
  providers: [StatisticsService, StatisticsResolver],
  exports: [StatisticsService],
})
export class StatisticsModule {}
