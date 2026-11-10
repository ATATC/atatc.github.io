---
layout: page
title: Varest
description: "Find the Fungible: Variable-Resolution Tokenization that Compacts Semantics with a Granularity Dial as a VLM \"Catalyst\""
img: /assets/img/varest.png
importance: 1
category: research
related_publications: true
---

[![Project](https://img.shields.io/badge/Project-gray?style=for-the-badge)](https://varest.github.io)
[![arXiv](https://img.shields.io/badge/Preprint-b31b1b?style=for-the-badge&logo=arxiv)]([https://arxiv.org/abs/2604.15271](https://arxiv.org/abs/2610.18690))
[![GitHub](https://img.shields.io/badge/Repo-060e1a?style=for-the-badge&logo=github)](https://github.com/Varest/varest)

{% include figure.liquid path="assets/img/varest.png" class="img-fluid rounded z-depth-1" zoomable=true %}

Efficient vision-language models should preserve a useful representation of the whole image, even under tight budgets. Existing approaches provide limited guidance on how to preserve a robust representation as the token budget shrinks. We thus propose Varest, which maximizes semantic fungibility: tokens describing coherent content can be summarized together with minimal information loss. Object boundaries distilled from a visual foundation model guide grouping, while text localization protects details needed for reading. At lower budgets, Varest merges the image into coarser semantic regions, while maintaining full spatial coverage. After early language-model decoder layers process this representation, a learned selector ([REL]) prunes visual tokens the later layers no longer need, reducing repeated access to information already integrated. Across three LLaVA backbones and 13 benchmarks, Varest outperforms 10 training-free and 5 trained baselines in mean performance retention at every evaluated budget, preserving 86.10–92.33% of uncompressed performance using only 5.56% of tokens. This SOTA performance further generalizes to modern Qwen3.8-27B.