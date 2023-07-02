# About the project

The purpose of this project is to provide a simple logging utility with basic features for Node.js projects. The Logger class allows you to log messages to either the console or a file, with additional metadata such as date, process ID, and hostname.

# Usage

Here is an example of how to use the Logger class:

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

If you choose to log to a file, you need to provide a path for the log file when calling the log methods that write to a file.

# Output

By default, the log messages are printed in different colors based on the log level. For example, error messages are printed in red. Here are some examples of the log messages:

Informational message:
[2023-07-02T10:30:00.000Z][1234][at localhost][info]: This is an informational message

Error message:
[2023-07-02T10:30:00.000Z][1234][at localhost][error]: An error occurred

Warning message:
[2023-07-02T10:30:00.000Z][1234][at localhost][warn]: This is a warning

Debug message:
[2023-07-02T10:30:00.000Z][1234][at localhost][debug]: This is a debug message

You can also log additional details by passing an object as the second argument to the log methods.

# License

This project is licensed under the MIT License. See the LICENSE file for details.
