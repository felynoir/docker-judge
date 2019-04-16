const file = process.argv[2];
const fs = require("fs");
var content;
// First I want to read the file
fs.readFile("./" + file, function read(err, data) {
  if (err) {
    console.log("ERROR: ", err);
    process.exit();
  }
  content = JSON.parse(data);
  content = content[0];
  const start = new Date(content.State.StartedAt);
  const finish = new Date(content.State.FinishedAt);
  const create = new Date(content.Created);
  console.log("create " + create);
  console.log("start " + start);
  console.log("finish " + finish);
  console.log("diff st - create " + (start - create) / 1000 + "s");
  console.log("diff fi - st " + (finish - start) / 1000 + "s");
});
