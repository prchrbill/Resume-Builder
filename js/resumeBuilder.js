//welcome to my resume builder. You can replace my information with your own and build your own resume

//biography information

var bio = {
    "name": "William Conover",
    "role": "Project Manager",
    "contacts": {
        "mobile": "309-361-0050",
        "email": "prchrbill@gmail.com",
        "location": "Wyoming, Il, US",
        "twitter": "@prchrbill",
        "github" : "@prchrbill"
    },
    "welcomeMessage": "Thanks for stopping by!",
    "skills": ["Telco Outside Plant Design Engineering", "Project Management", "Advanced Computer", "Programming in HTML, Python, and Java", "Eyglass Fabrication"],
    "biopic": "images/mypic.jpg"
};

//work history

var work = {
    "jobs": [{
            "employer": "Princeville Canning Company",
            "location": "Princeville, IL, US",
            "title": "Sanitation Crew",
            "skills": ["Quality Control"],
            "dates": "1992-1993",
            "description": "Responsible for cleaning food processing machines after each night of production. Machines had to be cleaned to Health Department standards."
        },
        {
            "employer": "Lenscrafters",
            "location": "Peoria, IL, US",
            "title": "Lab Technician",
            "skills": ["Eyeglass Fabrication"],
            "dates": "1994",
            "description": "During this time I was a trainee and learned how to manufacture lenses to the desired prescription on the Surface side of the eyglass manufacturing lab."
        },
        {
            "employer": "Lenscrafters",
            "location": "Ft.Collins, CO, US",
            "title": "Lab Technician",
            "skills": ["Eyeglass Fabrication"],
            "dates": "1994-1995",
            "description": "Taking and opportunity to work full time and to be trained in more skills I relocated to Colorado where I continued in the same skills as in Peoria, IL but was trained to finish lenses to be fit into frames."
        },
        {
            "employer": "Walmart Optical",
            "location": "Sedalia, MO, US",
            "title": "Lab Technician",
            "skills": ["Eyeglass Fabrication", "Patient Pre-testing", "Contact Lens Dispensing"],
            "dates": "1995-1996",
            "description": "At this Walmart Optical I not only manufactured eyeglasses for customers using the skills I learned at Lenscrafters, I also trained to be an Optician. Duties included dispensing contact lenses, fitting and adjusting customer's frames, as well as pretesting them before they went in to see the doctor."
        },
        {
            "employer": "Lenscrafters",
            "location": "Springfield, IL, US",
            "title": "Assistant Lab Manger",
            "skills": ["Eyglass Fabrication", "Lensometer Certification", "Optician"],
            "dates": "1996-2000",
            "description": "Back to my home state and back to Lenscrafters. After being at this location I was promoted twice to become a manager. I became highly skilled at not only manufacturing eyeglasses, but I was Lensometer Certified, meaning I could do the final inspections before delivering glasses to the customer. I also spent time fitting and selling eyeglasses. I was great at this job."
        },
        {
            "employer": "AT&T",
            "location": "Springfield, IL, US",
            "title": "Assistant Drafter",
            "skills": ["Microstation", "Data Verification", "Records Verification"],
            "dates": "2000-2001",
            "description": "Opportuinty came in 2000 to get a job that related more to my computer savy side. Ameritech (now AT&T) had titles available to take their paper records and transfer them into an intelligent GUI cad system. The work was noding items of interest on copies of the paper records, recording the lengths, years, and cable data into a data base. That information was then imported into a customized autocad program made by Microstation."
        },
        {
            "employer": "AT&T",
            "location": "Peoria, IL, US",
            "title": "Outside Plant Design Engineer",
            "skills": ["Copper Design", "Fiber Design", "Electronics Equipment Design", "Drafting", "Project Management", "Microstation", "MS Office", "Training", "Practice Creation and Documentation"],
            "dates": "2001 - present",
            "description": "Because of my ability to master my role I was promoted to management as a Design Engineer. Put simply, I tell people where to place telephone facilities in the outside world by drawing lines on paper. It is actually much more complicated than that. I work in underground structure design, work with goverment entities to secure permits, meet with customers to determine phone needs and entrance requirments, as well as design, draft, issue, and Project Manage every project until it is completed."
        }
    ]
};

