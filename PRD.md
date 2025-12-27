📘 Personal Portfolio PRD

Owner: Jennifer Nguyen
Product Type: Personal Engineering Portfolio
Primary Goal: New-grad roles (Mechanical Engineering, Robotics, Hardware)
Secondary Goal: Grad school readiness in 2–3 years
Platform: Web (desktop-first, mobile-responsive)

1. Product Vision

Create a clean, minimal, high-credibility engineering portfolio that immediately signals:

“This person designs, validates, and ships real hardware systems.”

The portfolio should:

Be scannable in under 60 seconds

Emphasize systems thinking, validation, and impact

Balance technical depth with clarity

Feel professional, calm, and premium — not flashy

This is not a creative agency portfolio.

2. Target Audience
Primary

Hardware & robotics recruiters

Mechanical engineering hiring managers

Robotics & autonomous systems teams

Secondary

Engineering grad school admissions committees

Research labs

3. Design Principles (Hard Constraints)

Clean / minimal

Neutral color palette

Strong typography

Soft shadows and rounded cards

Subtle depth (glassmorphism allowed, very light)

No bright colors

No heavy animations

Desktop-first, mobile responsive

Tone: quietly confident engineering

4. Information Architecture (Single Page)

Sections must appear in this order:

Hero

Selected Projects

Experience Snapshot

Skills

About

Contact

No additional sections unless explicitly added later.

5. Section Requirements
5.1 Hero Section

Purpose: Immediate positioning

Required:

Name: Jennifer Nguyen

Title: Mechanical Engineer focused on Robotics & Autonomous Systems

Subtext: 1–2 sentence technical summary

Two CTAs:

Primary: View Projects

Secondary: Contact

5.2 Selected Projects (Most Important Section)

Display 3–4 projects max as cards.

Required projects:

Amazon Grocery Robotics — Autonomous Picking System

Keutsch Lab — High-Altitude Balloon Exposure Capsule

Amazon Robotics — Multi-Camera Array

Lockheed Martin — Manufacturing DOE & Dashboards (optional)

Each project card must include:

Project title

Role

Timeframe

One quantitative impact metric

Tags (Mechanical Design, DFM, Robotics, Testing, etc.)

Each project must support an expandable detail view with:

Problem

Approach

Validation

Outcome

Avoid generic reflections or soft skills.

5.3 Experience Snapshot

Condensed timeline format.

Each entry:

Company

Role

Timeframe

One sentence maximum

5.4 Skills

Grouped, scannable layout.

Groups:

Mechanical & CAD

Simulation & Analysis

Robotics & Controls

Programming

Fabrication

No walls of text.

5.5 About

Short (1–3 sentences).

Focus on:

Engineering philosophy

Iterative design

Constraints and validation

5.6 Contact

Required:

Email

LinkedIn

Resume PDF link (optional)

6. Technical Requirements

Framework: Next.js (App Router)

Styling: Tailwind CSS

Components for each section

Static, fast-loading

Accessible and responsive

7. Non-Goals

No blog

No flashy animations

No excessive visual effects

No unrelated content

8. MVP Definition

MVP is complete when:

All sections render correctly

Navigation anchors work

Projects are readable and structured

UI feels clean, minimal, and professional

Site works on desktop and mobile

All design and implementation decisions must follow this PRD.