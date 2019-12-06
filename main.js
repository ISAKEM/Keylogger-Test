var ip = '134.201.250.155'
var access_key = 'YOUR_ACCESS_KEY';

$.ajax({
    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        alert(json.location.capital);
        
    }
});