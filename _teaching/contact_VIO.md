---
title: "Contact-Aware Aerial Manipulation"
collection: teaching
type: "Research Project"
permalink: /projects/contact_vio
venue: Penn State University
date: 2025-09-15
excerpt: "A fully onboard perception and control system that enables an aerial manipulator to approach a target, establish contact, and regulate interaction forces without motion capture."
teaser: /images/Project/contact_vio/pipeline.png
paperurl: https://arxiv.org/abs/2602.08251
---

<div class="project-lead">
  A fully onboard perception–control pipeline for accurate motion tracking and stable, force-regulated interaction—without relying on external motion capture.
</div>

<div class="project-actions">
  <a class="btn btn--info" href="https://arxiv.org/abs/2602.08251">Read the paper</a>
</div>

## The challenge

Most aerial manipulation demonstrations depend on motion-capture systems and focus on coarse position control. This makes it difficult to deploy them in unstructured, real-world environments where the robot must estimate its own motion and maintain reliable contact.

## Our approach

We connect onboard perception directly to interaction control through three components:

- **Contact-aware VIO:** contact-consistency factors activate during interaction to reduce drift and tighten state uncertainty around the contact frame.
- **Image-based visual servoing:** visual feedback reduces the effect of perception–control coupling during target approach.
- **Hybrid force–motion control:** the controller regulates contact wrench while maintaining stable lateral motion.

<figure class="project-figure">
  <img src="/images/Project/contact_vio/pipeline.png" alt="Contact-aware aerial manipulation perception and control pipeline">
  <figcaption>Overview of the onboard perception–control pipeline.</figcaption>
</figure>

## Results

The system closes the perception-to-wrench loop using only onboard sensing. Experiments demonstrated reliable target approach and stable force holding, together with a **66.01% improvement in velocity estimation at contact**.
