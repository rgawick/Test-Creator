let createBtn = document.getElementById("createBtn")
let viewResultsBtn = document.getElementById("viewResultsBtn")
let teacherCode = document.getElementById('teacherCode')

let currentJSUser = localStorage.getItem("vCurrentUser")
let currentUserID = currentJSUser
console.log(currentUserID)

teacherCode.innerHTML = `<p>Your Teacher Code is <strong><u>${currentUserID}</u></strong></p>`

createBtn.addEventListener('click',function(userID){
      testCreatorApp()
    })

function testCreatorApp(){
      document.location.href = "createtest.html"
}

viewResultsBtn.addEventListener('click',function(userID){
      viewResults()
    })

function viewResults(){
          document.location.href = "results.html"
}

let logOutButton = document.getElementById("logOutButton")

logOutButton.addEventListener('click', function () {
currentUserID = ""
  localStorage.setItem("vCurrentUser", currentUserID)
  document.location.href = "index.html"
})
