const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  const logsDir = path.join(__dirname, "logs");
  const logFilePath = path.join(logsDir, "logfile.txt");

  try {
    if (!fs.existsSync(logsDir)) {
      await fsPromises.mkdir(logsDir);
    }
    await fsPromises.appendFile(logFilePath, logItem);
  } catch (err) {
    console.error("An error occurred while writing to the logs:", err);
  }
};

module.exports = logEvents;
