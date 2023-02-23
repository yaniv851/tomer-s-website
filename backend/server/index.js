const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const cors = require("cors");
const axios = require('axios');
const sanityClient = require("@sanity/client");

app.use(cors({ origin: 'http://localhost:3333' }));

const client = sanityClient({
  projectId: "s9nxkkv4",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
  token: "skiT4QtGqHEeu1D2ItJ3agHcFUUDlUEeLj3BnvFKgfc1MrrtIWfpw9kNpsKivCeWlug8NcpuwXgDFhmMI3V1TrRlt7JkG6NlvKIhousoC2eAmAIjqzJcL6LLm0Ad9x0x0fZEhO7HtaMxG0u1B0Z7ArEOTNMnB8xW15rPmT8PzzvVwr6yPeyl",
});

app.get('/api/data', async (req, res) => {
  const results = [];
  const existingTitles = new Set();


  axios.get('https://feed.valigara.com/461/9e90396b9e90/CMS_Feed.csv')
    .then(response => {
      const stream = require('stream');
      const csvStream = new stream.PassThrough();
      csvStream.end(response.data);

      csvStream
        .pipe(csv({}))
        .on('data', (data) => {
          const title = data.כותרת;
          if (existingTitles.has(title)) {
            console.log(`Product with title ${title} already in results, skipping`);
            return;
          }
          existingTitles.add(title);
          results.push({
            title: data.כותרת,
            body: data.תיאור,
            video: data["Product Videos(separated by ; )"],
            poster1: data["Product Image #1 Link"],
            poster2: data["Product Image #2 Link"],
            poster3: data["Product Image #3 Link"],
            poster4: data["Product Image #4 Link"],
            poster5: data["Product Image #5 Link"],
            poster6: data["Product Image #6 Link"],
            poster7: data["Product Image #7 Link"],
            poster8: data["Product Image #8 Link"],
            poster9: data["Product Image #9 Link"],
            poster10: data["Product Image #10 Link"],
            collection: data.קולקשיין,
            diamondType: data["סוג יהלום"],
            clean: data["ניקיון"],
            weight: data["משקל יהלומים כולל"],
            color: data.צבע,
            price: data.מחיר,
          });
        })
        .on('end', async () => {
          for (let i = 0; i < results.length; i++) {
            const { title, body, video, poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10, collection, diamondType, clean, weight, color, price } = results[i];
            const doc = {
              _type: "product",
              _key: title, // use the title as the key
              title: title,
              body: body,
              video: video,
              poster1: poster1,
              poster2: poster2,
              poster3: poster3,
              poster4: poster4,
              poster5: poster5,
              poster6: poster6,
              poster7: poster7,
              poster8: poster8,
              poster9: poster9,
              poster10: poster10,
              collection: collection,
              diamondType: diamondType,
              clean: clean,
              weight: weight,
              color: color,
              price: price
            };
          }
        });
    });
})



app.listen(3001, () => {
  console.log('Server started on port 3001');
});
