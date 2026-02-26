---
layout: page
title: MIP Candy
description: A Candy for Medical Image Processing
img: /assets/img/mipcandy.png
importance: 1
category: medical image processing
related_publications: true
---

[![Project](https://img.shields.io/badge/Project-gray?style=for-the-badge)](https://mipcandy.projectneura.org)
[![arXiv](https://img.shields.io/badge/Preprint-b31b1b?style=for-the-badge&logo=arxiv)](https://arxiv.org/abs/2602.21033)
[![GitHub](https://img.shields.io/badge/Repo-060e1a?style=for-the-badge&logo=github)](https://github.com/ProjectNeura/MIPCandy)

Medical image processing demands specialized software that handles high-dimensional volumetric data, heterogeneous file
formats, and domain-specific training procedures. Existing frameworks either provide low-level components that require
substantial integration effort or impose rigid, monolithic pipelines that resist modification. We present MIP Candy
(MIPCandy), a freely available, PyTorch-based framework designed specifically for medical image processing. MIPCandy
provides a complete, modular pipeline spanning data loading, training, inference, and evaluation, allowing researchers
to obtain a fully functional process workflow by implementing a single method, `build_network`, while retaining
fine-grained control over every component. Central to the design is `LayerT`, a deferred configuration mechanism that
enables runtime substitution of convolution, normalization, and activation modules without subclassing. The framework
further offers built-in $k$-fold cross-validation, dataset inspection with automatic region-of-interest detection, deep
supervision, exponential moving average, multi-frontend experiment tracking (Weights & Biases, Notion, MLflow), training
state recovery, and validation score prediction via quotient regression. An extensible bundle ecosystem provides
pre-built model implementations that follow a consistent trainer--predictor pattern and integrate with the core
framework without modification. MIPCandy is open-source under the Apache-2.0 license and requires Python~3.12 or later
{% cite Fu2026MIPCandy %}.

MIP Candy is Project Neura's next-generation infrastructure framework for medical image processing. It defines a handful
of common network architectures with their corresponding training, inference, and evaluation pipelines that are
out-of-the-box ready to use. Additionally, it also provides integrations with popular frontend dashboards such as
Notion, WandB, and TensorBoard.

We provide a flexible and extensible framework for medical image processing researchers to quickly prototype their
ideas. MIP Candy takes care of all the rest, so you can focus on only the key experiment designs.
