### Workshop in partnership with UNB Dev Society

# How to Install React.js

## Environment Setup

### 1. Install Nodejs

Node.js actually provides a runtime environment to execute JavaScript code from outside a browser. NPM, the default package manager for Nodejs is used for managing and sharing the packages for any JavaScript projects.

In this tutorial, we are going to install React using the Node Package Manager(NPM). So first, it needs to install Nodejs on our system. NPM will be installed with Nodejs itself.

So, the latest version of Node.js can be downloaded and installed from the official website. The URL is given below. Currently, 12.13.0 is the latest version of Nodejs.

<https://nodejs.org/en/download/>

### 2. Make sure you have Node.js and NPM installed

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed:

Test Node. To see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this v12.13.0.

Test NPM. To see if NPM is installed, type `npm -v` in Terminal. This should print the version number so you’ll see something like this 6.12.0

### 3. Install Git and Git Bash

#### Installing on Windows
The most official build is available for download on the Git website. Just go to https://git-scm.com/download/win and the download will start automatically.

#### Installing on Linux
If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the package management tool that comes with your distribution. If you’re on Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), you can use dnf:
```bash
$ sudo dnf install git-all
```
If you’re on a Debian-based distribution, such as Ubuntu, try apt:
```bash
$ sudo apt install git-all
```
For more options, there are instructions for installing on several different Unix distributions on the Git website, at https://git-scm.com/download/linux.

#### Installing on macOS
There are several ways to install Git on a Mac. The easiest is probably to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time.
```bash
$ git --version
```
If you don’t have it installed already, it will prompt you to install it.

If you want a more up to date version, you can also install it via a binary installer. A macOS Git installer is maintained and available for download at the Git website, at https://git-scm.com/download/mac.

### 4. Getting the Project onto your Machine

To get the start-up template follow the instructions below:

* Open up the terminal for Linux and MacOS or Git Bash for Windows
* Make a directory for the workshop project in you desired location `> mkdir react-workshop`
* Clone the repo using HTTP 
```bash
git clone https://github.com/ShivamSabbarwal/react-workshop-2019-template.git
``` 
* Or if you have have SSH setup 
```bash
git clone git@github.com:ShivamSabbarwal/react-workshop-2019-template.git
```

### 5. Running the Application

The app we created can be run locally on your system. To do so, simply change your directory to the project and install the necessary modules.

```bash
cd react-workshop-2019-template
npm i
```

Once the modules are installed you are good to go!

To start the application, run:

```bash
npm start
```

This will opens up the react application in a new tab of our browser with the below URL.

http://localhost:3000
