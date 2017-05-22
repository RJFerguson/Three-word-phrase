$(document).ready(function(){
  searchGiphy()
})



function searchGiphy(){
  $("form#giphy-search").on("submit", function(event){
    var num = 0 
    var objectArray = []
    event.preventDefault()
    var searching = $("#searching").val().split(' ')
      searchArray = searching.map(function(element){
        return `http://api.giphy.com/v1/gifs/search?q=${element}&api_key=dc6zaTOxFJmzC`
      })

  
      searchArray.forEach(function(element){
        $.ajax({
          url: element,
          async: false,
          success: function(data){ 
          objectArray.push(data.data)
         }})
      })
      renderGiphy(objectArray)
    }) 
  }


function renderGiphy(objectArray){
console.log(objectArray)
var num0 = 0 
var num1 = 0 
var num2 = 0 
  
  $(`#images0`).html(`<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/${objectArray[0][num0].id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`)

  $(`#images1`).html(`<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/${objectArray[1][num1].id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`)

  $(`#images2`).html(`<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/${objectArray[2][num2].id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`)


  $("input#shuffle0").on('click',(function(event){
    num0++
    $(`#images0`).html(`<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/${objectArray[0][num0].id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`)
  }))

  $("input#shuffle1").on('click',(function(event){
    num1++
    $(`#images1`).html(`<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/${objectArray[1][num1].id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`)
  }))

  $("input#shuffle2").on('click',(function(event){
    num2++
    $(`#images2`).html(`<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/${objectArray[2][num2].id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"  allowFullScreen></iframe></div>`)
  })) 
}


$( "#hideSearch" ).click(function(){
  $("#images").hide("slow");
});

$( "#showSearch" ).click(function(){
  $("#images").show("slow");
});

$( "#guess" ).submit(function(event){
  event.preventDefault()
  if ($("input#guess").val().toLowerCase() === $("input#searching").val().toLowerCase()){
    alert("You were right")
  }
  else{
    alert("You were rong")
  }
});

