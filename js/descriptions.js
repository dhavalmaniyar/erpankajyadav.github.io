var desBtns = document.getElementsByClassName("description-btn");
var descriptions = document.getElementsByClassName("description"); 


desBtns[0].setAttribute("data-toggle", "modal");
desBtns[0].addEventListener("click", function(){ 
	var modalDiv = document.getElementById("modal-description");
	var titleEl = document.getElementById("modal-title"); 
	titleEl.innerHTML = "Linux's GTK Print Dialog";
	
	var header1 = document.createElement("h4");
	header1.innerHTML="Task";
		
	var p1 = document.createElement("p"); 
	p1.innerHTML = "During my Google Summer of Code Project with the Linux Foundation, I was responsible for adding support for printing attributes for printers that do not have postscript printer description files.";
	
	var header2 = document.createElement("h4");
	header2.innerHTML="Objective";
	
	var p2 = document.createElement("ul"); 
	var l1 = document.createElement("li");
	l1.innerHTML = "create a backend for the GTK print dialog (the most used print dialog for desktop applications under Linux) which recognizes such print queues and polls the printer's capability list directly from the printer via IPP";
	p2.appendChild(l1);
	
	var l2 = document.createElement("li");
	l2.innerHTML = "set up the option panel of the dialog based on the found IPP options and choices and when printing";
	p2.appendChild(l2);
	
	var l3 = document.createElement("li");
	l3.innerHTML = "send the job along with the user's settings and also static capabilities (like unprintable margins).";
	p2.appendChild(l3);
	
	var header3 = document.createElement("h4");
	header3.innerHTML="Impact";
	
	var p3 = document.createElement("p"); 
	p3.innerHTML = "The reason the work I did is important because the world of printing is changing. Until recently, the way we access printers is through CUPS, the Common Unix Printing System, a system  first introduced by Mike Sweet in 2000. This system allows printers and computers to communicate through postscript printer description files and printer model specific drivers. The problem with this, especially in mobile devices, is these files and drivers can occupy megabytes of memory space in computers. Today, in 2016, we use new technology, Internet Printing Protocol (IPP) Everywhere Printing, to avoid this unnecessary storage. IPP Everywhere allows printers to supply all its respective capabilities by itself by understanding a small set of page descriptor languages (PDLs). By creating this backend for the Gimp Tool Kit (GTK) and adding support for these printing attributes, I am helping further the transition from CUPS printing to IPP Everywhere printing within the most used print dialog for desktop applications under Linux.";
	
	var header4 = document.createElement("h4");
	header4.innerHTML="Difficulties";
	
	var list = document.createElement("ul");
	
	var list1 = document.createElement("li");
	list1.innerHTML="One of the biggest difficulties I had was limited prior experience working with printers and very limited knowledge about printers in general. Luckily, with the help of my mentors, Till Kamppeter and Marek Kasik, along with a lot of reading, I was able to learn a lot about printers and how they work.";
	list.appendChild(list1);
	
	var list2 = document.createElement("li");
	list2.innerHTML="Setting up my environment also proved to be a challenge having never dealt with GTK or printers.";
	list.appendChild(list2);
	
	var list3 = document.createElement("li");
	list3.innerHTML="Another difficulty I ran into was testing. In order to test my code, I needed to install a virtual machine within my local machine to create a virtual printer. Once installed, I could then recompile and reinstall my edited GTK code to interact with the newly updated print dialog. Working within two environments proved to be a bit messy and confusing at times.";
	list.appendChild(list3);
	
	var list4 = document.createElement("li");
	list4.innerHTML="Finally, because my task was very specific, it was hard to find reading material online to answer many of the questions I had. This is where both Till and Marek came in handy!";
	list.appendChild(list4);
	
	var header5 = document.createElement("h4");
	header5.innerHTML="Tools";
	
	var toolList = document.createElement("ul");
	var toolList1 = document.createElement("li");
	toolList1.innerHTML="C";
	toolList.appendChild(toolList1);
	
	var toolList2 = document.createElement("li");
	toolList2.innerHTML="GTK Library";
	toolList.appendChild(toolList2);
	
	var toolList3 = document.createElement("li");
	toolList3.innerHTML="Terminal";
	toolList.appendChild(toolList3);
	
	var toolList4 = document.createElement("li");
	toolList4.innerHTML="GTK3-Demo";
	toolList.appendChild(toolList4);
	
	var toolList5 = document.createElement("li");
	toolList5.innerHTML="Virtual Machine";
	toolList.appendChild(toolList5);
	
	var toolList6 = document.createElement("li");
	toolList6.innerHTML="Virtual Printer";
	toolList.appendChild(toolList6);
	
	var header6 =document.createElement("h4");
	header6.innerHTML="Next Steps";
	
	var p4 = document.createElement("p"); 
	p4.innerHTML = "Because there are many printing attributes, the next step for this project is simple: continue adding support for additional printing attributes in order to further transition from CUPS printing to IPP Everywhere printing.";	
	

	modalDiv.appendChild(header1);
	modalDiv.appendChild(p1);
	modalDiv.appendChild(header2);
	modalDiv.appendChild(p2);
	modalDiv.appendChild(header3);
	modalDiv.appendChild(p3);
	modalDiv.appendChild(header4);
	modalDiv.appendChild(list);
	modalDiv.appendChild(header5);
	modalDiv.appendChild(toolList);
	modalDiv.appendChild(header6);
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
