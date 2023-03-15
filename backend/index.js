const express = require('express');
const fs = require('fs');
const app = express();
const cors = require("cors");
const { GoogleSpreadsheet } = require('google-spreadsheet');
const CREDENTIALS = JSON.parse(fs.readFileSync('./config/secret.json'));
const SHEET_ID = "1Cbc2cYaiACcPFyjkpN7LqFQN7l93guf4FOAE9-1IhvA";
const port = Process.env.PORT || 3001 ;

const getSheet = async () => {
    const doc = new GoogleSpreadsheet(SHEET_ID)
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows();

    return rows;
}





app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/data', async (req, res) => {
    const results = [];
    const existingTitles = new Set();
    const rows = await getSheet();



    for (let i = 0; i < rows.length; i++) {
        const data = rows[i];
        const title = data.כותרת;

        // so how many can you afford to pay? i will ask for $35 ok how much is it in shekels 10 you already paid on order....i mean 37 on your currency right?yes, send me how much is it in shekels(35$) may be 70-80. you can send as a tip on the order completation
        // if (existingTitles.has(title)) {
        //     // here you can match the duplicate otherwise all result
        //     console.log(`Product with title ${title} already in results, skipping`);
        // } else {
        //     existingTitles.add(title);
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
        }
    // }

    res.status(200).json({ results })
})



app.listen(port, () => {
    console.log('Server started on port 3001');
});
