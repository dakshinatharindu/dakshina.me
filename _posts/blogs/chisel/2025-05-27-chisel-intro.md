---
title: "1. Chisel: A Beginner's Guide"
description: >-
  A step-by-step guide to mastering Chisel, a powerful tool for building hardware designs. This tutorial is designed for beginners and covers the essentials of Chisel.
author: dakshina
date: 2025-05-27 18:00:00 -0500
categories: [Blogging, Chisel]
tags: [chisel, hdl]
pin: true
blog: true
image:
  path: assets/blogs/chisel/chisel.png
  lqip: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDUwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjMDMwYTE5IiBkPSJNMCAwaDgwMHY0NTBIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNiAxLjYpIHNjYWxlKDMuMTI1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzI1ODFmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtOS4wMTc3NCAtMjMuNDU3MTMgMjcuNDAwNzUgLTEwLjUzMzggMzUuNiA3NCkiLz48ZWxsaXBzZSBmaWxsPSIjMTU0OWI0IiBjeD0iMTY4IiBjeT0iNzciIHJ4PSIxNjEiIHJ5PSIxNCIvPjxlbGxpcHNlIGN4PSI2NiIgY3k9IjI0IiByeD0iMjU1IiByeT0iNDAiLz48cGF0aCBmaWxsPSIjMjQ3YWZmIiBkPSJNNzYgNjZMOCA4MWwzMCAxOHoiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xOS43Mzg3NiAtMjYuODcxMDYgNzYuOTMyNzUgLTU2LjUxMjczIDI0Ny44IDEwOC4yKSIvPjxwYXRoIGQ9Ik0yNzEgOTEuNkw0OS40IDkzLjJsMzYtMjQuNEw5Ni42IDE1OXoiLz48ZWxsaXBzZSBjeD0iNjciIGN5PSIxMjEiIHJ4PSIyNTUiIHJ5PSIyMyIvPjxlbGxpcHNlIGZpbGw9IiMyNzg2ZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjkwNjAyIDIzLjU4NDQyIC0xLjk3Njc3IC4wNzU5NCAxNzUuMiA2OS45KSIvPjwvZz48L3N2Zz4=
  alt: Docker Logo
---

## Introduction
Chisel is a powerful hardware description language (HDL) that allows you to design complex digital circuits with ease. It provides a high-level abstraction for hardware design, making it easier to write, read, and maintain your code. In this blog post will guide you through the process of getting started with Chisel, from installation to writing your first Chisel module.

