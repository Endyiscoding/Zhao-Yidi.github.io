---
title: "Aerial Manipulation in the Wild"
collection: teaching
type: "Research Project"
permalink: /projects/iros2026-aerial-manipulation/
venue: "MoMA.v5 Workshop at IROS 2026"
date: 2026-09-24
excerpt: "An outdoor aerial manipulation system combining onboard LiDAR–inertial odometry, a demonstration-trained Diffusion Policy, and whole-body model predictive control."
teaser: /images/Project/iros2026/am-platform.jpg
preview_video: /images/Project/iros2026/iros_preview.mp4
paperurl: https://arxiv.org/pdf/2609.30521
---

<div class="project-lead">
  Bringing aerial manipulation outdoors with onboard state estimation, a learned end-effector policy, and coordinated whole-body control.
</div>

<div class="project-actions">
  <a class="btn btn--info" href="https://arxiv.org/pdf/2609.30521">Read the paper</a>
</div>

## The challenge

Outdoor aerial manipulation must handle visual changes and disturbances while controlling both the flying base and manipulator. The system needs to estimate its state without external motion capture and execute precise end-effector motion.

## Our approach

- **Onboard perception:** LiDAR–inertial odometry estimates the aerial base state during outdoor operation.
- **Policy learning:** A Diffusion Policy trained on 80 indoor handheld demonstrations produces end-effector motion commands from camera observations and robot state.
- **Whole-body control:** Model predictive control coordinates the aerial base and robotic arm to track the policy's end-effector commands.

<figure class="project-figure">
  <img src="/images/Project/iros2026/am-platform.jpg" alt="Fully actuated aerial manipulation platform with a four-degree-of-freedom arm, onboard camera, computer, and flight controller" loading="lazy">
  <figcaption>Annotated aerial manipulation platform.</figcaption>
</figure>

## Outdoor demonstration

<div class="project-video">
  <video controls preload="metadata" playsinline poster="/images/Project/iros2026/iros-video-poster.jpg" aria-label="Outdoor aerial manipulation demonstration">
    <source src="/images/Project/iros2026/MPC_outdoor_hero.mp4" type="video/mp4">
    Your browser does not support embedded video. <a href="/images/Project/iros2026/MPC_outdoor_hero.mp4">Download the demonstration video</a>.
  </video>
</div>

## Results

The system completed all five reported indoor peg-in-hole trials and all three reported outdoor trials. The outdoor trials used the unchanged indoor-trained policy, onboard state estimation, and no motion capture or outdoor retraining. These initial outdoor results were obtained under mild wind and suitable lighting; broader conditions remain to be evaluated.

<div class="project-figure-grid">
  <figure class="project-figure">
    <img src="/images/Project/iros2026/EE_tracking_indoor.png" alt="Indoor end-effector x, y, and z positions compared with reference trajectories over 25 seconds" loading="lazy">
    <figcaption>Indoor end-effector tracking.</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="/images/Project/iros2026/EE_tracking_outdoor.png" alt="Outdoor end-effector x, y, and z positions compared with reference trajectories over 28 seconds" loading="lazy">
    <figcaption>Outdoor end-effector tracking.</figcaption>
  </figure>
</div>
