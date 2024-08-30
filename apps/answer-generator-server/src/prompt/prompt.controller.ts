import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromptService } from "./prompt.service";
import { PromptControllerBase } from "./base/prompt.controller.base";

@swagger.ApiTags("prompts")
@common.Controller("prompts")
export class PromptController extends PromptControllerBase {
  constructor(protected readonly service: PromptService) {
    super(service);
  }
}
