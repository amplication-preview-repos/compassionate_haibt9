import { PromptWhereInput } from "./PromptWhereInput";
import { PromptOrderByInput } from "./PromptOrderByInput";

export type PromptFindManyArgs = {
  where?: PromptWhereInput;
  orderBy?: Array<PromptOrderByInput>;
  skip?: number;
  take?: number;
};
