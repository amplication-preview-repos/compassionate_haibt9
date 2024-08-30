import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatisticsService } from "./statistics.service";
import { StatisticsControllerBase } from "./base/statistics.controller.base";

@swagger.ApiTags("statistics")
@common.Controller("statistics")
export class StatisticsController extends StatisticsControllerBase {
  constructor(protected readonly service: StatisticsService) {
    super(service);
  }
}
