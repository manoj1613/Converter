

$(function(){
    function decodeURI(uri) {    
        var uri_dec = decodeURIComponent(uri);
        
        return uri_dec;
    }

    function encodeURI(uri) {
        var uri_enc = encodeURIComponent(uri);
        
        return uri_enc;
    }

    function clearTextBox(id){
        $("#"+id).val("");
    }

    $("#btnEncode").click(function(){
        var decodedText = $("#txtEncode").val();
        var uri_enc = encodeURI(decodedText);
        //clearTextBox("txtEncode");
        $("#txtDecode").val(uri_enc);
    });

    $("#btnDecode").click(function(){
        var encodedText = $("#txtDecode").val();
        var uri_dec = decodeURI(encodedText);
        //clearTextBox("txtEncode");
        $("#txtEncode").val(uri_dec);
    });
});