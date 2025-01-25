---
title: "Soccer-Playing Humanoid Robotics!"
description: "Progress tracking of UW RoboSoccer"
date: 2024-01-15
tags: ["engineering", "robotics", "automation"]
image: "/public/robotMechDesign.png"
github: "https://github.com/UW-RoboSoccer/repositories"
demo: "https://uw-robosoccer.github.io/"
---

# Example Engineering Project

## Overview
This page tracks the ongoing progress of UW RoboSoccer. 
The team will be competing in the 2026 RoboCup South Korea competition!

## Details
- Building 4x ~50cm tall humaonid robotics to play soccer in 4-on-4 matches
- Most teams build robots at $10k/robot. We are attempting to achieve better results with less expensive hardware
- We aim to disrupt other teams by implementing a near full Reinforcement Learning control of the robot's locomotion and complex skills as well as the highlevel gameplay controller
- If you're interested in supporting us - we would always appreciate sponsorships!

# January 2025

## Software and Controls
- After meeting with our PhD and industry advisors, we have decided to implement a classical/algorithmic controls approach for a stabilization controller which will act as a middle man between our RL model and motor control. For this we are using the TSID library to define constraints and tasks to use the libraries to optimize motion by modelling the robot as an inverse pendulum based on the Center of Mass
- For this inverse dynamics modeling we are referencing Kajita et al.'s Introduction to Humanoid Robotics textbook to familiarize ourselves the the problem as well as Zero-Moment Point.

## Hardware
- Finalized part selection for IMU and force sensors as well as placement.

### IMU
- Selected the <a href="https://www.adafruit.com/product/4754" target="_blank" rel="noopener noreferrer"> Adafruit BNO085</a>
IMU for its advanced 9DOF data, built in sensor fusion for advanced data, as well as level shifted pins and pull-up/down resistors for simple I2C connection 
- Will be placed as close to the center of mass as possible for best results when feeding data into the Reinforcement Learning Model
- Next step is to implement Extended Kalman Filter and add to physical build

### Force Sensor
- Selected the 
<a href="https://www.digikey.ca/en/products/detail/ohmite/FSR03CE/9178298" target="_blank" rel="noopener noreferrer"> Ohmite FSR03CE Forse Sensistive Resistor</a> 
for it's small in-expensive design with accurate measurements: drift under 1% over 48hrs of 1kg, repeatability of +- 4%, while operating in our range of up to 5kg.
- For accurate calculations of the Zero-Moment Points 2 force sensors will be placed on each foot - front and back. 
- Next step it to develop the circuitry required to get accurate data, using a breadboard - with PCB design required for the final product.