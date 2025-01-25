---
title: "Toyota Computer Vision Challenge"
description: "Toyota Computer Vision Sticker Detection Challenge"
date: 2023-05-14
tags: ["engineering", "computer vision", "automation"]
image: "/public/toyotaCV.png"
github: "https://github.com/csabahi/ToyotaCV"
demo: "https://github.com/csabahi/ToyotaCV"
---

# Example Engineering Project

## Overview
The aim of the project was to provide a reliable solution for utilizing automation to detect and inspect holes in engine bays that need to be covered by stickers. The stickers are polaced to reduce cabin-noise allowing for a smoother diving experience and prevent damage to the internal systems in the engine bay. The objective is to develop a program capable of analyzinfg a live feed/photos of an engine bay during the sticker application process, automatically identifying any holes that are not covered and relaying that information to the already automated process.

![Project Result](/public/toyota2.png)

## Technical Details
- Preprocessing: Apply image preprocessing techniques to enhance the image quality and remove any noise or artifacts that may interfere with subsequent analysis steps. This involved operations such as noise reduction, image enhancement, and calibration.

- Hole Detection: Apply computer vision techniques to identify potential hole locations. This involved edge detection, contour analysis, blob detection, and mean adaptive thresholding methods to locate areas with missing stickers, which indicates the presence of holes.

- Precision Measurement: Calculate the size of detected holes by measuring their dimensions accurately. This can was implemented to differentiate holes that are apart of the engine and intended to be there, versus holes that need to be covered by a sticker.


## Results
At the end of the challenge our solution was able to properly identify holes which are covered and not covered by stickers. The next steps were to implement a Convolutional Neural-Network to detect wrinkles and other possible defects in sticker placement to validate whether the sticker was correctly placed.

## Skills/Technologies Used
- Python
- OpenCV
- Numpy