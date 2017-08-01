window.onload=function(){
  var header = document.getElementsByClassName('header');
  header[0].setAttribute('style','background-color: #e5e5e5;border-bottom: 1px solid #eee;');

  var header_search = document.getElementsByClassName('header-search-wrapper');
  header_search[0].setAttribute('style','background-color: #fff');

  var header_search_scope = document.getElementsByClassName('header-search-scope');
  header_search_scope[0].setAttribute('style','color: #000; border-right-color: #eee;');

  var header_search_input = document.getElementsByClassName('header-search-input');
  header_search_input[0].setAttribute('style','color: #000;');

  var header_navlinks = document.getElementsByClassName('header-navlink');
  for(index in header_navlinks){
    var re = new RegExp("[0-9]+");
    if( re.test(index) ){
      header_navlinks[index].setAttribute('style','color: #3f3f3f;');
    }
  }
}
