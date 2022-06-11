console.log("hello world");



// function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	console.log('form submit');
// }


// let form = document.querySelector('#contact');

// form.addEventListener('submit', handleSubmit);

const form = document.getElementById('contact');

function myFunction() {
  if (form.checkValidity()) {
    alert("This form has been submitted!");
  }
}



let image = document.getElementById("src");

image.addEventListener('mouseover', function(){
  console.log("Hello whoever")
})