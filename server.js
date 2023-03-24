const express = require('express')
const app = express()
const port =2000;

 app.get('/', index);
 app.get('/patientRegistration', patientRegistration);
app.get('/adminlogin', adminLogin);
app.get('/doctorlogin', doctorLogin);
app.get('/patientlogin',patientLogin);
app.get('/adminhome', admin);
app.get('/doctorsHome', doctor);
app.get('/patientHome', patient);
app.get('/admin/addDoctors',AddDoctors);
app.get('/admin/addBloodStock',AddBloodStock);
app.get('/admin/operationDetails',AddOperationDetails);
app.get('/admin/viewDoctors',ViewDoctorsDetails);
app.get('/admin/viewPatients',ViewPatiensDetails);

app.get('/admin/viewBloodBankDetails',ViewBloodDetails);
app.get('/admin/viewoperationDetails',ViewOperationDetails);
app.get('/admin/ChangePassword',adminPassword);

app.get('/doctor/viewPatientsDetails',ViewPatiensData);
app.get('/doctor/viewprofile',ViewDoctorProfile);

app.get('/doctor/viewBloodDetails',viewBloodBank);
app.get('/doctor/viewoperationFeeDetails',ViewOperationFeeDetails);
app.get('/doctor/Changepassword',doctorPassword);

app.get('/patient/profile',PatientProfile);
app.get('/patient/viewBloodBank',ViewBloodBankDetails);
app.get('/patient/viewOperationFee',ViewOperationFee);
app.get('/patient/ChangePassword',patientPassword);

function index(req, res) {
	res.sendFile("./index.html",{root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./adminlogin.html",{root:__dirname});
}

function doctorLogin(req, res) {
	res.sendFile("./doctorlogin.html",{root:__dirname});
}

function patientLogin(req, res) {
	res.sendFile("./patientlogin.html",{root:__dirname});
}

function patientRegistration(req, res) {
	res.sendFile("./patientRegistration.html",{root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/adminhome.html",{root:__dirname});
}

function adminPassword(req, res) {
	res.sendFile("Admin/ChangePassword.html",{root:__dirname});
}

function AddDoctors(req, res) {
	res.sendFile("Admin/addDoctors.html",{root:__dirname});
}

function AddBloodStock(req, res) {
	res.sendFile("Admin/addBloodStock.html",{root:__dirname});
}

function AddOperationDetails(req, res) {
	res.sendFile("Admin/operationDetails.html",{root:__dirname});
}


function ViewDoctorsDetails(req, res) {
	res.sendFile("Admin/viewDoctors.html",{root:__dirname});
}

function ViewPatiensDetails(req, res) {
	res.sendFile("Admin/viewPatients.html",{root:__dirname});
}
function ViewBloodDetails(req, res) {
	res.sendFile("Admin/viewBloodBankDetails.html",{root:__dirname});
}

function ViewOperationDetails(req, res) {
	res.sendFile("Admin/viewoperationDetails.html",{root:__dirname});
}



function doctor(req, res) {
	res.sendFile("Doctor/doctorsHome.html",{root:__dirname});
}

function doctorPassword(req, res) {
	res.sendFile("Doctor/ChangePassword.html",{root:__dirname});
}
function ViewDoctorProfile(req, res) {
	res.sendFile("Doctor/viewprofile.html",{root:__dirname});
}

function ViewPatiensData(req, res) {
	res.sendFile("Doctor/viewPatientsDetails.html",{root:__dirname});
}
function viewBloodBank(req, res) {
	res.sendFile("Doctor/viewBloodDetails.html",{root:__dirname});
}

function ViewOperationFeeDetails(req, res) {
	res.sendFile("Doctor/viewoperationFeeDetails.html",{root:__dirname});
}


function patient(req, res) {
	res.sendFile("Patient/patientHome.html",{root:__dirname});
}


function patientPassword(req, res) {
	res.sendFile("Patient/ChangePassword.html",{root:__dirname});
}
function PatientProfile(req, res) {
	res.sendFile("Patient/profile.html",{root:__dirname});
}
function ViewBloodBankDetails(req, res) {
	res.sendFile("Patient/viewBloodBank.html",{root:__dirname});
}
function ViewOperationFee(req, res) {
	res.sendFile("Patient/viewOperationFee.html",{root:__dirname});
}


app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
