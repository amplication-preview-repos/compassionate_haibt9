import * as graphql from "@nestjs/graphql";
import { StatisticsResolverBase } from "./base/statistics.resolver.base";
import { Statistics } from "./base/Statistics";
import { StatisticsService } from "./statistics.service";

@graphql.Resolver(() => Statistics)
export class StatisticsResolver extends StatisticsResolverBase {
  constructor(protected readonly service: StatisticsService) {
    super(service);
  }
}
