//Adding Lecture Rows to Curriculum Table Body

var curriculumSection = document.getElementById("curriculumSection");
var curriculumOutput = "";

// Extract data from Object

for(let i = 0; i < curriculum.length; i++) {

// Here 2 ifs because we need to get rid of 1st table without top margin.

if(curriculum[i].section != undefined) {
   if((i + 1) === 1) {
      curriculumOutput += `<h3 class="section-title-mt0">${curriculum[i].section}</h3>`;
   } else {
      curriculumOutput += `<h3 class="section-title">${curriculum[i].section}</h3>`;
     }
}  //ifs ends here

/////////////////////////////////////////////////////////////

curriculumOutput += `<tr>
<td><a href="${watchPage}?lecture=${Math.floor(Math.random() * 10000000)}" class="lecture-item" target="_blank">`;

// Here is if because later we can add other type of content by adding more statement may be switch (video, notes, coding excecise)

if(curriculum[i].type == "video") {
  curriculumOutput += `<i class="fa fa-play-circle" aria-hidden="true" class="tdic"></i> `;
}

curriculumOutput += `<span class="lecture-title">${curriculum[i].title}</span></a> <span class="lecture-duration">(${curriculum[i].duration})</span></td>
</tr>`;
}

curriculumSection.innerHTML = curriculumOutput;     //Add lecture rows

////////////////////////////////////////////////////////////

//VideoViewPage Builder

let courseTitle = document.querySelectorAll(".lecture-title");

for(let i = 0; i < courseTitle.length; i++) {
    courseTitle[i].addEventListener("click", function(){
    localStorage.setItem("selectedLecture", this.innerHTML);
    localStorage.setItem("selectedCourse", selectedCourse);
    });
}
