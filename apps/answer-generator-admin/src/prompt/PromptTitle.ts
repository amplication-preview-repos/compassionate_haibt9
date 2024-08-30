import { Prompt as TPrompt } from "../api/prompt/Prompt";

export const PROMPT_TITLE_FIELD = "id";

export const PromptTitle = (record: TPrompt): string => {
  return record.id?.toString() || String(record.id);
};
