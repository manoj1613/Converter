function storeData(key, data){
    localStorage.setItem(key, data);
}

function getStoredData(key){
    return localStorage.getItem(key);
}

function removeStoredData(key){
    return localStorage.removeItem(key);
}

$(function(){
    $("#txtData").keyup(function(){
        var data = $("#txtData").val();
        var dataLen = 0;
        var whiteSpaceLen = 0;

        if(data.length != 0){
            dataLen = data.length
            whiteSpaceLen = data.split(" ").length-1; //data.match(/([\s]+)/g).length;
        }

        $('#spTextLen').html(dataLen);
        $('#spTextWhiteSpaces').html(whiteSpaceLen)
    })

    $("#txtReplaced").keyup(function(){
        var data = $("#txtReplaced").val();
        var dataLen = 0;
        var whiteSpaceLen = 0;

        if(data.length != 0){
            dataLen = data.length
            whiteSpaceLen = data.split(" ").length-1; //data.match(/([\s]+)/g).length;
        }

        $('#spReplacedTextLen').html(dataLen);
        $('#spReplacedTextWhiteSpaces').html(whiteSpaceLen)
    })
    
    var tmpData;

    $("#chkTextHighlight").click(function(){
        var isChecked = $('#chkTextHighlight').is(":checked");
        var data = $("#txtData").val();
            
        var dataLen = 0;
        var whiteSpaceLen = 0;
        var replacedText;

        if(isChecked)
            replacedText = data.replace(/ /g,'☺');            
        else
            replacedText = data.replace(/☺/g,' ');
        
        $("#txtData").val(replacedText);
        
        data = $("#txtData").val();
        dataLen = data.length
        whiteSpaceLen = data.split(" ").length-1;

        $('#spTextLen').html(dataLen);
        $('#spTextWhiteSpaces').html(whiteSpaceLen)
    })

    $("#chkReplacedTextHighlight").click(function(){
        var isChecked = $('#chkReplacedTextHighlight').is(":checked");
        var data = $("#txtReplaced").val();
            
        var dataLen = 0;
        var whiteSpaceLen = 0;
        var replacedText;

        if(isChecked)
            replacedText = data.replace(/ /g,'☺');            
        else
            replacedText = data.replace(/☺/g,' ');
        
        $("#txtReplaced").val(replacedText);
        
        data = $("#txtReplaced").val();
        dataLen = data.length
        whiteSpaceLen = data.split(" ").length-1;

        $('#spReplacedTextLen').html(dataLen);
        $('#spReplacedTextWhiteSpaces').html(whiteSpaceLen)
    })
    
    $("#btnReplace").click(function(){
        var data = $("#txtData").val();
        var textToReplace = $("#txtReplaceText").val();
        var textToReplaceWith = $("#txtReplaceTextWith").val();
        var match = new RegExp(textToReplace, "g"); 
        
        var replacedText = data.replace(match,textToReplaceWith);
        
        $("#txtReplaced").val(replacedText);
        
        data = $("#txtReplaced").val();
        dataLen = data.length
        whiteSpaceLen = data.split(" ").length-1;

        $('#spReplacedTextLen').html(dataLen);
        $('#spReplacedTextWhiteSpaces').html(whiteSpaceLen)

    });

    $("#lnkTextReplace").click(function(){
        $(".nav-item").removeClass('active');
        
        removeStoredData("link");
        storeData("link", "TR");
    });

    $("#lnkConverter").click(function(){
        $(".nav-item").removeClass('active');
        
        removeStoredData("link");
        storeData("link", "C");
    });
    
});