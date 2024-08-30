import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromptServiceBase } from "./base/prompt.service.base";

@Injectable()
export class PromptService extends PromptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
