window.onload=function(){
  var header = document.getElementsByClassName('header');
  header[0].setAttribute('style','background-color: #f0f0f0;border-bottom: 1px solid #eee;');

  var header_search = document.getElementsByClassName('header-search-wrapper');
  header_search[0].setAttribute('style','background-color: #fff');

  var header_search_scope = document.getElementsByClassName('header-search-scope');
  header_search_scope[0].setAttribute('style','color: #000; border-right-color: #eee;');

  var header_search_input = document.getElementsByClassName('header-search-input');
  header_search_input[0].setAttribute('style','color: #000;');

  var header_nav_links = document.getElementsByClassName('header-nav-link');
  for(index in header_nav_links){
    var re = new RegExp("[0-9]+");
    if( re.test(index) ){
      header_nav_links[index].setAttribute('style','color: #000;');
    }
  }
}
