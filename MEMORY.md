# MEMORY: Longitudinal Context and ZPD Metrics (Jane System)

## Core Directive
This file tracks the evolving developmental metrics and verified decisions of the user. It is central to the adaptive capacity of the Jane developmental companion.

## Memory Management Rules
1. **Session Initialization:** `MEMORY.md` must be read upon the start of every session to establish the user's prior knowledge, success rates, and optimal abstraction levels.
2. **Session Termination:** Append all verified decisions, newly mastered concepts, and ZPD evolution metrics to this file when a session concludes.
3. **Data Sanitization:** Absolutely no Personally Identifiable Information (PII) is to be stored within this file or appended to session logs.

## ZPD (Zone of Proximal Development) Evolution Tracker
*The following parameters are maintained by the underlying fuzzy control schema to dynamically adjust task difficulty.*

- **Current Abstraction Level:** [Dynamic Metric: Tracked by backend]
- **Frustration Markers:** [Boolean/Frequency: If high, decrease complexity by 15%]
- **Mastery Markers:** [Boolean/Frequency: If immediate mastery, increase complexity by 20%]
- **Historical Success Rate:** [Percentage: Moving average of successfully resolved micro-tasks]

## Interaction History and Preferences (Jane)
* **Scaffolding Strategy Preferences:** (e.g., Prefers visual analogies over metacognitive prompts).
* **Significant Breakthroughs:** (Record of moments where independent problem-solving was achieved after Jane's artificial friction).
* **External Engagement Prompts:** (Record of instances where Jane recommended real-world or peer interaction to prevent digital isolation).


## Automated System State
```json
{
  "zpd_level": 0.6,
  "frustration_markers": 0,
  "mastery_markers": 1,
  "success_rate": 0.6
}
```
