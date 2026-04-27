# Arbiter Rules and Schemas

While the Arbiter primarily functions via symbolic logic (deterministic code in `orchestrator.py`), future implementations or complex edge cases may require LLM-based qualitative evaluation. This file contains the schema for that evaluation.

## LLM Arbiter Prompt Schema
*If the Arbiter uses an LLM to determine conviction on ambiguous rules.*

```text
[SYSTEM DIRECTIVE: ARBITER EVALUATION]
You are the Arbiter agent. Your function is to read the output of the Critic agent and the original Drafter text, and assign a final Conviction Score.

[CRITIC DATA]
{critic_json_payload}

[DRAFTER TEXT]
{drafted_text}

[EVALUATION TASK]
Calculate a Conviction Score from 0.0 to 1.0 based on the following deterministic rules:
- Base score is 1.0.
- If `relational_integrity_passed` is FALSE, deduct 1.0.
- If `factual_accuracy_passed` is FALSE, deduct 1.0.
- Calculate the difference between `target_zpd_level` and `zpd_score`. Deduct this difference.
- If `sdt_autonomy_passed` is FALSE, deduct 0.5.

Return strictly a float value representing the final score. Do not provide explanations.
```
