var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.sendfile(process.cwd() + '/index.html');
});

app.get('/:date', function(req, res){
    var myVar = req.params.date;
    var theDate = new Date(myVar.toString());
    var unixDate = theDate.getTime();
    
    if(/[a-z]/.test(myVar) === false){
        var numDate = Number(myVar);
        var newDate = new Date(numDate);
        var natDate = newDate.toDateString();
        var nextDate = natDate.replace('Mon ', '').replace('Tue ', '').replace('Wed ', '').replace('Thur ', '').replace('Fri ', '').replace('Sat ', '').replace('Sun ', '');
        var monDate = nextDate.replace('Jan', 'January').replace('Feb', 'February').replace('Mar', 'March').replace('Apr', 'April').replace('Jun', 'June').replace('Jul', 'July').replace('Aug', 'August').replace('Sept', 'September').replace('Oct', 'October').replace('Nov', 'November').replace('Dec', 'December');
        var splDate = monDate.split(' ');
        var sendDate = splDate[0] + ' ' + splDate[1] + ', ' + splDate[2];
        res.send({'natural': sendDate, 'unix': numDate});
    }else if( !isNaN(theDate.valueOf()) ){
        var theVar = myVar.replace('Jan ', 'January ').replace('Feb ', 'February ').replace('Mar ', 'March ').replace('Apr ', 'April ').replace('Jun ', 'June ').replace('Jul ', 'July ').replace('Aug ', 'August ').replace('Sept ', 'September ').replace('Oct ', 'October ').replace('Nov ', 'November ').replace('Dec ', 'December ');
        res.send({'natural': theVar, 'unix': unixDate});
    }else{
        res.send({'natural': null, 'unix': null});
    }
    
    
    //if(theDate !== null && )
    //res.send({'natural': myVar, 'unix': unixDate});
    res.send(typeof myVar);
});

var myPort = Number(process.env.port || 8080);
app.listen(myPort, function(){
  console.log("Listening on port 8080...");
});