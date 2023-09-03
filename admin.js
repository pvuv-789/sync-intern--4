
const coursesLink = document.querySelector('nav ul li:nth-child(1) a');
const studentsLink = document.querySelector('nav ul li:nth-child(2) a');
const teachersLink = document.querySelector('nav ul li:nth-child(3) a');

const coursesSection = document.getElementById('courses');
const studentsSection = document.getElementById('students');
const teachersSection = document.getElementById('teachers');


function showSection(sectionToShow) {
    coursesSection.style.display = 'none';
    studentsSection.style.display = 'none';
    teachersSection.style.display = 'none';

    sectionToShow.style.display = 'block';
}


showSection(coursesSection);


coursesLink.addEventListener('click', function (e) {
    e.preventDefault();
    showSection(coursesSection);
});

studentsLink.addEventListener('click', function (e) {
    e.preventDefault();
    showSection(studentsSection);
});

teachersLink.addEventListener('click', function (e) {
    e.preventDefault();
    showSection(teachersSection);
});
