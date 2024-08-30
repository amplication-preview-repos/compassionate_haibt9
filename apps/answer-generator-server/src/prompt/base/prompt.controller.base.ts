/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PromptService } from "../prompt.service";
import { PromptCreateInput } from "./PromptCreateInput";
import { Prompt } from "./Prompt";
import { PromptFindManyArgs } from "./PromptFindManyArgs";
import { PromptWhereUniqueInput } from "./PromptWhereUniqueInput";
import { PromptUpdateInput } from "./PromptUpdateInput";

export class PromptControllerBase {
  constructor(protected readonly service: PromptService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Prompt })
  async createPrompt(@common.Body() data: PromptCreateInput): Promise<Prompt> {
    return await this.service.createPrompt({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Prompt] })
  @ApiNestedQuery(PromptFindManyArgs)
  async prompts(@common.Req() request: Request): Promise<Prompt[]> {
    const args = plainToClass(PromptFindManyArgs, request.query);
    return this.service.prompts({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Prompt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async prompt(
    @common.Param() params: PromptWhereUniqueInput
  ): Promise<Prompt | null> {
    const result = await this.service.prompt({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Prompt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePrompt(
    @common.Param() params: PromptWhereUniqueInput,
    @common.Body() data: PromptUpdateInput
  ): Promise<Prompt | null> {
    try {
      return await this.service.updatePrompt({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Prompt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePrompt(
    @common.Param() params: PromptWhereUniqueInput
  ): Promise<Prompt | null> {
    try {
      return await this.service.deletePrompt({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}