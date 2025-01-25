---
title: "3DOF Torque Minimizer"
description: "Base Torque Minimizer of 3DOF Robotic rm"
date: 2023-04-05
tags: ["engineering", "robotics", "optimization"]
image: "/public/3dof3.png"
github: "https://github.com/csabahi/MinTorqueScript"
demo: "https://github.com/csabahi/MinTorqueScript"
---

# Example Engineering Project

## Overview
The aim of the project was to develop a three-degree-of-freedom planar serial robotic manipulator. The goal of this project is to determine the optimal length of the three links of the manipulator (l1, l2, l3) in order to minimize the torques (T1, T2, T3) required to maintain the manipulator in a state of equilibrium.
The material, width, and thickness of the manipulator's links have already been predetermined, the job is to find the optimal link lengths that will make the base motor require the least amount of torque possible for the given positions.

![Project Result](/public/3dof2.png)

## Approach
Instead of exclusively conducting research on conventional design patterns for three-degree-of-freedom machines, we opted to develop a script that incorporates an initial "educated estimate" based on our research findings, which will subsequently be refined utilizing the advanced frameworks available through Python.

## Results
The program was run with an initial guess of [1, 1, 0.5], the SciPy optimization function took 31 iterations to refine the value's of the lengths (optimized torque ≈ 35Nm) which were then passed to TestAlgorithm.py where the values were fine-tuned to precisely:
with a final combined torque of 32.872Nm. Resulting the most optimal solution.

## Skills/Technologies Used
- Python
- SciPy
- Numpy