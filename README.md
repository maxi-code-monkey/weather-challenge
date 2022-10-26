# Flow Weather-App Challenge

### Node.js

Since this project runs in a Node environment, it is best to install the [nvm](https://github.com/nvm-sh/nvm#installation-and-update) package manager. nvm allows you to easily manage and run different versions of Node on your system.

#### How to install nvm?

You can find the different methods for installing it [here](https://github.com/nvm-sh/nvm#installation-and-update), but the easiest way is to install it using `curl`

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

or Wget:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

To verify that nvm has been installed, run:

```
command -v nvm
```

which should output 'nvm' if the installation was successful. Please note that which nvm will not work, since nvm is a sourced shell function, not an executable binary

On Linux, after running the install script, if you get nvm: command not found or see no feedback from your terminal after you type:

```
command -v nvm
```

simply close your current terminal, open a new terminal, and try verifying again.

#### What version of Node do I need?

Any version gets the job done for this particular challenge. No particular version was used for the setup.

# Configuration

Once you have all of the project's needed software and packages, it is time to set up the project's environment variables, which you will do within the `.env` file.

The simplest approach would be to duplicate the [`.ENV.example`](.ENV.example) file in the root of the project and rename the copied file to `.env`. Replace the `*` with the actual API KEY value.

# Run

### Running the project

All of the project's dependencies will need to be installed locally on your machine before you can successfully run the project. If your in the root of the project then run `npm install` which npm will then look at the `package.json` and install all of the tracked packages on your machine.

Once the packages are installed successfully you can than run the project by using the `npm run start` command. This will run the app in development mode.

### Verifying your project is running

You can verify that the project is running by opening your browser and hitting http://localhost:3000

# Test

To run a test manually, you are able to achieve this by running the following scripts

### Standard Test

`npm run test`

Since this is a challenge, only a couple of tests were setup in order to show just a simple example of each type (Snapshot, Testing a Component, Testing a Function).


# General Information

The base app structure was setup using `CRA`.
`React-Query` was used for state management because of the multiple capabilities it provides such as caching, memoization, etc.
