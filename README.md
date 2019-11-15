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

### 3. Getting the Project onto your Machine

To get the start-up template follow the instructions below:

* Make a directory for the workshop project in you desired location `> mkdir react-workshop`
* Clone the repo using HTTP 
```bash
git clone https://github.com/ShivamSabbarwal/react-workshop-2019-template.git
``` 
* Or if you have have SSH setup 
```bash
git clone git@github.com:ShivamSabbarwal/react-workshop-2019-template.git
```

### 4. Running the Application

The app we created can be run locally on your system. To do so, simply change your directory to the project and install the necessary modules.

```bash
cd 2019-react-workshop
npm i
```

Once the modules are installed you are good to go!

To start the application, run:

```bash
npm start
```

This will opens up the react application in a new tab of our browser with the below URL.

http://localhost:3000
