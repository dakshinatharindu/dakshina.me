---
title: 1. Getting Started with Docker
description: >-
  A step-by-step guide to installing Docker on your system and setting up a basic container. This tutorial is designed for beginners and covers the essentials of Docker.
author: dakshina
date: 2025-03-07 18:00:00 -0500
categories: [Blogging, Docker]
tags: [docker vscode]
pin: true
blog: true
image:
  path: assets/blogs/docker/docker_logo.png
  lqip: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDUwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjMDMwYTE5IiBkPSJNMCAwaDgwMHY0NTBIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNiAxLjYpIHNjYWxlKDMuMTI1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzI1ODFmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtOS4wMTc3NCAtMjMuNDU3MTMgMjcuNDAwNzUgLTEwLjUzMzggMzUuNiA3NCkiLz48ZWxsaXBzZSBmaWxsPSIjMTU0OWI0IiBjeD0iMTY4IiBjeT0iNzciIHJ4PSIxNjEiIHJ5PSIxNCIvPjxlbGxpcHNlIGN4PSI2NiIgY3k9IjI0IiByeD0iMjU1IiByeT0iNDAiLz48cGF0aCBmaWxsPSIjMjQ3YWZmIiBkPSJNNzYgNjZMOCA4MWwzMCAxOHoiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xOS43Mzg3NiAtMjYuODcxMDYgNzYuOTMyNzUgLTU2LjUxMjczIDI0Ny44IDEwOC4yKSIvPjxwYXRoIGQ9Ik0yNzEgOTEuNkw0OS40IDkzLjJsMzYtMjQuNEw5Ni42IDE1OXoiLz48ZWxsaXBzZSBjeD0iNjciIGN5PSIxMjEiIHJ4PSIyNTUiIHJ5PSIyMyIvPjxlbGxpcHNlIGZpbGw9IiMyNzg2ZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjkwNjAyIDIzLjU4NDQyIC0xLjk3Njc3IC4wNzU5NCAxNzUuMiA2OS45KSIvPjwvZz48L3N2Zz4=
  alt: Docker Logo
---

## Introduction
Have you ever encountered a situation where your application works flawlessly on your machine but fails on another? Or faced the daunting task of setting up a new environment, worrying about installing all dependencies and potential version conflicts with other projects? Docker can help! Docker is a platform that allows you to package your application and its dependencies into a container, ensuring it runs consistently across different environments. In this blog post, we'll guide you through the process of installing Docker on your system and setting up a basic container.

## Prerequisites
Before we begin, make sure you have the following prerequisites:
- A computer running Windows, macOS, or Linux.
- Administrative privileges on your system.
- An internet connection to download Docker.

## Installation
I will be installing Docker on Linux system. If you are using a different operating system, please refer to the official Docker documentation for [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) or [macOS](https://docs.docker.com/desktop/setup/install/mac-install/).
### Step 1: Install Docker on Your System

- Arch Linux
  ```bash
  sudo pacman -S docker
  ```

- Ubuntu/Debian
  ```bash
  # Add Docker's official GPG key:
  sudo apt-get update
  sudo apt-get install ca-certificates curl
  sudo install -m 0755 -d /etc/apt/keyrings
  sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  sudo chmod a+r /etc/apt/keyrings/docker.asc

  # Add the repository to Apt sources:
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update

  # Install Docker:
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  ```

### Step 2: Start Docker Service
After installation, you need to start the Docker service. Run the following command:
```bash
sudo systemctl start docker
```
### Step 3: Enable Docker to Start on Boot
To ensure Docker starts automatically when your system boots, run the following command:
```bash
sudo systemctl enable docker
```
### Step 4: Add Your User to the Docker Group
By default, Docker requires root privileges to run. To avoid using `sudo` every time you run a Docker command, you can add your user to the Docker group. Run the following command:
```bash
sudo usermod -aG docker $USER
```
After running this command, you need to log out and log back in for the changes to take effect.
### Step 5: Verify Docker Installation
To verify that Docker is installed correctly, run the following command:
```bash
docker run hello-world
```
This command will download a test image and run it in a container. If everything is set up correctly, you should see a message indicating that Docker is working.

## Conclusion
Congratulations! You have successfully installed Docker on your system and verified its functionality. In the next blog post, we will explore how to create and manage Docker containers. Stay tuned!
