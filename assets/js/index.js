const apiUrl = `https://web-api.coinmarketcap.com/v1/tools/price-conversion?amount=100&convert_id=2781&id=1`;
fetch(apiUrl, {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
  },
  referrer: "https://coinmarketcap.com/",
  referrerPolicy: "origin",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "omit",
}).then(console.log);
