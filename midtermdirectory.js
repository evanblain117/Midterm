/*
 * Evan Blain
 * Spring 2017
 * Midterm
 */
function validation() {
	// TURN OFF ERRORS
	for (i = 1; i <= 8; i++) {
		var myErr = U.$("err" + i);
		myErr.innerHTML = "";
	}
	document.getElementById("output").innerHTML = "";
	// PICK VALUES 
	var valid = true;
	var first_name = U.$("first_name").value;
	var last_name = U.$("last_name").value;
	var certifications = U.$("certifications").value;
	var title = U.$("title").value;
	var department = U.$("department").value;
	var phone_number = U.$("phone_number").value;
	// CHECK FIRST NAME
	if (first_name == "") {
		valid = false;
		U.$("err1").innerHTML = "ERROR!";
	}
	// CHECK LAST NAME
	if (last_name == "") {
		valid = false;
		U.$("err2").innerHTML = "ERROR!";
	}
	// CHECK TITLE 
	if (title == "") {
		valid = false;
		U.$("err4").innerHTML = "ERROR!";
	}
	// CHECK DEPARTMENT
	if (department == "") {
		valid = false;
		U.$("err5").innerHTML = "ERROR!";
	}
	// CHECK EMAIL ADDRESS
	if (email == "") {
		valid = false;
		U.$("err7").innerHTML = "ERROR!";
	}
	if (valid) {
		// ASSIGN OUTPUT
		getData();
		U.$("directory_form").style.display = "none";
		U.$("display_container").style.display = "block";

	} else {
		// REMOVE OUTPUT
		U.$("output").innerHTML = "";
	}
}

// RESET THE FORM
function reset() {
	// TURN OFF ERRORS
	for (i = 1; i <= 8; i++) {
		U.$("err" + i).innerHTML = "";
	}
	U.$("output").innerHTML = "";
	// RESET INPUT BOXES
	U.$("Faculty").checked = false;
	U.$("Staff").checked = false;
	U.$("Doctorate").checked = false;
	U.$("first_name").value = "";
	U.$("last_name").value = "";
	U.$("certifications").value = "";
	U.$("title").value = "";
	U.$("department").selectedIndex = 0;
	U.$("phone_number").value = "";
	U.$("website").value = "";
	U.$("email").value = "";
}

// GET DATA FOR POPUP
function getData() {
	var first_name = U.$("first_name").value;
	var last_name = U.$("last_name").value;
	var certifications = U.$("certifications").value;
	var title = U.$("title").value;
	var department = U.$("department").value;
	var phone_number = U.$("phone_number").value;
	var website = U.$("website").value;
	var email = U.$("email").value;

	if (U.$("Doctorate").checked) {
		U.$("display_doctorate").innerHTML = "Dr. ";
	}
	U.$("display_first_name").innerHTML = first_name;
	U.$("display_last_name").innerHTML = last_name;
	U.$("display_certifications").innerHTML = certifications;
	U.$("display_title").innerHTML = title;
	U.$("display_department").innerHTML = department;
	U.$("display_email").innerHTML = phone_number;
	U.$("display_phone_number").innerHTML = website;
	U.$("display_website").innerHTML = email;
}
function init() {
	// ADD CLICK EVENT - DISPLAY
	var display_button = U.$("display_button");
	U.$("display_container").style.display = "none";
	if (display_button !== null) {
		display_button.onclick = validation;
	}
	// ADD ERROR CLASS TO SPAN
	for (i = 1; i <= 10; i++) {
		var myErr = U.$("err" + i);
		if (myErr !== null) {
			myErr.className = "error";
		}
	}
	//RESET THE FORM
	U.addEvent(U.$("reset_button"), "click", function() {
		var result = confirm("Are you sure?");
		if (result) {
			reset();
		}
	});
	//BACK TO FORM
	U.addEvent(U.$("back_button"), "click", function() {
		U.$("directory_form").style.display = "block";
		U.$("display_container").style.display = "none";
	});
	// FILL THE POPUP
	if (U.$("display_button") !== null) {
		if (display_button !== null) {
			display_button.onclick = validation;
		}
	}
}

window.onload = init;