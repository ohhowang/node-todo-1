const { db } = require("./db");

module.exports.add = async (taskName) => {
  let list = await db.read();
  list = [...list, { title: taskName }];
  db.write(list);
};
