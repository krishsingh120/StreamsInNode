const fs = require("fs");

const readableStream = fs.createReadStream("data.txt", {
  highWaterMark: 16,
  encoding: "utf8",
});

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("data", (chunk) => {
  console.log("New chunk:", chunk);

  const transformed = chunk.toUpperCase();
  writableStream.write(transformed);

  readableStream.pause();

  setTimeout(() => {
    readableStream.resume();
  }, 10);

});

readableStream.on("end", () => {
  console.log("File reading finished");
  writableStream.end();
});




