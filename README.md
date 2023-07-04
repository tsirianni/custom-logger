# Zero-dependency journey

This is the first practice on my zero-depency journey (a better would be "Jouney to a more reasonable amount of depencies to manage in a given project", but it lacks marketing), where I take some study time to dive a bit deeper into what Nodejs has to offer and how I could decrease the amount of dependencies that I would normally include in a project, in this case...loggers.

I am a big fan of the Winston logger, but most of the time I am just trying to find a better formatting output for the logs, with a date and a coloured output. My needs did not require anything fancy, so I have decided to meet them using only what Node has to offer,

# Purpose

The purpose of this project is to provide a simple logging utility with basic features for Node.js projects. Most of the time a single log to stdout/stderr or a file is enough and, with just a little bit of formatting, it is possible to obtain a simple third-party-like logger without having to manage dependencies. Of course, this is supposed to be a simple logger, nothing compared to famous loggers like Winston or Pino, but if nothing fancy is required, this could be a great option that requires little effort to acomplish. The Logger class allows you to log messages to either the console or a file, with additional metadata such as date, process ID, and hostname.

# About the custom-logger

It inherits some methods from the `Console` class, but not all of them. However, the desired methods are placed in an array, whichever method is in the array will be inherited, so it can be tailored to what you need to use instead of inheriting all of it. The reason why I decided to inherit is because the Console methods work really well and are already linked to `process.stdout` and `process.stderr`, as previously mentioned, I was only looking for a better formatting to meet my preferences. So I inherited the methods that I wanted to work with and added the possibility of logging to files using the `fs` module to create writable streams.

# Usage

Here is an example of how to create an instance of the Logger class and use it:

```js
const Logger = require("./logger");

// Create a new instance of the Logger class
const logger = new Logger();

// Log an informational message
logger.logInfo("This is an informational message");

// Log an error message
logger.logError("An error occurred", new Error("Something went wrong"));

// Log a warning message
logger.logWarn("This is a warning");

// Log a debug message
logger.logDebug("This is a debug message", { key: "value" });
```

The log messages will be formatted with metadata such as date (ISO), process ID, and hostname, and will be printed to the console by default. If you want to log to a file instead, you can specify the output option when creating the Logger instance:

```js
const logger = new Logger("file");
```

If you choose to log to a file, you need to provide a path for the log file when calling the log methods, as such:

```js
logger.logError(
  "An error occured",
  new Error("Something went wrong."),
  "./logs/error.log"
);
```

This offers more flexibility, once you can direct different logs to different files instead of having all the logs directed to a single path specified in the constructor (I'll admit, it was my first idea).

# Output

By default, the log messages are printed in different colors based on the log level. For example, error messages are printed in red. Here are some examples of the log messages:

![custom-logger-usage-example](https://github.com/tsirianni/random-images/blob/48613c1ff30ef90b5c4ca2a5eed8f1965d343166/zero-dependency-journey/custom-logger-example.png)

Debug logs have the whole log message coloured to facilitate location among other possible outputs in the terminal. When using the debug log with files, it will not be tracked by version control due to the .gitignore file.

# License

This project is licensed under the MIT License. See the LICENSE file for details.
