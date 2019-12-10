<?php
require_once("sms_service.php");

class SMSKivi{
    
    var $config = array(
        'service_url' => 'http://125.253.117.73:8000/smsservice',
        'username' => 'SMSKIVI',
        'password' => 'Kivi@123',
        'brandname' => 'TRIANH.Sol'
    );
    
    var $service;
    
    function __construct(){
        $this->service = new sms_service($this->config);
    }
    
    function sendSMS($phone, $sms){
        if ($this->service->send($phone, $sms)){
            return true;
        } else {
            return false;
        }
    }
}