/*
 * Evan Blain
 * Spring 2017
 * Midterm
 */
function validation() {
	// TURN OFF ERRORS
	for (i = 1; i <= 10; i++) {
		var myErr = document.getElementById("err" + i);
		myErr.innerHTML = "";
	}
	document.getElementById("output").innerHTML = "";
	// PICK VALUES 
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var certifications = document.getElementById("certifications").value;
	var title = document.getElementById("title").value;
	var department = document.getElementById("department").value;
	var phone_number = document.getElementById("phone_number").value;
	// CHECK FIRST NAME
	if (first_name == "") {
		valid = false;
		document.getElementById("err1").innerHTML = "ERROR!";
	}
	// CHECK LAST NAME
	if (last_name == "") {
		valid = false;
		document.getElementById("err2").innerHTML = "ERROR!";
	}
	// CHECK TITLE 
	if (title == "") {
		valid = false;
		document.getElementById("err4").innerHTML = "ERROR!";
	}
	// CHECK DEPARTMENT
	if (department == "") {
		valid = false;
		document.getElementById("err5").innerHTML = "ERROR!";
	}
	// CHECK EMAIL ADDRESS
	if (email == "") {
		valid = false;
		document.getElementById("err7").innerHTML = "ERROR!";
	}
	if (valid) {
		// ASSIGN OUTPUT
		document.getElementById("output").innerHTML = myOut;
	} else {
		// REMOVE OUTPUT
		document.getElementById("output").innerHTML = "";
	}
}
// LOGIN TO APPLICATION
function login() {
	// RESET ERRORS
	var myOut = document.getElementById("output");
	myOut.innerHTML = "";
	// CREDENTIAL ARRAYS 
	var user = ["admin1", "admin2", "admin3", "admin4"];
	var pass = ["pass1", "pass2", "pass3", "pass4"];
	var amt = ["200.00", "300.00", "400.00", "500.00"]
		// FORM VALUES	
	var aUser = document.getElementById("user_name").value;
	var aPass = document.getElementById("password").value;
	if (aUser === "" || aPass === "") {
		myOut.innerHTML = "Username/Password cannot be blank";
		if (aUser === "") {
			U.$("user_name").focus();
		} else {
			U.$("password").focus();
		}
	} else {
		// DO YOU HAVE A FLAG?
		var valid = false;
		for (i = 0; i < user.length; i++) {
			if (user[i] == aUser && pass[i] == aPass) {
				valid = true;
				U.$("name").value = user[i];
				U.$("amount").value = amt[i];
				// window.location = "directory.htm";
				window.open("popup.htm", "", "width=300,height=300");
				break;
			}
		}
		// IF NOT GOOD 
		if (!valid) {
			myOut.innerHTML = "Incorrect Username/Password";
		}
	}
}
// RESET THE FORM
function reset() {
	// TURN OFF ERRORS
	for (i = 1; i <= 10; i++) {
		document.getElementById("err" + i).innerHTML = "";
	}
	document.getElementById("output").innerHTML = "";
	// RESET INPUT BOXES
	U.$("Faculty").selectedIndex = 0;
	U.$("Staff").selectedIndex = 0;
	U.$("Doctorate").selectedIndex = 0;
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
	var loginPage = window.opener;
	var name = loginPage.window.U.$("name").value;
	var amount = loginPage.window.U.$("amount").value;
	U.$("user_name").innerHTML = name;
	U.$("amount_info").innerHTML = amount;
}

// GET DATA FOR POPUP
function getData() {
	var loginPage = window.opener;
	var name = loginPage.window.U.$("name").value;
	var amount = loginPage.window.U.$("amount").value;

	U.$("user_name").innerHTML = name;
	U.$("amount_info").innerHTML = amount;
	
	window.setInterval(function() {
		var d = new Date();
	    U.$("current_time").innerHTML = d.toTimeString();
	}, 1000);
	
}
	
	// ADD CLICK EVENT - DISPLAY
	var display_button = document.getElementById("display_button");
	if (display_button !== null) {
		display_button.onclick = validation;
	}
	// ADD ERROR CLASS TO SPAN
	for (i = 1; i <= 10; i++) {
		var myErr = document.getElementById("err" + i);
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
	// FILL THE POPUP
	if (U.$("display")) {
		getData();
	}
	U.addEvent(U.$("Faculty", "Staff"), "click", function() {
		window.location = "directory.htm";
	});
	U.addEvent(U.$("myPrint"), "click", function() {
		window.print();
	});
	U.addEvent(U.$("myClose"), "click", function() {
		window.close();
	});
}
window.onload = init;