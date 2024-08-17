---
title: "Engine Sound Simulator"
description: "This post is purely for testing if the css is correct for the title on the page"
publishDate: "14 Aug 2024"
tags: ["creativity","software development"]
---


# Engine Sound Simulator

## Introduction

It's been a bunch of years that I've started to get obsessed by how car engines sound. I love their dynamics, their energy and... Their complexity.
Indeed engine sounds aren't simple, videogames often try to imitate them, but they make so by **sampling** the sound of real engines at different RPM and then putting them together in post by altering the pitch and the volume of different engine loops.

So at this point we technically have a perfect copy of the original sound, but we can't play with that, because as soon as we change the RPM by a unit, the sound will alter following a pitch shift, rather than being made by the pistons firing faster, so the sound gets less and less real as we shift RPM, increase the load on the engine or even change how air is pushed inside the cylinders.
Everything makes a difference.

So... What's the most rational, realistic, feasible and smart thing to do?
Of course to simulate everything from scratch!

I may have underestimated the task but the end result is incredibly cool!
https://www.youtube.com/watch?v=7ZMjbiQeR78

## A bit of History

The project starts as a dumb idea that didn't work by design.
I was as usual having fun by thinking about stupid ideas to code in my favourite game engine, *Godot*, when all of a sudden I wanted to recreate the sound of a car engine by synthesising. A really small accessible project I must say, and indeed it wasn't much before I realised how hard it was to make something sound like a car engine!

But even if my code couldn't synthesise anything else but a weird fart that changed in pitch, I was learning a lot. By failing I was having intuitions on how sound might have worked and by trying again I could confirm my hypotheses, I was starting to learn new things about sound! However the project was doomed to fail... I mean it wasn't even a project at that stage, so it was obvious that I would just trash that folder to make up for some space on my PC at some point, but it didn't end there!

Why? Please introduce my saviour, AngeTheGreat!
Ange is a talented YouTuber who makes videos about coding difficult stuff in C++.
At some point his brain told him to make a physics simulation of an engine running and the result was great! So what did I do?

... Of course I copied its whole idea!
*The reality is much more complex and I didn't copy him, if you're interested in details check out the last paragraph, it better explains the differences between our projects.*

## How the s\*\*t works!
It makes sound, woah, fantastic! That's it, yeah, wish u all good luck with ur lives , bye

## Project's objective

Some of you may know AngeTheGreat on YouTube, and might be thinking that I just stole its idea and made it worse.
While in a sense I am using some of his ideas, my simulator is a completely separate project that has the objective to **sound like** real life engines, not to **simulate real engine behaviour**, what this means is that I'm not interested in achieving real life horsepower and real life torque, because that can be perfectly achieved with the use of a complementary simulation.
Instead my project solely focuses on simulating the sound.
I say this because I've noticed Ange's simulation being really "Physics-centric", where a highly complex core simulation of the engine physics provides all parameters to make other parts of the simulation work, whereas my simulation is designed to be made by different modules that exchange parameters.