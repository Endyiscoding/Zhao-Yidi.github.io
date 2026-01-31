---
# title: "End-to-end&nbsp;UAV&nbsp;Planner"
title: "Aerial Manipulation with Contact-Aware Onboard Perception and Hybrid Control"
collection: teaching
type: "Research Project"
permalink: /projects/contact_vio
venue: Penn State University
date: 2025-09-15
---

Aerial manipulation (AM) promises to move Unmanned Aerial Vehicles (UAVs) beyond passive inspection to contact-rich tasks such as grasping, assembly, and in-situ maintenance. Most prior AM demonstrations rely on external motion capture (MoCap) and emphasize position control for coarse interactions, limiting deployability. We present a fully onboard perception–control pipeline for contact-rich AM that achieves accurate motion tracking and regulated contact wrenches without MoCap. The main components are (1) an augmented visual–inertial odometry (VIO) estimator with contact-consistency factors that activate only during interaction, tightening uncertainty around the contact frame and reducing drift, and (2) image-based visual servoing (IBVS) to mitigate perception–control coupling, together with a hybrid force–motion controller that regulates contact wrenches and lateral motion for stable contact. Experiments show that our approach closes the perception-to-wrench loop using only onboard sensing, yielding an velocity estimation improvement of 66.01\% at contact, reliable target approach, and stable force holding—pointing toward deployable, in-the-wild aerial manipulation.

<figure>
 <img src="/images/Project/contact_vio/pipeline.png"/>
 <figcaption>
       Pipeline of the proposed planning method
 </figcaption>
</figure>