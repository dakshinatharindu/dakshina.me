---
title: 4. Setting Up a Development Container with Docker
description: >-
  This tutorial will guide you through setting up a development container using Docker in VS Code. 
author: dakshina
date: 2025-03-11 00:00:00 -0500
categories: [Blogging, Docker]
tags: [docker, vscode, dev container]
pin: true
blog: true
image:
  path: assets/blogs/docker/docker_logo.png
  lqip: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDUwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjMDMwYTE5IiBkPSJNMCAwaDgwMHY0NTBIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNiAxLjYpIHNjYWxlKDMuMTI1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzI1ODFmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtOS4wMTc3NCAtMjMuNDU3MTMgMjcuNDAwNzUgLTEwLjUzMzggMzUuNiA3NCkiLz48ZWxsaXBzZSBmaWxsPSIjMTU0OWI0IiBjeD0iMTY4IiBjeT0iNzciIHJ4PSIxNjEiIHJ5PSIxNCIvPjxlbGxpcHNlIGN4PSI2NiIgY3k9IjI0IiByeD0iMjU1IiByeT0iNDAiLz48cGF0aCBmaWxsPSIjMjQ3YWZmIiBkPSJNNzYgNjZMOCA4MWwzMCAxOHoiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xOS43Mzg3NiAtMjYuODcxMDYgNzYuOTMyNzUgLTU2LjUxMjczIDI0Ny44IDEwOC4yKSIvPjxwYXRoIGQ9Ik0yNzEgOTEuNkw0OS40IDkzLjJsMzYtMjQuNEw5Ni42IDE1OXoiLz48ZWxsaXBzZSBjeD0iNjciIGN5PSIxMjEiIHJ4PSIyNTUiIHJ5PSIyMyIvPjxlbGxpcHNlIGZpbGw9IiMyNzg2ZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjkwNjAyIDIzLjU4NDQyIC0xLjk3Njc3IC4wNzU5NCAxNzUuMiA2OS45KSIvPjwvZz48L3N2Zz4=
  alt: Docker Logo
---

## Introduction
As discussed in previous blogs, Docker enables running projects in isolated environments to prevent dependency conflicts. In this blog, we will explore Docker Dev Containers, a feature that allows you to set up a development container alongside your project. This ensures a consistent environment for all developers working on the project. With Docker Dev Containers, you no longer need to use the `docker run` command each time you want to run your project. Instead, you can simply open your project in VS Code and start working. Let's dive into setting up a development container using Docker in VS Code.

## Installing Docker Extension for VS Code
> I will be using Visual Studio Code (VS Code) for this tutorial. This can be done with other IDEs as well, but the steps may vary.
{: .prompt-tip }
