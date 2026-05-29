# Claygentforce Project Vision

Claygentforce is a Salesforce delivery team simulation and enablement project.

The goal is to build a realistic, AI-assisted Salesforce delivery simulator that helps learners practice requirements discovery, architecture decisions, implementation planning, admin configuration, DevOps workflows, QA review, security review, stakeholder tradeoffs, and incident response in a safe sandbox environment.

This project is not intended to be a simple Salesforce demo app. It is intended to become a guided learning environment where users experience the kinds of ambiguity, constraints, mistakes, reviews, and consequences that happen on real Salesforce delivery teams.

---

## Core Idea

Claygentforce simulates a Salesforce project team using role-based AI agents.

Each agent represents a delivery role, such as:

- Business Analyst
- Technical Architect
- Salesforce Admin
- Salesforce Developer
- QA Engineer
- DevOps Engineer
- Security Reviewer
- Product Owner
- Client Stakeholder
- Incident Commander

The learner interacts with these roles while working through realistic Salesforce delivery scenarios. The system should guide the learner through requirements, solution design, implementation, testing, deployment, review, and post-release support.

The long-term vision is a training platform that teaches Salesforce delivery judgment, not just Salesforce syntax.

---

## Current Status

The project currently contains:

- an SFDX project with manifest structure
- documentation scaffolding
- expanded agent prompt coverage across a full delivery team
- simulation runbook and run modes
- reusable scenario templates
- Scenario 001 delivery artifacts
- initial Case field metadata for Scenario 001
- scenario-specific deployment manifests
- development and issue tracking documentation

The next major milestone is validating the first Salesforce metadata increment against a connected org and continuing scenario-driven implementation from there.
