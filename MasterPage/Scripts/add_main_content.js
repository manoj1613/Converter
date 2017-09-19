function add_main_content()
{
  if(document.getElementById)
  {
    var main_content = document.getElementById('containerData');

    if(main_content)
    {
        var data = getStoredData("link");
        var fileName = 'converter_contents.txt';

        if(data == "TR"){
            $("#lnkTextReplace").parent().addClass("active");
            fileName = 'text_replace.txt';
        }else if(data == "C"){
            $("#lnkConverter").parent().addClass("active");
            fileName = 'converter_contents.txt';
        }

        var main_contents = read_contents("HeaderFooterContents/"+ fileName);

        place_in_outerHTML(main_content, main_contents);      
    }
  }  
}