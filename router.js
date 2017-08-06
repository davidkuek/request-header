var express = require('express');
var router = express.Router();
var publicIp = require('public-ip');
var osLocale = require('os-locale');
var os = require('os');
var osName = require('os-name');


router.get('/',function(req,res){
	publicIp.v4().then(ip => {
		osLocale().then(locale => {
			
    
    res.json({"My ip address":ip,"Language":locale,"Operating System":osName()});
});
    
});
	
	

});


 
  

 

 

module.exports = router;