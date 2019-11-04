// this should be a JSON file 
let data = {
  main: [{
      title: "TutoringService",
      tools: "JavaEE,SpringBoot, Thymeleaf,MySQL,JavaScript ",
      images: {
        folderName: "tutoringService",
        imgsName: ["logo.png", "f_img.png", "s_img.png", "t_img.png", "fo_img.png", "fi_img.png", "sx_img.png"],
        logo: "logo.png"
      },
      isDeployed: false,
      url: {
        deployment: "",
        code: "https://github.com/Azizck/TutoringService"
      },
      description: "A web application providing tutoring service in subjects that are chosen by a tutor. A Tutor signs up for an account, adds the subjects ,chooses the preferred date and the price per hour and accesses the calendar to see the booked appointments Students sign up for an account, book an appointment and make payments on their preferred time and date. Students and Tutors credentials are encrypted in database using salted MD5."

    }, {
      title: "Cluz",
      tools: "JavaFX,CSS,Invasion",
      images: {
        folderName: "cluz",
        imgsName: ["logo.jpg", "f_img.jpg", "s_img.png"],
        logo: "logo.jpg"
      },
      isDeployed: false,
      url: {
        deployment: "",
        code: "https://github.com/Azizck/PROG24178_CLUZ"
      },
      description: "Clothing Managment System | •	Planned, designed and implemented the project working collaboratively with a team of three people •	The application works offline and is designed to be used by clothing warehouses or clothing stores •	Allows you to add clothing items and displays them in a well-designed interface, which allows for Inventory Searching and filtering •	Export inventory list to CSV file."
    }



    , {
      title: "Slot Machine",
      tools: "PHP,Javscript",
      images: {
        folderName: "slotMachine",
        imgsName: ["logo.png", "f_img.JPG"],
        logo: "logo.png"
      },
      isDeployed: true,
      url: {
        deployment: "http://omarazi.dev.fast.sheridanc.on.ca/inClass/",
        code: "https://github.com/Azizck/SlotMachine"
      },
      description: "•	Planed, designed and implemented the project working collaboratively with a team of three people •	The application works offline and is designed to be used by clothing warehouses or clothing stores •	Allows you to add clothing items and displays them in a well-designed interface, which allows for Inventory Searching and filtering •	Export inventory list to CSV lfile 3"
    }




    , {
      title: "ChatBot",
      tools: "Javscript",
      images: {
        folderName: "chatBot",
        imgsName: ["logo.JPG", "f_img.JPG", "s_img.JPG"],
        logo: "logo.JPG"
      },
      isDeployed: true,
      url: {
        deployment: "http://omarazi.dev.fast.sheridanc.on.ca/HYF/",
        code: "https://github.com/Azizck/Chatbot"
      },
      description: "•	A rule-based chatbot with intuitive  graphical user interface currently in progress •	Created an autocompletion feature that predicts the sentence  a user intends to enter after only a few characters have been typed •	Relies on API calls to do some tasks such as displaying the weather based on user location."
    }

    , {
      title: "Catch The Fly",
      tools: "Javscript",
      images: {
        folderName: "catchTheFly",
        imgsName: ["logo.jpg", "f_img.jpg"],
        logo: "logo.jpg"
      },
      isDeployed: true,
      url: {
        deployment: "https://azizck.github.io/catchtheFly/",
        code: "https://github.com/Azizck/catchtheFly"
      },
      description: "a simple game works in the browser. It consist's of two characters. The user and the fly. The user tries to catch the fly using the mouse and once the user gets close to the Fly, it runs away."
    }, {
      title: "UI Data Structure",
      tools: "Javscript,C",
      images: {
        folderName: "dataStructure",
        imgsName: ["logo.png", "f_img.jpg"],
        logo: "logo.png"
      },
      isDeployed: false,
      url: {
        deployment: "https://azizck.github.io/",
        code: "https://github.com/Azizck/"
      },
      description: "I am using Angular, and Javascript to visualize how data Structure works, I will cover, Stack,Queue,LinkedList, and Trees"
    }
  ]
}
/// end of json file 





let img = document.getElementsByTagName("img")[0];
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
    console.log(p.images.folderName);
    let project = new Project(p.title, p.tools, p.images.folderName, p.images.logo, p.images.imgsName, p.isDeployed, p.url.deployment, p.url.code, p.description)
    projects.push(project);

  }
}
retrieveData();
$(document).ready(function () {
  for (let i = 0; i < projects.length; i++) {
    $("#projects").append(` <div id="${i}" class="g-item"> <img src="images/${projects[i].images.folderName}/${projects[i].images.logo}" >
  <p>${projects[i].title}<br><span class="techUsed">${projects[i].tools}</span></p> `);
  }


  toggleDeatils();
  // hide and show
  $(".g-item").click(function () {
    displayDetails(this.id);
    toggleProjects();
    toggleDeatils();

  });

  swapImages();





});

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
    console.log("it should be hidden");
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