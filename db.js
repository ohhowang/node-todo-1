const fs = require("fs");
const os = require("os");
const path = require("path");
const homePath = process.env.HOME || os.homedir();
const dbPath = path.join(homePath, ".todo");

module.exports.db = {
  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, { flag: "a+" }, (err, data) => {
        if (err) reject(err);

        let list;
        try {
          list = JSON.parse(data);
        } catch (error) {
          list = [];
        }
        resolve(list);
      });
    });
  },
  write(list) {
    console.log("list: ", list);
    return new Promise((resolve, reject) => {
      fs.writeFile(dbPath, JSON.stringify(list), {}, (...args) => {
        console.log("args: ", args);
      });
    });
  },
};
