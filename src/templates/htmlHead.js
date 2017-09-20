// output the HTML Doc head
// 

const htmlHead = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
	  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0," />
	  <meta name="x-apple-disable-message-reformatting" />
	  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
	  <title>Google Play</title>
	  <style type="text/css">
	  * {
	    line-height: 100%
	  }

	  * {
	    -webkit-text-size-adjust: none
	  }

	  .ExternalClass ecx* {
	    line-height: 100%
	  }
	  </style>
	  <style type="text/css">
	  .body {
	    min-width: 100vw
	  }

	  td {
	    font-family: 'Roboto', Helvetica, Arial, Calibri !important
	  }

	  table {
	    border-collapse: collapse;
	    padding: 0;
	    margin-top: 0px
	  }

	  #outlook a {
	    padding: 0
	  }

	  img {
	    border: none;
	    display: block;
	    -ms-interpolation-mode: bicubic
	  }

	  img a {
	    border: none !important
	  }

	  div,
	  p,
	  a,
	  li,
	  td {
	    -webkit-text-size-adjust: none;
	    -moz-text-size-adjust: none;
	    -ms-text-size-adjust: none;
	    text-size-adjust: none
	  }

	  a:visited {
	    text-decoration: none!important
	  }

	  a {
	    text-decoration: none;
	    text-underline: none !important
	  }

	  @media screen and (max-width:600px) and (max-device-width: 600px) {
	    .heightAuto,
	    .heightOutlook {
	      height: auto !important
	    }
	    .applelink a {
	      color: #666;
	      text-decoration: none
	    }
	    .center {
	      text-align: center
	    }
	  }
	  </style>
	  <style type="text/css">
	  body {
	    margin: 0 !important
	  }

	  div[style*="margin: 16px 0"] {
	    margin: 0 !important
	  }

	  div {
	    margin: 16px 0!important
	  }
	  </style>
	  <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
	  <!--[if gte mso 15]><style type="text/css">.heightOutlook{height:455px!important}.outlookheight20{height:20px !important}</style><![endif]-->
	  <!--[if gte mso 16]><style type="text/css">.heightOutlook{height:438px!important}</style><![endif]-->
	</head>
	<body class="body" style="background-color:#ecedee; min-width:100%; width: 100%; padding:0; margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased;">
	  <center style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;width:100%;">
	    <div style="max-width:820px;" width="100%" align="center">
	      <!--[if (gte mso 9)|(IE)]><table width="820" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"> <![endif]-->

`

module.exports = htmlHead;