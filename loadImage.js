var photo = [];
var loadFile = function(event) {
	   var image = document.getElementById('output');
	   image.src = URL.createObjectURL(event.target.files[0]);
        /*document.getElementById("demo").innerHTML=image.src;*/
        photo.push(image.src);
        document.getElementById("demo").innerHTML=photo;
};       
