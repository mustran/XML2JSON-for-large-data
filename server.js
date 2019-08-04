const xml2js = require('xml2js');
const fs = require('fs')

const parser = new xml2js.Parser();

// read the XML file
fs.readFile(__dirname + '/dblp.xml', function(err, data){
    parser.parseString(data, function(err, result){
        //convert a JavaScript object to JSON
        result = JSON.stringify(result);
        //write to the databaseJson.json in the JSON format
        fs.writeFile(__dirname + '/databaseJson.json', result, function(err){
            if(err){
                console.log("ERROR");
            }
            console.log("The file was saved!");
        }) 
    })
})

