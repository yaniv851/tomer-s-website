const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const sanityClient = require('@sanity/client');
const uuid = require('uuid');

const client = sanityClient({
  projectId: "au78j9xw",
  dataset: "production", 
  apiVersion: '2021-08-31', 
  useCdn: true,
});

app.get('/api/data', async (req, res) => {
  const titles = [];

  fs.createReadStream('CMS_Feed.csv')
    .pipe(csv({}))
    .on('data', (data) => {
      // Generate a unique ID for each data object
      const _id = uuid.v4();
      titles.push({ _id, title: data.כותרת });
    })
    .on('end', async () => {
      // Store the titles in Sanity one at a time
      for (const title of titles) {
        if (typeof title.title === 'string') {
          try {
            const doc = {
              _type: 'product',
              ...title
            };
            await client.create(doc);
            console.log(`Product with ID ${title._id} has been published.`);
          } catch (error) {
            console.error(`Failed to store data in Sanity:`, error);
          }
        }
      }
      res.json(titles);
      console.log(titles);
    });
});
