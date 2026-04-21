---
layout: page
title: Erbium
description: Compute Platform
img: /assets/img/erbium.png
importance: 1
category: engineering
related_publications: false
---

[![Dashboard](https://img.shields.io/badge/Dashboard-gray?style=for-the-badge)](https://erbium.projectneura.org)
[![GitHub](https://img.shields.io/badge/Repo-060e1a?style=for-the-badge&logo=github)](https://github.com/ProjectNeura/Erbium)

Erbium is Project Neura's internal compute platform. It is designed to suit mid-scale organizational needs and 100%
open-source to avoid concerns about backdoors. We do not aim to provide a user system as it may get too complex and
needs greatly vary across organizations. Our main goal is to build a general and scalable solution for automatic job
scheduling, orchestration, and reinforced file backup. We bring these together using C++ integrated with Python running
in Docker containers, and services exposed via APIs. With the distributed nodes organized using Cloudflare, we are able
to manage dozens to hundreds of nodes without hiring any IT ops. Each host machine simply needs to install Erbium and
run the Docker containers. It is 99% similar to Vast.ai with very little complexity.