// using pipes
const fs = require("fs");
const { Transform } = require("stream");

// Transform stream: convert data to UPPERCASE
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

// Create streams
const readableStream = fs.createReadStream("data.txt", {
  highWaterMark: 8,
});

const writableStream = fs.createWriteStream("output.txt");

// PIPE FLOW
readableStream.pipe(upperCaseTransform).pipe(writableStream);

// 🔹 EVENTS ON READABLE STREAM
readableStream.on("data", (chunk) => {
  console.log("Readable chunk:", chunk.toString());
});

readableStream.on("end", () => {
  console.log("Readable stream ended");
});

readableStream.on("error", (err) => {
  console.error("Readable stream error:", err);
});

// 🔹 EVENTS ON TRANSFORM STREAM
upperCaseTransform.on("data", (chunk) => {
  console.log("Transformed chunk:", chunk.toString());
});

upperCaseTransform.on("error", (err) => {
  console.error("Transform stream error:", err);
});

// 🔹 EVENTS ON WRITABLE STREAM
writableStream.on("finish", () => {
  console.log("Writable stream finished writing");
});

writableStream.on("error", (err) => {
  console.error("Writable stream error:", err);
});
