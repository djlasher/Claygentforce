# Claygentforce Project Vision

Claygentforce is a Salesforce technical architect simulation and enablement project.

The goal is to build a realistic, AI-assisted Salesforce delivery simulator that helps learners practice architecture decisions, implementation planning, DevOps workflows, QA review, security review, stakeholder tradeoffs, and incident response in a safe sandbox environment.

This project is not intended to be a simple Salesforce demo app. It is intended to become a guided learning environment where users experience the kinds of ambiguity, constraints, mistakes, and consequences that happen on real Salesforce delivery teams.

---

## Core Idea

Claygentforce simulates a Salesforce project team using role-based AI agents.

Each agent represents a delivery role, such as:

- Business Analyst
- Technical Architect
- Salesforce Developer
- QA Engineer
- DevOps Engineer
- Security Reviewer
- Product Owner
- Client Stakeholder

The learner interacts with these roles while working through realistic Salesforce delivery scenarios. The system should guide the learner through requirements, solution design, implementation, testing, deployment, review, and post-release support.

The long-term vision is a training platform that teaches Salesforce delivery judgment, not just Salesforce syntax.

---

## Why This Exists

Salesforce professionals often learn individual platform features through documentation, Trailhead, certifications, and project experience. However, many of the hardest skills are learned only through real delivery pressure:

- interpreting messy requirements
- asking better follow-up questions
- choosing between multiple imperfect architecture options
- understanding downstream consequences of design decisions
- balancing speed, maintainability, security, and user experience
- debugging deployment and metadata issues
- communicating tradeoffs to business and technical stakeholders
- recovering from mistakes after release

Claygentforce exists to make those experiences repeatable, inspectable, and safe.

Instead of waiting years to encounter these situations across different projects, learners can practice them through simulated delivery scenarios.

---

## Learning Goals

Claygentforce should help learners improve in the following areas:

### Salesforce Architecture

- evaluate declarative vs. programmatic options
- design scalable object models
- reason about sharing, visibility, and security
- understand integration patterns
- identify automation risks
- recognize technical debt before it becomes expensive

### Salesforce Development

- work with Apex, Lightning Web Components, Flows, metadata, and configuration
- understand test strategy and deployment readiness
- review code for maintainability and platform limits
- connect implementation choices back to business requirements

### DevOps and Release Management

- plan deployments across environments
- reason about metadata dependencies
- troubleshoot deployment failures
- understand CI/CD concepts
- practice rollback and hotfix thinking

### Delivery Leadership

- ask clarifying questions
- explain tradeoffs
- document decisions
- coordinate across roles
- manage ambiguity
- respond calmly to issues and incidents

---

## Simulation Philosophy

Claygentforce should feel like a realistic Salesforce project, not a quiz app.

The system should present scenarios with incomplete information, competing priorities, and realistic constraints. The learner should make decisions, receive feedback, and see simulated consequences.

Good decisions should create smoother delivery paths.

Weak decisions should not simply be marked wrong. They should lead to realistic friction, such as:

- missed requirements
- failing tests
- deployment blockers
- security concerns
- user acceptance issues
- production incidents
- stakeholder confusion
- rework

The purpose is not punishment. The purpose is consequence-based learning.

---

## Difficulty Modes

Claygentforce should eventually support multiple learning modes.

### Guided Mode

The system provides frequent hints, explanations, decision framing, and suggested next steps.

This mode is for newer learners or users exploring unfamiliar Salesforce domains.

### Standard Mode

The system provides realistic prompts and moderate feedback, but expects the learner to make more decisions independently.

This mode is for practicing project delivery judgment.

### Hard Mode

The system behaves more like a demanding real project.

Requirements may be ambiguous. Stakeholders may disagree. Some risks may not be obvious. The learner must ask better questions, document decisions, and defend tradeoffs.

This mode is for advanced practice and technical architect preparation.

---

## Initial Scope

The initial version should stay intentionally lightweight.

The first milestone is not a complete platform. The first milestone is a working foundation for documentation, simulation design, and AI-agent prompting.

Initial project scope:

- maintain an SFDX project structure
- document the project vision and architecture
- define role-based agent responsibilities
- create reusable prompt files for AI-assisted development
- track setup issues and decisions
- build small Salesforce metadata examples only when they support the simulator concept
- avoid overbuilding before the learning loop is clear

---

## Near-Term Target

The near-term target is to create a simple end-to-end simulation loop.

Example:

1. A client stakeholder describes a Salesforce business problem.
2. The Business Analyst agent extracts requirements and identifies gaps.
3. The Technical Architect agent proposes solution options and tradeoffs.
4. The learner chooses or modifies a solution.
5. The Developer agent helps implement a small piece of Salesforce functionality.
6. The QA agent reviews acceptance criteria and test coverage.
7. The Security agent reviews permissions, data access, and risk.
8. The DevOps agent reviews deployment readiness.
9. The simulator provides outcome feedback based on the learner's choices.

This loop can start as documentation and prompts before becoming a more automated application.

---

## Long-Term Vision

The long-term version of Claygentforce could become a portfolio-quality Salesforce enablement platform.

Potential future capabilities:

- scenario library by Salesforce cloud or skill area
- architecture decision records generated during each simulation
- simulated user stories and acceptance criteria
- mock stakeholder conversations
- generated metadata implementation tasks
- automated review checklists
- deployment simulation
- incident simulation
- scoring and feedback
- role-specific learning paths
- technical architect interview preparation
- practice modes for certifications and real project readiness

---

## Project Principles

### Realistic Over Flashy

The project should prioritize realistic Salesforce delivery workflows over flashy demos.

### Small Iterations

Each version should add one useful layer at a time.

### Documentation First

Important decisions, issues, setup fixes, and architecture choices should be documented as the project evolves.

### Human Review Required

AI agents can assist, suggest, critique, and generate drafts, but human review remains required for architecture, security, and implementation decisions.

### Salesforce Best Practices Matter

The project should reinforce maintainable Salesforce patterns, including limits awareness, security, testing, deployment discipline, and clear documentation.

### Reusable Context

Files in this repository should help future AI tools quickly understand the project without requiring repeated explanation.

---

## What This Project Is Not

Claygentforce is not:

- a generic chatbot
- a random Salesforce demo org
- a certification flashcard app
- a replacement for real project experience
- an autopilot that blindly generates Salesforce metadata
- a production client implementation

It is a learning simulator, architecture practice environment, and AI-assisted enablement project.

---

## Current Status

The project currently contains:

- an SFDX project with manifest structure
- documentation scaffolding
- agent prompt scaffolding
- an issues log for setup and troubleshooting notes

The next step is to define the agent roles, delivery simulation loop, and initial architecture approach.