
// var myRequest = new XMLHttpRequest();
//
// myRequest.open('GET', 'data.json');
// // 3. write a function that runs anytime the state of the AJAX request changes
// myRequest.onload = function() {
//   console.log(myRequest.responseText)
// }
// myRequest.send();


window.onload = function(){
  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){
    if (http.readyState === 4 && http.status === 200){
      masterData = JSON.parse(http.response);
    }
  };

  http.open("GET", "./data.json", true);

  http.send();

};

const searchInput = document.querySelector(".search-input")
const resultsDisplay = document.querySelector(".requests")

searchInput.addEventListener('input', function(){
  let searchText = searchInput.value;
  let resultList = getTopMatches(searchText, masterData);


  let htmlBuilder = "";

  if (resultList != null) {
    for (var result of resultList) {

      let htmlDefaultItem = `<div class="request-item">
    <a href="#">${result.title}</a>
  </div>`;
      htmlBuilder += htmlDefaultItem;
    }
  }

  resultsDisplay.innerHTML = htmlBuilder;
});
