---

title: "Aerial Manipulation with Contact-Aware Onboard Perception and Hybrid Control"
collection: publications
category: conferences
permalink: /publication/contact-aware-aerial-manipulation
excerpt: ''
date: 2026-02-17
venue: 'IEEE International Conference on Robotics and Automation (ICRA)'
authors: 'Y. Zhan, Y. Jiang, M. Cao, and J. Geng'
equal_contributors:
  - 'Y. Zhan'
  - 'Y. Jiang'
summary: 'A fully onboard perception–control pipeline for accurate motion estimation and stable, force-regulated aerial interaction without external motion capture.'
paperurl: 'https://arxiv.org/abs/2602.08251'
bibtex: |
  @inproceedings{zhan2026contactaware,
    author        = {Zhan, Yuanzhu and Jiang, Yufei and Cao, Muqing and Geng, Junyi},
    title         = {Aerial Manipulation with Contact-Aware Onboard Perception and Hybrid Control},
    booktitle = {2026 IEEE International Conference on Robotics and Automation (ICRA)},
    year      = {2026}
  }
projecturl: /projects/contact_vio
citation: 'Y. Zhan, Y. Jiang, M. Cao, and J. Geng, “Aerial Manipulation with Contact-Aware Onboard Perception and Hybrid Control,” in Proceedings of the 2026 IEEE International Conference on Robotics and Automation (ICRA), 2026.'
---

Aerial manipulation (AM) promises to move Unmanned Aerial Vehicles (UAVs) beyond passive inspection to contact-rich tasks such as grasping, assembly, and in-situ maintenance. Most prior AM demonstrations rely on external motion capture (MoCap) and emphasize position control for coarse interactions, limiting deployability. We present a fully onboard perception–control pipeline for contact-rich AM that achieves accurate motion tracking and regulated contact wrenches without MoCap. The main components are (1) an augmented visual–inertial odometry (VIO) estimator with contact-consistency factors that activate only during interaction, tightening uncertainty around the contact frame and reducing drift, and (2) image-based visual servoing (IBVS) to mitigate perception–control coupling, together with a hybrid force–motion controller that regulates contact wrenches and lateral motion for stable contact. Experiments show that our approach closes the perception-to-wrench loop using only onboard sensing, yielding a velocity estimation improvement of 66.01% at contact, reliable target approach, and stable force holding—pointing toward deployable, in-the-wild aerial manipulation.
