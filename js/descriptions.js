var desBtns = document.getElementsByClassName("description-btn");
var descriptions = document.getElementsByClassName("description"); 


desBtns[0].setAttribute("data-toggle", "modal");
desBtns[0].addEventListener("click", function(){ 
	var modalDiv = document.getElementById("modal-description");
	var titleEl = document.getElementById("modal-title"); 
	titleEl.innerHTML = "First project title";
	
	var p1 = document.createElement("p"); 
	p1.innerHTML = "Paragraph 1";
	
	var p2 = document.createElement("p"); 
	p2.innerHTML = "Paragraph 2"; 
	
	var p3 = document.createElement("p"); 
	p3.innerHTML = "Paragraph 3";
	
	var p4 = document.createElement("p"); 
	p4.innerHTML = "Paragraph 4"; 
	
	modalDiv.appendChild(p1);
	modalDiv.appendChild(p2);
	modalDiv.appendChild(p3);
	modalDiv.appendChild(p4);
});
	
desBtns[1].setAttribute("data-toggle", "modal");
desBtns[1].addEventListener("click", function(){ 
	var modalDiv = document.getElementById("modal-description");
	var titleEl = document.getElementById("modal-title"); 
	titleEl.innerHTML = "Second project title";
	
	var p1 = document.createElement("p"); 
	p1.innerHTML = "Paragraph 1";
	
	var p2 = document.createElement("p"); 
	p2.innerHTML = "Paragraph 2"; 
	
	var p3 = document.createElement("p"); 
	p3.innerHTML = "Paragraph 3";
	
	var p4 = document.createElement("p"); 
	p4.innerHTML = "Paragraph 4"; 
	
	modalDiv.appendChild(p1);
	modalDiv.appendChild(p2);
	modalDiv.appendChild(p3);
	modalDiv.appendChild(p4);
});


//START OF A SECTION
desBtns[2].setAttribute("data-toggle", "modal");
desBtns[2].addEventListener("click", function(){ 
	var modalDiv = document.getElementById("modal-description");
	var titleEl = document.getElementById("modal-title"); 
	titleEl.innerHTML = "Third project title";
	
	var p1 = document.createElement("p"); 
	p1.innerHTML = "Paragraph 1";
	
	var p2 = document.createElement("p"); 
	p2.innerHTML = "Paragraph 2"; 
	
	var p3 = document.createElement("p"); 
	p3.innerHTML = "Paragraph 3";
	
	var p4 = document.createElement("p"); 
	p4.innerHTML = "Paragraph 4"; 
	
	modalDiv.appendChild(p1);
	modalDiv.appendChild(p2);
	modalDiv.appendChild(p3);
	modalDiv.appendChild(p4);
});//END OF A SECTION

//TO ADD MORE PROJECTS -- COPY & PASTE A SECTION && INCREMENT INDEX OF desBtns ACCORDINGLY