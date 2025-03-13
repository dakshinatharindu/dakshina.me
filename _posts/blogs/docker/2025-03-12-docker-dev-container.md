---
title: 4. Setting Up a Development Container with Docker
description: >-
  This tutorial will guide you through setting up a development container using Docker in VS Code. 
author: dakshina
date: 2025-03-12 00:00:00 -0500
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

## Setting Up a Development Container in VS Code
> I will be using Visual Studio Code (VS Code) for this tutorial. This can be done with other IDEs as well, but the steps may vary.
{: .prompt-tip }

#### 1. Install the Dev Container Extension
- Open VS Code and navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
- Search for `Dev Container` and install.
![Install Dev Container Extension](assets/blogs/docker/dev-container.png)

#### 2. Create a *.devcontainer* directory
In your project root directory, create a new directory named `.devcontainer`. Inside this directory, you need to create two files:
1. `Dockefile`: This file contains the instructions to build the development container. This is same as the Dockerfile we used in the previous blog. In this example, we will use a simple Dockerfile that install    basic Debian image and creates a user named `vscode`.
```Dockerfile
# Use Debian image from Docker Hub
FROM dakshinatharindu/debian:latest
# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
# Install dependencies (you can modify this based on your needs)
RUN apt-get update && apt-get install -y \
    sudo \
    git \
    curl \
    vim \
    build-essential \
    python3 \
    python3-pip \
    && apt-get clean
# Create a new user with a home directory and set a default shell
RUN useradd -m -s /bin/bash vscode
# Give the new user sudo privileges
RUN echo 'vscode ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
# Set the working directory for the user
WORKDIR /home/vscode
# Set the default command to bash (this can be modified as needed)
CMD ["/bin/bash"]
```
1. `devcontainer.json`: This file contains the configuration settings for the development container.
```json
{
    "name": "Debian Dev Container",
    "dockerFile": "Dockerfile",
    "context": "..",
    "customizations": {
        "vscode": {
            "settings": {},
            "extensions": [
                "ms-vscode.cpptools",
                "ms-python.python"
            ]
        }
    },
    "remoteUser": "vscode"
}
```
Basic configurations definitions are as follows:
- `name`: Name of the development container.
- `dockerFile`: Path to the Dockerfile. In this case, it is in the same directory. If it is in a different directory, you can specify the path.
- `context`: Path to the project root directory. In here, we want to use the project root directory as the context. That's why we use `..`.
- `customizations`: Additional customizations for the development container. In this example, we are installing the C++ and Python extensions for VS Code. You can add more extensions and settings as needed.
- `remoteUser`: The user to be used in the development container. In this case, it is `vscode`.


#### 3. Open the Project in a Dev Container
- Open the project in VS Code.
- Most likely, you will see a notification at the bottom right corner asking if you want to reopen the project in a container. Click on `Reopen in Container`.
- If you don't see the notification, you can open the Command Palette (Windows/Linux: `Ctrl+Shift+P`, Mac: `Cmd+Shift+P`) and search for `Remote-Containers: Open Folder in Container...` and then select the project root directory.
- VS Code will now build the development container based on the Dockerfile and configuration settings. This may take a few minutes depending on the size of the image and the extensions you are installing. Once the container is built, you will see a new window with the project opened in the development container. You can now start working on your project in the isolated environment.
  
## Conclusion
Setting up a development container using Docker in VS Code is a great way to ensure consistency across all developers working on a project. It eliminates the need to set up the environment manually on each developer's machine and provides a consistent environment for everyone. This makes it easier to onboard new developers and reduces the chances of dependency conflicts. I hope this tutorial was helpful in setting up a development container for your project. Happy coding!

