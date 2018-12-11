var b = document.getElementsByTagName('b');

while(b.length) {
    var parent = b[ 0 ].parentNode;
    while( b[ 0 ].firstChild ) {
        parent.insertBefore(  b[ 0 ].firstChild, b[ 0 ] );
    }
     parent.removeChild( b[ 0 ] );
}
