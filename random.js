const cities = d3.csv("./cities.csv", data => data);

const tweets = d3.json("./tweets.json");

const dailyhours = d3.json("./hoursbyday.json");

d3.csv("cities.csv", data => console.log(data));

d3.json("tweets.json", data => console.log(data));

const newRamp = d3
  .scaleLinear()
  .domain([500000, 13000000])
  .range([0, 500]);

const colorRamp = d3
  .scaleLinear()
  .domain([500000, 13000000])
  .range(["blue", "red"]);

newRamp(1000000);
newRamp(9000000);
newRamp.invert(313);

const sampleArray = [423, 124, 66, 424, 58, 10, 900, 44, 1];
const range = [0, 1, 2, 3, 4];
const qScale = d3
  .scaleQuantile()
  .domain(sampleArray)
  .range(range);

console.log("sampleArray for qScale examples: ", sampleArray);
console.log("range for qScale: ", range);
console.log(
  "Range gives me the buckets, or bins, to stuff the values in the data into."
);

console.log("qScale for 50 is :", qScale(50));
console.log("qScale for 423 is :", qScale(423));
console.log("qScale for 10000 is :", qScale(10000));

const namedBins = ["tiny", "small", "medium", "large"];
console.log(
  "And now we'll map values to bins that have the following names: ",
  namedBins
);
const qScaleName = d3
  .scaleQuantile()
  .domain(sampleArray)
  .range(namedBins);
console.log(`qScaleName for 1 is ${qScaleName(1)}`);
console.log(`qScaleName for 68 is ${qScaleName(68)}`);
console.log(`qScaleName for 400 is ${qScaleName(400)}`);
console.log(`qScaleName for 680 is ${qScaleName(680)}`);
console.log(`qScaleName for 68000 is ${qScaleName(68000)}`);

// Nesting
d3.json("tweets.json", data => {
  const tweetData = data.tweets;
  const nestedTweets = d3
    .nest()
    .key(d => d.user)
    .entries(tweetData);
  console.log(
    `Nested Tweets, or grouping data by an attribute in a json file:`
  );
  console.log(nestedTweets);
});
