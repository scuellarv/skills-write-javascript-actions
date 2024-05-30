const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Chrome/4.0.222.5 Safari/532.2",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;
