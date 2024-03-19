var btnSubmith = document.querySelector(".btn-submith");

btnSubmith.addEventListener("click", function() {
    let myCourse = document.forms["myCourse"];
    let menu = [myCourse.departementCourse, myCourse.gender, myCourse.studyShift];
    
    menu[0].required = true;
    menu[1].required = true;
    menu[2].required = true;
    
});