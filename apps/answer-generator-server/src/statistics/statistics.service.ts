import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatisticsServiceBase } from "./base/statistics.service.base";

@Injectable()
export class StatisticsService extends StatisticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
