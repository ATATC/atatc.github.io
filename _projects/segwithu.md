---
layout: page
title: SegWithU
description: Uncertainty as Perturbation Energy for Single-Forward-Pass Risk-Aware Medical Image Segmentation
img: /assets/img/segwithu.png
importance: 1
category: medical image processing
related_publications: true
---

[![Project](https://img.shields.io/badge/Project-gray?style=for-the-badge)](https://segwithu.projectneura.org)
[![arXiv](https://img.shields.io/badge/Preprint-b31b1b?style=for-the-badge&logo=arxiv)](https://arxiv.org/abs/2604.15271)
[![GitHub](https://img.shields.io/badge/Repo-060e1a?style=for-the-badge&logo=github)](https://github.com/ProjectNeura/SegWithU)
[![Hugging Face](https://img.shields.io/badge/HF-orange?style=for-the-badge&logo=huggingface)](https://huggingface.co/ProjectNeura/SegWithU)

Reliable uncertainty estimation is critical for medical image segmentation, where automated contours feed downstream quantification and clinical decision support. Many strong uncertainty methods require repeated inference, while efficient single-forward-pass alternatives often provide weaker failure ranking or rely on restrictive feature-space assumptions. We present **SegWithU**, a post-hoc framework that augments a frozen pretrained segmentation backbone with a lightweight uncertainty head. SegWithU taps intermediate backbone features and models uncertainty as perturbation energy in a compact probe space using rank-1 posterior probes. It produces two voxel-wise uncertainty maps: a calibration-oriented map for probability tempering and a ranking-oriented map for error detection and selective prediction. Across ACDC, BraTS2024, and LiTS, SegWithU is the strongest and most consistent single-forward-pass baseline, achieving AUROC/AURC of $0.9838/2.4885$, $0.9946/0.2660$, and $0.9925/0.8193$, respectively, while preserving segmentation quality. These results suggest that perturbation-based uncertainty modeling is an effective and practical route to reliability-aware medical segmentation {% cite fu2026segwithuuncertaintyperturbationenergy %}.