## Installation
You can use [chisel-template](https://github.com/dakshinatharindu/chisel-template.git) to get started with Chisel. This template provides a basic project structure and includes all the necessary dependencies to start writing Chisel code.

> Before you begin, make sure you have vscode and docker installed on your system. You can follow the [Getting Started with Docker](../docker-installation) blog post to install Docker on your system.
{: .prompt-warning }

1. **Create a GitHub Repository**: Go to [chisel-template](https://github.com/dakshinatharindu/chisel-template.git) and click on the "Use this template" button to create a new repository. You can name it whatever you like, for example, `my-chisel-project`.
2. **Clone the Repository**: Open a terminal and clone the repository to your local machine:
   ```bash
   git clone https://github.com/<your-username>/my-chisel-project.git
   cd my-chisel-project
   ```
3. **Open the Project in VSCode**: Open the cloned project in Visual Studio Code. You can do this by running the following command in the terminal:
   ```bash
   code .
   ```
4. **Open Dev Container**: If you have the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installed, you can open the project in a dev container. This will set up a development environment with all the necessary dependencies for Chisel.
   - Use the command palette (Ctrl+Shift+P) and select "Remote-Containers: Open Folder in Container...".
   - Select the folder you cloned in step 2.
   - The first time you open the project in a dev container, it will take some time to build the container. Once the build is complete, you will have a fully functional Chisel development environment.
5. **Verify the Setup**: To verify that everything is set up correctly, you can run the following command in the terminal:
   ```bash
    sbt test
   ```
   This command will run the tests included in the project. If everything is set up correctly, you should see the tests passing without any errors.

## Writing Your First Chisel Module
Lets create a simple Chisel module that adds two numbers together. Follow these steps:
1. **Create a New File**: In the `src/main/scala/adder` directory, create a new file named `Adder.scala`. You may need to create the `adder` directory.
2. **Write the Chisel Code**: Open `Adder.scala` and add the following code:
   ```scala
    package adder

    import chisel3._
    import chisel3.util._

    class Adder(width: Int = 32) extends Module {
      val io = IO(new Bundle {
        val a = Input(UInt(width.W))
        val b = Input(UInt(width.W))
        val sum = Output(UInt(width.W))
        val cout = Output(Bool())
      })

      // Perform addition with carry out
      val result = io.a +& io.b
      io.sum := result(width-1, 0)
      io.cout := result(width)
    }
    ```
3. **Create a Test for the Module**: In the `src/test/scala/adder` directory, create a new file named `AdderTest.scala` and add the following code:
    ```scala
    package adder

    import chisel3._
    import chisel3.simulator.EphemeralSimulator._
    import org.scalatest.flatspec.AnyFlatSpec
    import org.scalatest.matchers.should.Matchers

    class AdderTest extends AnyFlatSpec with Matchers {
      behavior of "Adder"

      it should "add two numbers correctly without carry" in {
        simulate(new Adder(8)) { dut =>
          dut.io.a.poke(5.U)
          dut.io.b.poke(3.U)
          dut.clock.step(1)
          dut.io.sum.expect(8.U)
          dut.io.cout.expect(false.B)
        }
      }

      it should "add two numbers correctly with carry" in {
        simulate(new Adder(8)) { dut =>
          dut.io.a.poke(255.U)
          dut.io.b.poke(1.U)
          dut.clock.step(1)
          dut.io.sum.expect(0.U)
          dut.io.cout.expect(true.B)
        }
      }
    }
    ```
4. **Run the Tests**: In the terminal, run the following command to execute the tests:
  ```bash
  sbt test
  ```
  You should see the test for the Adder module passing successfully.

## Generate SystemVerilog Code
Now that you have written your first Chisel module and tested it, you can generate the SystemVerilog code for your module. Chisel allows you to generate hardware description languages like Verilog or SystemVerilog from your Chisel code, which can then be synthesized and implemented on FPGA or ASICs. To do this, follow these steps:
1. **Create a New File**: In the `src/main/scala/adder` directory, create a new file named `GenerateVerilog.scala`.
2. **Write the Code to Generate Verilog**: Open `GenerateVerilog.scala` and add the following code:
    ```scala
    package adder

    import chisel3._
    import circt.stage.ChiselStage
    import java.io.{File, FileWriter}

    object GenerateVerilog extends App {
      // Create directory if it doesn't exist
      val targetDir = "generated"
      val dir = new File(targetDir)
      if (!dir.exists()) dir.mkdirs()
      
      val verilog = ChiselStage.emitSystemVerilog(new Adder(8))
      val verilogFile = new File(s"$targetDir/Adder.sv")
      val writer = new FileWriter(verilogFile)
      writer.write(verilog)
      writer.close()
    }
    ```
3. **Run the Verilog Generation**: In the terminal, run the following command:
   ```bash
   sbt "runMain adder.GenerateVerilog"
   ```
   This will generate the SystemVerilog code for the Adder module and save it in the `generated` directory as `Adder.sv`.


## Conclusion
In this blog post, we have covered the basics of getting started with Chisel, including installation, writing your first Chisel module, and testing it. Chisel is a powerful tool for hardware design, and with this foundation, you can start exploring more complex designs and features. In the next blog post, we will dive deeper into Chisel's features and explore how to create more complex hardware designs. Stay tuned!
