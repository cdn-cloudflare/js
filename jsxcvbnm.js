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

curriculumOutput += `<span class="lecture-title">${curriculum[i].title}</span></a> <span class="lecture-duration">(${curriculum[i].duration})</span></td><td class="tcdl"><a href="${curriculum[i].link}" target="_blank"><span class="lecture-download-button"><i class="fa fa-download" aria-hidden="true" style="color:#fff;"></i> <!--<span class="lecture-download">Download</span>--></span></a></td>
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

//Video Modals Generator

// let lectures = document.querySelectorAll(".lecture-item");
// let lectureLink = document.querySelectorAll(".tcdl a");
// let lectureTitle = document.querySelectorAll(".lecture-title");
// var modalsOutput = document.getElementById("videoModals");

// for(let i = 0; i < lectures.length; i++) {
//     var modals = "<div class='modal' id='ex" + (i + 1) + "'>";
//      modals += "<h3 class='lecture-title-modal'>" + lectureTitle[i].innerText + "</h3>";
//      modals += "<div id='play' style='max-width:1080px;margin:0 auto;'>"
//      modals += "<div style='position: relative;padding-bottom: 56.25%; height: 0; overflow: hidden;'>";
//      modals += "<video style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;' class='video-js vjs-default-skin vjs-big-play-centered' id='play-video' class='video-js' controls preload='auto' width='100%' height='720' data-setup='{ \"playbackRates\": [0.5, 1, 1.5, 2] }'>";
//      modals += "<source src='" + lectureLink[i] + "' type='video/mp4' />";
//      modals += "<p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to aweb browser that<a href='https://videojs.com/html5-video-support/' target='_blank'></a> </p>";
//      modals += "</video></div></div></div>";
// }

// modalsOutput.innerHTML += modals;
//  <a href="#ex${i+1}" rel="modal:open" class="lecture-popup"><span class="lecture-quick-play"><i class="fa fa-window-restore" aria-hidden="true"></i></span></a>
