import * as graphql from "@nestjs/graphql";
import { PromptResolverBase } from "./base/prompt.resolver.base";
import { Prompt } from "./base/Prompt";
import { PromptService } from "./prompt.service";

@graphql.Resolver(() => Prompt)
export class PromptResolver extends PromptResolverBase {
  constructor(protected readonly service: PromptService) {
    super(service);
  }
}
