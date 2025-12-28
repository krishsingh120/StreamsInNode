# Streams in Node

### Topics to learn

---

- What is streams?
- Demo of streams.

---

- Streams are the collection of data - arrays/strings.
- Streams might not be available at once.
- Streams are a way to handle large data efficiently by processing it piece by piece (chunks) instead of loading everything into memory at once.
- Streams are a powerfull way to handle I/O operations efficiently.

## Why Streams exist (Very Important)

#### Without streams:
```js
const data = fs.readFileSync("bigfile.txt");
res.send(data);
```
- Loads full file into memory
- Slow for large files
- High RAM usage

#### With streams:
```js
fs.createReadStream("bigfile.txt").pipe(res);
```

- Low memory usage
- Faster
- Scales well

## Types of Streams:
1. Readable Stream - Used to read data in chunks.
2. Writable Stream - Used to write data somewhere.
3. Duplex Stream - Can read and write both.
4. Transform Stream (Most Useful) - Modify data while streaming.

#### What is .pipe()?
- Connects streams together.

```js
readable.pipe(writable);
```
- Example (File copy)

```js
fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
```





