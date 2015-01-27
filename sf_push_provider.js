var apn = require('apn');

var options = { 
            gateway : "gateway.sandbox.push.apple.com", 
                    cert: 'cert.pem',
                            key: 'key.pem'   
                                    };
    
var apnConnection = new apn.Connection(options);


var token = 'YOUR_DEVICE_TOKEN'
var myDevice = new apn.Device(token);

var note = new apn.Notification();
note.badge = 3;
note.alert = 'Push Testing';
note.payload = {'message': 'Hello!!'};

apnConnection.pushNotification(note, myDevice);
