---
layout: page
title: LEADS
description: Lightweight Embedded Assisted Driving System
img: /assets/img/leads.png
importance: 1
category: autonomous racing
related_publications: true
---

[![Project](https://img.shields.io/badge/Project-gray?style=for-the-badge)](https://leads.projectneura.org)
[![arXiv](https://img.shields.io/badge/Preprint-b31b1b?style=for-the-badge&logo=arxiv)](https://arxiv.org/abs/2410.17554)
[![GitHub](https://img.shields.io/badge/Repo-060e1a?style=for-the-badge&logo=github)](https://github.com/ProjectNeura/LEADS)

With the rapid development of electric vehicles, formula races that face high school and university students have become
more popular than ever as the threshold for design and manufacturing has been lowered. In many cases, we see teams
inspired by or directly using toolkits and technologies inherited from standardized commercial vehicles. These
architectures are usually overly complicated for amateur applications like the races. In order to improve the efficiency
and simplify the development of instrumentation, control, and analysis systems, we propose LEADS (Lightweight Embedded
Assisted Driving System), a dedicated solution for such scenarios {% cite fu2024leads %}.

LEADS is a lightweight embedded assisted driving system. It is designed to simplify the development of instrumentation,
control, and analysis systems for racing cars. It is written in well-organized Python and C/C++ and has impressive
performance. It is not only out-of-the-box but also fully customizable. It provides multiple abstract layers that allow
users to pull out the components and rearrange them into a new project. You can either configure the existing executable
modules (LEADS VeC) simply through a JSON file or write your own codes based on the framework as easily as building a
LEGO.

The hardware components chosen for this project are geared towards amateur developers. It uses neither a CAN bus
(although it is supported) nor any dedicated circuit board, but generic development kits such as Raspberry Pi and
Arduino instead. However, as it is a high-level system running on a host computer, the software framework has the
ability to adapt to any type of hardware component with extra effort.
