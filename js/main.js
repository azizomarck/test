// store data retrieve from JSON file 
let data = null;

/// end of json file 

// get json file and return a promise 
function getJSON() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: "data/data.json",
      dataType: "JSON",
      success: function (js) {
        resolve(js);
      },
      error: function (js) {
        reject(js)
      }
    });

  });

}


async function main() {
  data = await getJSON();
  retrieveData()
  displayProjects();
  functionlizeProjects();

}

setTimeout(()=>{

  main();
},2000)




let img = document.getElementsByTagName("img")[1];
let header = document.getElementsByTagName("header")[0];
header.style.display = "none";

document.onscroll = function () {
  if (document.getElementsByClassName("aboutme")[0].getClientRects()[0].y < 0) {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
}

document.onmousemove = function (event) {
  let a = Math.random() * 100;
  img.style.transform = `rotate(${a}deg)`;

};

class Project {
  constructor(title, tools, folderName, logo, imgsName, isDeployed, deployment, code, description) {
    this.title = title;
    this.tools = tools;
    this.images = {
      logo,
      folderName,
      imgsName
    };
    this.isDeployed = isDeployed;
    this.url = {
      deployment,
      code
    };
    this.description = description;
  }
}

let projects = [];

function retrieveData() {
  for (let i = 0; i < data.main.length; i++) {
    let p = data.main[i];
    let project = new Project(p.title, p.tools, p.images.folderName, p.images.logo, p.images.imgsName, p.isDeployed, p.url.deployment, p.url.code, p.description)
    projects.push(project);

  }
}

function displayProjects() {
  for (let i = 0; i < projects.length; i++) {
    $("#projects").append(` <div data-aos="zoom-in-down" id="${i}" class="g-item"> <img src="images/${projects[i].images.folderName}/${projects[i].images.logo}" >
    <p>${projects[i].title}<br><span class="techUsed">${projects[i].tools}</span></p> `);
  }
}


toggleDeatils();
// hide and show
function functionlizeProjects() {
  $(".g-item").click(function () {
    displayDetails(this.id);
    toggleProjects();
    toggleDeatils();

  });
}


swapImages();



let p;

function displayDetails(index) {
  p = projects[index];
  //images/slotMachine/slotMachine.png"
  $("#imgsContainer>img").attr("src", `images/${p.images.folderName}/${p.images.logo}`);
  $("#projectInfo").html(`
      <h2>${p.title}</h2>
      <p>${p.description}
  <span id="tools"> Technologies Used: ${p.tools} </span> </p>
<div>
  <a href="${p.url.code}"class="codeBtns" id="seeSourceCode" target="_blank">Source Code</a>
  <a href="${p.url.deployment}"class="codeBtns" id="testIt" target="_blank">Test it</a>
</div> `);
  hideLinkBtn(p.isDeployed);
}

// some projects do not have deployment link,those wil have the btn hidden
function hideLinkBtn(isDeployed) {
  if (!isDeployed) {
    $("#testIt").hide()
  } else {
    $("#testIt").show()
  }
}

function toggleProjects() {
  if ($(".g-item").is(":visible")) {
    $(".g-item").hide();
  } else if ($(".g-item").is(":hidden")) {
    $(".g-item").show();

  }
}

// 
function toggleDeatils() {
  if ($("#projectDetails").is(":visible")) {
    $("#projectDetails").hide();
  } else if ($("#projectDetails").is(":hidden")) {
    $("#projectDetails").show();

  }
}

$("#nav").toggleClass("tag");

function swapImages() {
  // track index number
  let x = -1;
  x++
  // right arrow on click increases the index by one if it is less than images array size
  $("#nxtImage").click(function () {
    if (x < p.images.imgsName.length - 1) {
      x++;
      $("#imgsContainer>img").attr("src", `images/${p.images.folderName}/${p.images.imgsName[x]}`);
    }

  });

  // left arrow on click decreases the index by one if it greater than zero
  $("#prvImage").click(function () {
    if (x > 0) {
      x--;
      $("#imgsContainer>img").attr("src", `images/${p.images.folderName}/${p.images.imgsName[x]}`);

    }
  });


}

$("#backBtn").click(function () {
  toggleDeatils();
  toggleProjects();
})

// detect if user's device is a phone
if ($(".logoNav").css('display') == 'flex') {
  $("#nav").removeClass("tog");
  $("#nav>a").hide();
  $(".menuIcon").click(function () {
    $("#nav").toggleClass("tog");
    $("#nav>a").toggle('slow');

  });
} else {

  $("#nav>a").show();
  $(".menuIcon").hide();
}

$("#nav > a ").click(
  function () {
    setTimeout(scroll, 10);
  }
);


function scroll() {
  return function () {
    window.scrollBy(0, -40);
  }();
}



{/* <a href="#homePage">Home</a> <a href="#aboutMePage">About Me</a> <a href="#navToProject">Projects </a> <a */}
// href="#cvPage"> Resume</a> <a href="#contactMePage"> Contact Me</a>

$( "a:contains('Home')" ).click(function(){
$('html, body').animate( {scrollTop: $("#homePage").offset().top -50} , 2000);

});

$( ".logoNav" ).click(function(){
$('html, body').animate( {scrollTop: $("#homePage").offset().top -50} , 2000);
});


$( "a:contains('About Me')" ).click(function(){
$('html, body').animate( {scrollTop: $("#aboutMePage").offset().top -50} , 2000);
});

$( "a:contains('Projects')" ).click(function(){
$('html, body').animate( {scrollTop: $("#navToProject").offset().top + 50} , 2000);
});

$( "a:contains('Resume')" ).click(function(){
$('html, body').animate( {scrollTop: $("#cvPage").offset().top -50} , 2000);
});

$( "a:contains('Contact Me')" ).click(function(){
$('html, body').animate( {scrollTop: $("#contactMePage").offset().top -50} , 2000);
});



function myFunction(x) {
  x.classList.toggle("change");
}