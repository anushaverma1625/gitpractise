const fs = require('fs');

fs.readFile("text.txt", "utf8", (err,data)); {
    console.log(err, data)
}