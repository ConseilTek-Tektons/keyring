import { describe, expect, it } from "vitest";
import { knowledgeArticles } from "../data/knowledge";
import { buildLocalAnswer, retrieveLocalKnowledge } from "./assistant";

describe("Keyring local knowledge retrieval", () => {
  it("prioritises the relevant operating article", () => {
    const [match] = retrieveLocalKnowledge("Explain checkout operating policy", knowledgeArticles);
    expect(match?.id).toBe("checkout-policy");
  });
  it("does not invent an unsupported answer", () => {
    const result = buildLocalAnswer("How do I configure an unrelated orbital engine?", knowledgeArticles);
    expect(result.citations).toHaveLength(0);
    expect(result.answer).toContain("could not find");
  });
});
