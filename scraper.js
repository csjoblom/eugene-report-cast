var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://coeapps.eugene-or.gov/EPDDispatchLog/";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
        
        var table = $('#calls > tbody > tr');

        table.each(function(i,row) {
            console.log(row.html());
        });
    } else {
        console.log(error);
    }
});
