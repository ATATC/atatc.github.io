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

Efficient VLMs need each visual token to represent as large a region as possible with minimal information loss. We introduce Varest, maximizing semantic fungibility: token sets with available semantic/language prior can be summarized coarsely, while object boundaries and literal text require finer distinctions. We ensure full coverage by controlling the semantic granularity. Learned \texttt{[REL]} registers then prune visual tokens that the LLM already integrates after early decoder processing. Across three LLaVA backbones and 13 benchmarks, \method{} outperforms 15 baselines in mean performance retention at every evaluated budget, retaining 86.10--92.33\% of full-token performance with only 5.56\% of the tokens and a lower computational cost than the prior work. This high performance further generalizes to Qwen.