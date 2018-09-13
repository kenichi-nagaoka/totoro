const request = require('request');

exports.doGet = function doGet(req, res) {

    var headers = {
        'Content-Type':'application/json'
    }

    var options = {
        url: ' ',
        method: 'GET',
        headers: headers,
        json: true
    }

    request(options, function (error, response, body) {
    // 必要に応じてコールバック処理
    })

    res.status(200).send('Success');
};
