var XMLHttpFactories = [
	function() 
  {
	  return ( new XMLHttpRequest ( ) );
  },
	function() 
  {
	  return ( new ActiveXObject ( "Msxml2.XMLHTTP" ) );
  },
	function() 
  {
	  return ( new ActiveXObject ( "Msxml3.XMLHTTP" ) );
  },
	function() 
  {
	  return ( new ActiveXObject ( "Microsoft.XMLHTTP" ) );
  }
];

// ********************************************** createXMLHTTPObject

function createXMLHTTPObject() 
{
  var xmlhttp = false;

  for(var i = 0;(i < XMLHttpFactories.length); i++) 
  {
    try
    {
      xmlhttp = XMLHttpFactories [ i ] ( );
    }
    catch(e) 
    {
      continue;
    }
    
    break;
  }

  return(xmlhttp);
}

// **************************************************** read_contents

function read_contents(url) 
{
  var request = createXMLHTTPObject();

  request.open('GET', url, false);
  request.setRequestHeader('Content-Type', 'text/html');
  request.send('');

  return(request.responseText);
}