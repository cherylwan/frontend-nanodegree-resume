/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#header").append();
// $("#main").append("万欣茹 Cheryl Wan");

// var awesomeThoughts="I'm Cheryl, I'm awesome.";
// console.log(awesomeThoughts);
// newAwesome=awesomeThoughts.replace("awesome","FUN");
// console.log(newAwesome);



var bio={
  name:"万欣茹 Cheryl Wan",
  role:"数据分析师 Data Analyst",
  contacts:{
  email:"xinruwan@163.com",
  mobile:"+86-18720177650",
  github:"cherylwan",
  location:"江西 九江",
  wechat:"cheryl-wan"
},
  biopic:"images/me.jpg",
  welcomeMsg:"Hello! This is my first Javascript project!",
  skills:["Python","Matlab","MS Office"]
};

//Course 1 practices:
// var formattedName=HTMLheaderName.replace("%data%",bio.name);
// var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
//
// $("#header").append(formattedName);
// $("#header").append(formattedRole);
//
// var formattedBioPic=HTMLbioPic.replace("%data%",bio.pictureURL);
// $("#header").append(formattedBioPic);
//
// var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
// $("#header").append(formattedMobile);
//
// var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
// $("#header").append(formattedEmail);
//
// var formattedSkills=HTMLskills.replace("%data%",bio.skills);
// $("#header").append(formattedSkills);
//
// var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
// $("#header").append(formattedWelcomeMsg);
// var formattedWorkTitle=HTMLworkTitle.replace("%data%",work['title']);
// $("#workExperience").append(formattedWorkTitle);

// var formattedSchoolName=HTMLschoolName.replace("%data%",education.school);
// $("#main").append(formattedSchoolName);
var work={
  "jobs":[{dates:"2015.08",
  employer:"九江职业技术学院",
  title:"教务处 质量管理",
  location:"江西 九江",
  description:"质量监控、课程改革和信息化建设"},
  {
    dates:"2010.07-2103.08",
    employer:"Marvell Asia Pte Ltd",
    title:"Product Test Engineer",
    location:"Singapore",
    description:"..."
    }
  ]
}

var projects={
  "projects":[
    {
      title: "CP908/CP909",
      dates:"2013",
      description:"...",
      images:"..."
    },
  {
    title:"CP940/CP955",
    dates:"2012",
    description:"...",
    images:"..."
  }]
}


var education={
  "schools":[
    {
      name:"南洋理工大学",
      dates:2010,
      degree:"Masters",
      major:["Signal Processing"],
      location:"新加坡",
      url:"..."
    },
  {
    name:"南方医科大学",
    dates:2009,
    degree:"BA",
    major:["生物医学工程(信息工程方向)"],
    location:"中国广州",
    url:"..."
  }],
  onlineCourses:[
    {
      title:"intro to python",
      school:"Coursera",
      url:"..."
    },
    {
      title:"From Excel to MySQL",
      school:"Coursera",
      url:"..."
    }
  ]
}