//project history
var projects = {
    "projects": [{
            "title": "Movie Trailer Website",
            "dates": "2017",
            "description": "Created a movie trailer website to display the trailers of my favorite movies using the Python programming language",
            "images": ["images/moviewebsite.jpg"]
        },
        {
            "title": "Skype for Business",
            "dates": "October 2016",
            "description": "Created a movie depicting the benefits and cost savings of using Skype for Buisiness instead of having Construction Managers and Design Engineers make field visits for incidents that can be cared for by simply using a smart phone, a laptop, and Skype for Business. This was presented before the Vice President of Construction and Engineering for all of the AT&T Midwest territory.",
            "images": ["images/skype.jpg"]
        }
    ]
};
//education history
var education = {
    "schools": [{
            "name": "Wyoming High School",
            "location": "Wyoming, IL, US",
            "degree": "High School Diploma",
            "majors": ["College Prep"],
            "dates": "1985 - 1989",
            "url": "http://stark100.com"
        },
        {
            "name": "Black Hawk East",
            "location": "Kewanee, IL, US",
            "degree": "None Aquired",
            "majors": ["Accounting"],
            "dates": "1989",
            "url": "http://www.bhc.edu"
        },
        {
            "name": "Midwest Theological Seminary",
            "location": "East Peoria, IL, US",
            "degree": "None Aquired",
            "majors": ["Pastoral Theology"],
            "dates": "1990-1993",
            "url": "http://abaptist.org"
        },
        {
            "name": "Andersonville Theological Seminary",
            "location": "Camilla, GA, US",
            "degree": "BS of Pastoral Theology",
            "majors": ["Pastoral Theology"],
            "dates": "1994-1995",
            "url": "http://www.andersonvilleseminary.com"
        }
    ],

    "onlineCourses" : [{
            "title" : "Introduction to Programming Nanodegree",
            "school" : "Udacity",
            "date" : "2016-2017",
            "url" : "https://classroom.udacity.com/"
    }
  ]
};


// this section is where the JSON's i created above are formatted for the webpage
// this function formats my biography for the website
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    //saw someone had put the items to be appended in one append command, works just fine,though I need to keep things in order or add prepend/append lines to put new items where i want them. order matters here.
    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedImage, formattedMessage);
    //formatting the skill set
    $("#header").append(HTMLskillsStart);

    if (bio.skills.length > 0){
        bio.skills.forEach (function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
    //formatting contact information to appear in header and footer
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedLocation);

};



//this function formats my work history JSON
work.display = function() {
    work.jobs.forEach(function(job)  {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concatanate employer and title, appending data
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerandTitle = formattedEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedEmployerandTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedworkLocation);

        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedworkDescription);
    });
}


//this function formats my projects JSON
projects.display = function() {
    projects.projects.forEach (function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescrip = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescrip);

        if (project.images.length > 0) {
            project.images.forEach (function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

//this function formats my education JSON
education.display = function() {
    education.schools.forEach (function(school) {
        //create new div for education
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("#",school.url).replace("%data%", school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedschoolLocation);

        if (school.majors.length > 0) {
            school.majors.forEach (function(major) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedschoolMajor);
            });
        }
    });
    //adding online courses to education section
    $("#education").append(HTMLonlineClasses);
   education.onlineCourses.forEach (function(course){
        //create new div for online classes
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("#", course.url).replace("%data%", course.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",course.school);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%",course.date);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("#",course.url).replace("%data%",course.url);
        $(".education-entry:last").append(formattedonlineURL);
    });
};

//i used different functions, but these all call on their function and cause it to be displayed on the resume website
bio.display();
work.display();
projects.display();
education.display();




// this is my function for the international name button, it makes sure the first name is first letter capital then lowercase while the last name is all uppercase
function inName() {
    var finalName = bio.name;
    var space = " ";
    var namearray = finalName.split(space);
    var firstName = namearray[0];
    var lastName = namearray[1];
    var newfirstName = firstName.toLowerCase();
    var capitalfirstName = newfirstName.charAt(0).toUpperCase() + newfirstName.slice(1);
    var newlastName = lastName.toUpperCase();
    finalName = capitalfirstName + space + newlastName;

    return finalName;
}

//adds internationalize button
$("#main").append(internationalizeButton);
//adds map to resume
$("#mapDiv").append(googleMap);

//this keeps track of mouse clicks on web page, seen in the console in dev tools, leaving in program
var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});