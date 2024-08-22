---
title: "Engine Sound Simulator"
description: "This post is purely for testing if the css is correct for the title on the page"
publishDate: "14 Aug 2024"
tags: ["creativity","software development"]
---

## Introduction
It's been a bunch of years that I've started to get obsessed by how car engines sound. I love their dynamics, their energy and... Their complexity.
Indeed engine sounds aren't simple at all! And even less simple they are to be simulated.

Videogames often try to imitate them by **sampling** the sound of real engines at different RPM and then putting the tracks together in-game by altering the pitch and the volume of different engine loops. What this means is that technically the in-game engine sound is a perfect copy of the original one, but we can't play with it, because as soon as we change the RPM by a unit, the sound will alter following a pitch shift, rather than being a new sound created by the pistons firing faster, so the sound gets less and less realistic as we shift RPM, increase the load on the engine or even change how air is pushed inside of the cylinders.
Everything makes a difference.

So... What's the most rational, realistic, feasible and smart thing to do?
Of course to simulate everything from scratch!

I may have underestimated the task but the end result is incredibly cool!
https://www.youtube.com/watch?v=7ZMjbiQeR78

## A bit of History
The project started as a dumb idea that didn't work by design.
I was as usual having fun by thinking about stupid ideas to code in my favourite game engine, *Godot*, when all of a sudden I wanted to recreate the sound of a car engine by synthesising it. A really small accessible project I must say, and indeed it wasn't much before I realised how hard it was to make something sound like a car engine!

But even if my code couldn't synthesise anything else but a weird fart that changed in pitch, I was learning a lot. By failing I was having intuitions on how sound might have worked and by trying again I could confirm my hypotheses, I was starting to learn new things about sound! However the project was doomed to fail... I mean it wasn't even a project at that stage, so it was obvious that I would just trash that folder to make up for some space on my PC at some point, but it didn't end there!

Why? Please introduce my saviour, AngeTheGreat!
Ange is a talented YouTuber who makes videos about coding difficult stuff in C++.
At some point his brain told him to make a physics simulation of an engine running and the result was great! So what did I do?

... Of course I copied its whole idea!
*The reality is much more complex and I didn't copy him, if you're interested in details check out the last paragraph, it better explains the differences between our projects.*

## How the s\*\*t works!
As I've already said, the first prototypes were just random experiments with code, but after getting inspired by Ange's video I decided to give the whole project a better structure.
At the current point in time the simulator is mainly divided in two parts: the physics simulation, and the sound propagation simulation.

The physics sim is an actual dedicated physics simulation that runs thousands of times in a second to simulate the engine. While Ange's simulator (As far as I know) uses his general purpose physics simulation, my simulator needs each behaviour to be explicitly defined in code, which is good for performance but bad if we want more freedom with the engine designs, fortunately most popular I.C.E.s are piston engines and wankel engines.
The main objective of this system is to answer the question "Where is the piston and what is the pressure and temperature of the piston chamber?", we need to answer this because these are the parameters that will be used in the sound simulation to actually synthesise the engine sound. To answer this question the simulation takes account of the crankshaft velocity to then use some simple trigonometry to calculate the piston's distance from T.D.C., after calculating the piston's position it can then check the state of the engine (Intake, compression, power, exhaust) and use that to decide what to do with the pressurised air inside the piston chamber. This approach is however inaccurate, as the valves don't suddenly completely open up in real life, they slowly raise and lower and can have lots of different profiles depending on the type of engine, so in the future I'll definitely change this to be more accurate.

While the physics sim is allowed to run at frequencies as low as 3000 Hz, the sound simulation needs to run at a constant 44.1KHz, as that is one of the most common sampling rates of sound. Sometimes the simulation gets really heavy so I can decide to lower the sampling rate to 22.05KHz, but you get the point.
All this simulation does is applying some reverb filters to the raw pressure signal of the air inside the piston chamber, but even if it sounds simple, it isn't.
The problem is that from what I've been able to see there is very little information online about how car engine's sound are produced, what makes them unique, why they sound as they do, etc. So the sound simulation can't be made by studying it, we need to invent it.
And this is where my approach shines... Or fails.
From what I've been able to understand Ange's latest simulation works by sampling the air velocity at the exhaust valve and then run a special kind of simulation through the exhaust system.
This approach sounds incredibly good, as it is possible to hear in this video: https://www.youtube.com/watch?v=J11c8mMN1PA, however I think that at a certain point or when put to extreme tests it will fail.
This is because the sound becomes accurate only after running it trough the exhaust, while in real life car engines have a very unique sound even without the exhaust system. The sound is very different from what is able to hear at the exhaust pipe, but it's a step that I think is necessary if we really want to capture the sound of an engine.
This is a playlist that I've made as a reference, the video made by Garbage Time does a really good job at demonstrating how unique is the sound coming out from the exhaust valve (The engine runs at 4:42): https://www.youtube.com/watch?v=byydQGnWiao&list=PLbWihwcrPfUpxW1mKfIrjX5qm_dPfJ4aE&index=1.
So what's the solution? Simulating the reverb inside of the piston chamber! It may seem weird that sound is able to survive in such an extreme environment, but sound is nothing else but a difference in pressure, so as long as pressure keeps changing, there is a sound.
My simulation uses a really simple delay filter to simulate reverb inside of the piston chamber, but it keeps changing its length relative to the volume inside of the chamber. This means that when the piston is at TDC, the reverb will produce a very high pitched reverb sound, while at BDC, the sound will bounce slower.

