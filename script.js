console.log('sourced');
$('document').ready(function(){
  console.log('in docready');

var piJsonUrl=  'http:devjana.net/pi/pi_students.json';
var studentsArray=[];

var displayStudents = function () {
  console.log('in displayStudents');
  console.log('in local array',studentsArray);
  $('#outputDiv p').textContent="";
  for (var i = 0; i < studentsArray.length; i++) {
    var newHeader= document.createElement('h2');
    var newParagraph=document.createElement('p')

    newHeader.textContent= studentsArray[i].first_name+' '+studentsArray[i].last_name;
    newParagraph.textContent= studentsArray[i].info;

    $('#outputDiv').append(newHeader);
    $('#outputDiv').append(newParagraph);

  }//for loop


};//displayStudents



var getStudents=function(){
  console.log('in getStudents');
  $.ajax({
  url:piJsonUrl,
  dataType:'JSON',
  success: function(data){
      console.log('in success');
      // console.log(data);
      for (var i = 0; i < data.students.length; i++) {
          // console.log(data.students[i]);
          studentsArray.push(data.students[i]);
          }//for loop
          displayStudents();

        }//function
      })//ajax
    };//getStudents

getStudents();









});//docready
