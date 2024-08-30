import { Module } from "@nestjs/common";
import { PromptModuleBase } from "./base/prompt.module.base";
import { PromptService } from "./prompt.service";
import { PromptController } from "./prompt.controller";
import { PromptResolver } from "./prompt.resolver";

@Module({
  imports: [PromptModuleBase],
  controllers: [PromptController],
  providers: [PromptService, PromptResolver],
  exports: [PromptService],
})
export class PromptModule {}