The video that I showed at the beginning of this post shows this approach working pretty well, but it misses lots of features, so here's the list of what I think needs to be changed to make the engine really sound good:
- Rewrite everything in C++ so that the simulation can run faster
- Apply a low-pass filter on samples running trough the chamber's reverb filter according on the amount of difference in the delay length (by changing the delay time we suddenly skip some samples, so it's important to interpolate between them)
- Let the chamber reverb filter both send sound to the exhaust and receive it
- Improve the reverb filter by actually making it a reverb filter and not a delay filter
- Simulate the exhaust valve acoustic behaviour by applying a low-pass filter according to the crankshaft rotation
- Better simulate the exhaust valve physics behaviour when letting air out
- Simulate turbulence at the exhaust valve by applying a noise sound according to some parameters
- Use Ange's approach on the exhaust system to simulate sound propagation
- General improvements in the physics simulation (these should not be extremely important, so I'll better define them in the future)

## Future, ideas, scope and project motivation

The project is currently paused so that I can work on some other stuff (Like making this website!), but it will continue and evolve.
I have really lots and lots of idea for this project, I'll make some examples just to let you imagine how great this simulator is:
Imagine building an engine from scratch in a videogame, how cool would it be?
And what if the user had to worry about primary and secondary balance of the engine?
Imagine having a piece of code that calculates inertia from engine forces, wouldn't it be cool to be able to make unstable engines that make the whole vehicle bounce?
Also imagine how many different ways exist to break an engine, you could have pistons not sealing against the cylinder walls, valves not operating, misfiring and knocking, and each of this issue would have its own unique sound generated in real time.
What if we bring under the hood tools that don't exist in real life, made by gods? Imagine having an extremely efficient cryocooler with valves that regulate the flow, now you could keep the engine block hot while combustion is happening and then quickly cool it down as soon as it finishes, making it extremely efficient and knock resistant.
There are so many stupid ideas that can be tested and I can't wait to implement ways to do this stuff, but before my imagination turns this project into a scope creep monster, I need to set an objective (look online for S.M.A.R.T. objectives if you want to learn more about how your project may suddenly explode in a ball of fire and destroy all your family and friends).
My current objective is to be able to simulate the sound of the engine of a Setra 328 DT so that it is distinguishable from other engines.
If we want to be strict we could compare this objective with what SMART objectives require and find out that:
- Specific: Very good, we know what to do here. The main focus is sound.
- Measurable: Good enough. "So that it is distinguishable" isn't a very good measure but it is difficult to measure sound quality, the "Being distinguishable" test should make the measure more objective.
- Achievable: Good enough. If Ange can do this, I can too.
- Relevant: Very good, simulating the sound is one step of the whole idea of building engines.
- Timely: Oh no... I don't have a time limit.

So what SMART tells me is that overall I have a good objective, but the absence of a time restriction is a problem. However, I don't know how to interpret this, since I'm not a company, I don't have to worry about income, I do this for fun, so I guess that personal projects aren't smart, they're just... smar?
Or are they? Maybe they're... S.M.A.R.M.?
- Specific
- Measurable
- Achievable
- Relevant
- Motivated

Oh wait motivation just translates to years that I'm able to sustain this mental damage... Ok it's one year or a little more I think, so I should be good...

Yeah this is my blog post about my engine simulator... I don't know how to write an ending...

## I've almost reached 2000 words, so let me write a little more

1957 1958 1959 1960 1961 1962 1963 1964 1965 1966 1967 1968 1969 1970 1971 1972 1973 1974 1975 1976 1977 1978 1979 1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998... Ok bye!
