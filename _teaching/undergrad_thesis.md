---
title: "Fast Exploration with UAV Swarms"
collection: teaching
type: "Undergraduate Thesis"
permalink: /projects/undergrad-thesis/
venue: Nankai University
date: 2024-06-01
excerpt: "A multi-UAV exploration framework that allocates unknown regions while accounting for obstacle distribution and local environmental complexity."
codeurl: https://github.com/Jiang-Yufei/Multi-agent-exploration
---

<div class="project-lead">
  A cooperative exploration system that helps a UAV swarm cover unknown environments efficiently while adapting to uneven obstacle distributions.
</div>

<div class="project-actions">
  <a class="btn btn--info" href="https://github.com/Jiang-Yufei/Multi-agent-exploration">View source code</a>
</div>

## The challenge

UAV swarms can explore large unknown spaces faster than a single robot, but naive region assignment often creates uneven workloads. Dense obstacles and geometrically complex areas demand more planning effort than open space.

## Our approach

The framework assigns exploration regions to individual UAVs while accounting for both obstacle distribution and local environmental complexity. These signals adapt the exploration cost so that the team can distribute work more effectively.

## Applications

The approach is designed for time-sensitive missions such as disaster response, search and rescue, and large-scale environmental inspection.
