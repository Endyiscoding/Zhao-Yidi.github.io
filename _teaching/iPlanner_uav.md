---
title: "Learning-Based UAV Trajectory Planning"
collection: teaching
type: "Research Project"
permalink: /projects/e2e_planner/
venue: Penn State University
date: 2024-08-01
excerpt: "A self-supervised planning pipeline that combines learned depth perception with differentiable trajectory optimization for robust UAV navigation."
teaser: /images/Project/e2e_planner/e2e_pipeline.png
paperurl: https://arxiv.org/abs/2504.04289
---

<div class="project-lead">
  A self-supervised UAV planning system that combines learning-based perception with physics-based optimization for interpretable and generalizable navigation.
</div>

<div class="project-actions">
  <a class="btn btn--info" href="https://arxiv.org/abs/2504.04289">Read the paper</a>
</div>

## The challenge

End-to-end planners can require large labeled datasets and may generalize poorly outside their training environments. Conventional optimization is more interpretable, but depends on a useful representation of obstacles and carefully selected trajectory timing.

## Our approach

The system brings learning and optimization together:

- **Self-supervised perception:** depth observations are converted into a 3D cost map without expert demonstrations or human labels.
- **Differentiable optimization:** the network learns through the downstream trajectory objective while preserving physical constraints.
- **Learned time allocation:** a neural strategy improves both the efficiency and optimality of the generated trajectory.

<figure class="project-figure">
  <img src="/images/Project/e2e_planner/e2e_pipeline.png" alt="Self-supervised UAV trajectory planning pipeline">
  <figcaption>Overview of the learning and differentiable optimization pipeline.</figcaption>
</figure>

## Results

Simulation and real-world experiments showed robust navigation across varied environments. Compared with the state of the art, the method achieved a **31.33% improvement in position tracking error** and a **49.37% reduction in control effort**.
