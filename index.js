var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
var express = require('express')
var app = express()


var formidable = require('formidable');



function getClass(img, threshold = 0.6){
  var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: "lecUyyEtd2w1ubp4IHe70vohF3pa3JuWQ465cX8F98-o"
});

//var images_file= fs.createReadStream('./img/beer1' + ".jpg");
var images_file= fs.createReadStream(img);
var owners = ["me"];
//var threshold = 0.6;

var params = {
  images_file: images_file,
  owners: owners,
  threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
  if (err) { 
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2))
  }
});

}


app.use(express.static('frontend'));

var server = app.listen(8000, function () {
    
    var host = server.address().address
    var port = server.address().port
    

    console.log('Express app listening at http://%s:%s', host, port)

})