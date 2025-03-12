---
title: 2. Creating Docker Image and Running Container
description: >-
  A step-by-step guide to build and run you first docker image. This tutorial lets you learn different dockerfile commands to modify your image. This tutorial is designed for beginners and covers the essentials of Docker.
author: dakshina
date: 2025-03-08 00:00:00 -0500
categories: [Blogging, Docker]
tags: [docker, dockerfile]
pin: true
blog: true
image:
  path: assets/blogs/docker/docker_logo.png
  lqip: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDUwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjMDMwYTE5IiBkPSJNMCAwaDgwMHY0NTBIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNiAxLjYpIHNjYWxlKDMuMTI1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzI1ODFmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtOS4wMTc3NCAtMjMuNDU3MTMgMjcuNDAwNzUgLTEwLjUzMzggMzUuNiA3NCkiLz48ZWxsaXBzZSBmaWxsPSIjMTU0OWI0IiBjeD0iMTY4IiBjeT0iNzciIHJ4PSIxNjEiIHJ5PSIxNCIvPjxlbGxpcHNlIGN4PSI2NiIgY3k9IjI0IiByeD0iMjU1IiByeT0iNDAiLz48cGF0aCBmaWxsPSIjMjQ3YWZmIiBkPSJNNzYgNjZMOCA4MWwzMCAxOHoiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xOS43Mzg3NiAtMjYuODcxMDYgNzYuOTMyNzUgLTU2LjUxMjczIDI0Ny44IDEwOC4yKSIvPjxwYXRoIGQ9Ik0yNzEgOTEuNkw0OS40IDkzLjJsMzYtMjQuNEw5Ni42IDE1OXoiLz48ZWxsaXBzZSBjeD0iNjciIGN5PSIxMjEiIHJ4PSIyNTUiIHJ5PSIyMyIvPjxlbGxpcHNlIGZpbGw9IiMyNzg2ZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjkwNjAyIDIzLjU4NDQyIC0xLjk3Njc3IC4wNzU5NCAxNzUuMiA2OS45KSIvPjwvZz48L3N2Zz4=
  alt: Docker Logo
---

## Introduction
In the previous blog post, we covered the installation of Docker on your system. Now that you have Docker up and running, it's time to dive into the exciting world of containers. In this blog post, I'll guide you through building your first Docker image and running your first container.

> Before we begin, make sure you have Docker installed on your system. If you haven't installed Docker yet, please refer to the [previous blog post](../docker-installation) for installation instructions.
{: .prompt-warning }

## Creating Docker image and running container
Let's start by creating a simple Docker image. We'll use a basic Debian image as our base and install some essential packages.
1. **Create a Project Directory**: Create a new directory for your Docker project. You can name it whatever you like. For this example, I'll use `my-docker-app`.
```bash
mkdir my-docker-app
cd my-docker-app
```
2. **Create a Dockerfile**: Inside your project directory, create a file named `Dockerfile` (no file extension). This file will contain instructions for building your Docker image.
```bash
touch Dockerfile
```
3. **Write the Dockerfile**: Open the `Dockerfile` in a text editor and add the following content:
You can refer to [this section](#understanding-the-dockerfile-commands) for more information about the Dockerfile commands.
```Dockerfile
# Use the official Debian image
FROM debian:latest
# Update the package list and install necessary packages
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends bash curl wget vim \
    build-essential autoconf git wget python3 python3-pip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
```
4. **Build the Docker image**: Now, let's build our Docker image using the `docker build` command. Make sure you are in the project directory where the `Dockerfile` is located.
```bash
docker build -t my-docker-image .
```
This command will build the Docker image and tag it as `my-docker-image`. The `.` at the end specifies the build context, which is the current directory.

5. **Verify the image**: After the build process completes, you can verify that your image was created successfully by running:
```bash
docker images
```
You should see your `my-docker-image` listed in the output.

6. **Running your first Docker container**: Now that we have our Docker image, let's run a container based on it. To run a container from your image, use the `docker run` command:
```bash
docker run -it --name my-container my-docker-image
```
This command will start a new container named `my-container` based on the `my-docker-image` image. The `-it` flag allows you to interact with the container's shell. Once the container is running, you will be inside the container's shell. You can now execute commands as if you were on a regular Debian system.

## How to view running containers
To view the list of running containers, you can use the following command:
```bash
docker ps
```
This command will list all the running containers along with their details.

## How to stop and remove the container
To stop the container, you can use the `exit` command inside the container's shell. If you want to remove the container, you can use the following command:
```bash
docker remove my-container
```
If you want to remove the image, you can use the following command:
```bash
docker rmi my-docker-image
```
> Please make sure to remove old containers and images to free up space on your system. Docker usually takes significant space on your system.
{: .prompt-warning }

## How to open another shell in a running container
Sometimes you may want to open another shell inside a running container. You can do this using the `docker exec` command. For example:
```bash
docker exec -it my-container /bin/bash
```
This command will open a new shell inside the running container.

## How to attach a local directory to a container
If you want to attach a local directory to a container, you can use the `-v` flag with the `docker run` command. For example:
```bash
docker run -it -v /path/to/local/directory:/path/in/container my-docker-image
```
This will attach the local directory to the container at the specified path. You can modify the contents from both the host and the container and they will be in sync.

## Understanding the Dockerfile Commands
In the Dockerfile we created, we used only two commands. However, there are many more commands available to customize your Docker image. Here are some of the most commonly used Dockerfile commands:
- `FROM`: Specifies the base image to use for your Docker image.
- `RUN`: Executes a command inside the container during the build process. This is where you can install packages, run scripts, and perform other setup tasks.
- `CMD`: Specifies the default command to run when the container starts.
- `ENTRYPOINT`: Sets the default executable for the container.
- `COPY`: Copies files from the host machine to the container.
- `ADD`: Similar to `COPY`, but also supports remote URLs and tar file extraction.
- `ENV`: Sets environment variables inside the container.

Here I have listed only few commands. You can find the complete list of Dockerfile commands in the [official Docker documentation](https://docs.docker.com/engine/reference/builder/).


## Conclusion
Now you have successfully built your first Docker image and run your first container. In the next blog post, we will explore Docker Hub and learn how to push and pull images from the Docker registry. Stay tuned!
