function highlight_word(searchpara)
{
 removeTextHighlighting();	
 var text=document.getElementById("search_text").value;
 if(text)
 {
  var pattern=new RegExp("("+text+")", "g");
  var new_text=searchpara.replace(pattern, "<span class='highlight'>"+text+"</span>");
  document.getElementById("search_para").innerHTML=new_text;
 }
}


			function removeTextHighlighting(){
		var b = document.getElementsByClassName('highlight');

while(b.length) {
    var parent = b[ 0 ].parentNode;
    while( b[ 0 ].firstChild ) {
        parent.insertBefore(  b[ 0 ].firstChild, b[ 0 ] );
    }
     parent.removeChild( b[ 0 ] );
}
	
	}
