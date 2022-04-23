const {promises: fs} = require("fs");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: "./u3c2score.csv",
    header: ["username","name","updated_at","url","id","score"].map((item) => ({id: item,title:item}))
})

async function main() {

    const file_data = await fs.readFile("u3c2score.json");
    const parsed_data = JSON.parse(file_data);

    try {
        // console.log(parsed_data.data.length)
        await csvWriter.writeRecords(parsed_data.data)

    } catch(e) {
        console.log(e)
    }

}

main();