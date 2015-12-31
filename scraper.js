/*jshint node: true*/
'use strict';

var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://coeapps.eugene-or.gov/EPDDispatchLog/";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
        var logs = [];
        $('#calls > tbody > tr').map(function() {
            var newLog = {};
            var tds = $(this).find('td');
            newLog.callTime = tds.eq(1).text();
            newLog.dispatchTime = tds.eq(2).text();
            newLog.incidentDescription = tds.eq(3).text();
            newLog.officers = tds.eq(4).text();
            newLog.disposition = tds.eq(5).text();
            newLog.eventNumber = tds.eq(6).text();
            newLog.location = tds.eq(7).text();
            newLog.priority = tds.eq(8).text();

            logs.push(newLog);
        });
        console.log(logs);

    } else {
        console.log(error);
    }
});
