let lecturePager = document.getElementById("blog-pager");
var LectureNavButton = "";
let currentLectureTitle = document.querySelector(".current-lecture-title");
if ("" != localStorage.getItem("selectedLecture"))
    for (let e = 0; e < curriculum.length; e++)
        if (curriculum[e].title == localStorage.getItem("selectedLecture")) {
            var currentLectureLink = curriculum[e].link;
            if (document.title = curriculum[e].title, void 0 !== curriculum[e].title && (currentLectureTitle.innerHTML = curriculum[e].title`), void 0 !== curriculum[e - 1]) {
                LectureNavButton += `<span id="blog-pager-newer-link"><a class="blog-pager-newer-link" href="${watchPage}?lecture=${Math.floor(1e7*Math.random())}" id="Blog1_blog-pager-newer-link">&lt; Prev</a></span>`, lecturePager.innerHTML = LectureNavButton;
                var prevLecture = curriculum[e - 1].title
            }
            if (null != curriculum[e + 1]) {
                LectureNavButton += `<span id="blog-pager-older-link"><a class="blog-pager-older-link" href="${watchPage}?lecture=${Math.floor(1e7*Math.random())}" id="Blog1_blog-pager-older-link">Next &gt;</a></span>`, lecturePager.innerHTML = LectureNavButton;
                var nextLecture = curriculum[e + 1].title
            }
        }
document.querySelector("#play source").setAttribute("src", currentLectureLink);
let prevButton = document.querySelector("#blog-pager-newer-link"),
    nextButton = document.querySelector("#blog-pager-older-link");
null !== prevButton && prevButton.addEventListener("click", function() {
    localStorage.setItem("selectedLecture", prevLecture)
}), null !== nextButton && nextButton.addEventListener("click", function() {
    localStorage.setItem("selectedLecture", nextLecture)
});
