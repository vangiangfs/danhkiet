<?php

    class sms_service
    {
        var $service_url = "";
        var $username = "";
        var $password = "";
        var $brandname = "";
        var $error;
        var $message;
        var $language;


        function __construct($params = array())
        {
            if (count($params) > 0) {
                $this->initialize($params);
            }
        }

        function initialize($params = array())
        {
            if (count($params) > 0) {
                foreach ($params as $key => $value) {
                    if (isset($this->$key))
                        $this->$key = $value;
                }
            }
        }

        /**
         * sms_service::sendSMS()
         * @param String $mobile_number
         * @param String $message_body
         * @return bool
         */

        function send($mobile_number = "", $message_body = "")
        {
            $mobile_number = str_replace("+", "", $mobile_number);

            $dom     = new DOMDocument("1.0", "utf-8");
            $request = $dom->createElement("request");
            $Src     = $dom->createElement("Src", $this->brandname);
            $request->appendChild($Src);
            $Des = $dom->createElement("Des", $mobile_number);
            $request->appendChild($Des);
            $Message = $dom->createElement("Message", htmlentities($message_body));
            $request->appendChild($Message);
            $AppName = $dom->createElement("AppName", "LCS.Client");
            $request->appendChild($AppName);
            $Username = $dom->createElement("UserName", $this->username);
            $request->appendChild($Username);
            $Password = $dom->createElement("Password", $this->password);
            $request->appendChild($Password);
            $dom->appendChild($request);
            $params['request'] = base64_encode($dom->saveXML());
            $ch                = curl_init();
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, $this->service_url);
            $reply = curl_exec($ch);
            curl_close($ch);
            $dom = new DOMDocument();
            if (@$dom->loadXML($reply) != false) {
                $nodes          = $dom->getElementsByTagName("src");
                $rs_src         = $nodes->item(0)->nodeValue;
                $nodes          = $dom->getElementsByTagName("des");
                $rs_des         = $nodes->item(0)->nodeValue;
                $nodes          = $dom->getElementsByTagName("status");
                $rs_status      = $nodes->item(0)->nodeValue;
                $nodes          = $dom->getElementsByTagName("message");
                $rs_message     = $nodes->item(0)->nodeValue;
                $nodes          = $dom->getElementsByTagName("transactionId");
                $rs_transaction = $nodes->item(0)->nodeValue;
                if ($rs_status == 1) {
                    return true;
                }
                $this->error   = $rs_status;
                $this->message = $rs_message;
                return false;
            } else {
                $this->message = "Unknow";
                return false;
            }
        }

        function display_error()
        {
            return $this->message;
        }
    }