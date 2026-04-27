# Core Engine: DAD Heuristics

## Overview
The `src/core/` directory houses the fundamental psychological and ethical heuristic algorithms for the Jane Developmental AI Companion. It translates the qualitative guidelines of Developmentally Aligned Design (DAD) into executable programmatic rules.

## The Heuristics Library
`dad_heuristics.py` provides the logic that empowers the Critic agent within the Cyclical Reasoning Graph to objectively score and reject generated drafts that violate policy.

### 1. Relational Integrity Checks
The system explicitly forbids the AI from simulating emotional distress, claiming consciousness, or forming parasocial dependencies. `check_relational_integrity` is responsible for evaluating text against a strict non-human baseline.

### 2. Cognitive Complexity Tracking
The `calculate_text_complexity` function determines the reading level and cognitive density of the generated text. This ensures the output matches the user's specific Zone of Proximal Development (ZPD) as defined by their interaction history and learning trajectory.

## The Objective
To create an empirical foundation for measuring AI adherence to Self-Determination Theory (SDT) constraints. These algorithms enable the deterministic calculation of the final "Conviction Score" by the Arbiter.
