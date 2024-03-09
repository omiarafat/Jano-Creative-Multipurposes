



// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
  
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navber").style.background = "#fff";
    document.getElementById("navber").style. paddingTop = "12px";
    document.getElementById("navber").style. paddingBottom = "12px";
    document.getElementById("navber").style. position = "fixed";
    document.getElementById("navber").style. boxShadow = "0 13px 35px -12px rgba(35,35,35,.1)";
    document.getElementById("uparrow").style. display = "block";
  } else {
    document.getElementById("navber").style.background = "transparent";
    document.getElementById("navber").style. paddingTop = "20px";
    document.getElementById("navber").style. paddingBottom = "20px";
    document.getElementById("navber").style. boxShadow = "none";
    document.getElementById("uparrow").style. display = "none";
  }
}


const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");

// Sidenav Toggle
openMenu.addEventListener("click", function () {
	menuWrapper.classList.add("offcanvas");
});

closeMenu.addEventListener("click", function () {
	menuWrapper.classList.remove("offcanvas");
});

// Collapsible Menu
const hasCollapsible = document.querySelectorAll(".has-collapsible");

hasCollapsible.forEach(function (collapsible) {
	collapsible.addEventListener("click", function () {
		collapsible.classList.toggle("active");

		// Close Other Collapsible
		hasCollapsible.forEach(function (otherCollapsible) {
			if (otherCollapsible !== collapsible) {
				otherCollapsible.classList.remove("active");
			}
		});
	});
});






// <!-- Tabs -->
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("text-white", "bg-black");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("text-white", "bg-black");
  });
});
// <!-- Tabs End -->


// count js
$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 50);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
// count js end

//  Swiper Start
var swiper = new Swiper(".CheckOur", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// Swiper End


// accordion faq
let question = document.querySelectorAll(".question");

question.forEach((qsitem) => {
  qsitem.addEventListener("click", function (e) {
    //   store the .answer div containing the answer
    let sibling = qsitem.nextElementSibling;

    // Nested loop for removing active class from all and set answer height to 0
    question.forEach((item) => {
      item.nextElementSibling.style.height = "0px";
      //   remove class "active" except for the currently clicked item
      item != qsitem && item.parentNode.classList.remove("active");
    });
    //then toggle the "active" class of clicked item's parent ".qna"
    this.parentNode.classList.toggle("active");

    // set actual height for .answer div if .qna has the class "active"
    if (qsitem.parentNode.classList.contains("active")) {
      sibling.style.height = sibling.scrollHeight + "px";
    } else {
      sibling.style.height = "0px";
    }
  });
});
// accordion faq End

// custom select start

document.querySelectorAll('.select').forEach(function (dropdownWrapper) {
  const dropdownBtn = dropdownWrapper.querySelector('.selectbutton');
  const dropdownList = dropdownWrapper.querySelector('.selectlist');
  const dropdownItems = dropdownList.querySelectorAll('.selectlist-item');
  
  dropdownBtn.addEventListener('click', function () {
    dropdownList.classList.toggle('show');
  });
  
  dropdownItems.forEach(function(listItem) {
    listItem.addEventListener('click', function (e) {
      dropdownItems.forEach(function(el) {
        el.classList.remove('active');
      })
      e.target.classList.add('active');
      dropdownBtn.innerText = this.innerText;
      dropdownList.classList.remove('show');
    })
  })
})
// custom select End


// uparrow
const uparrow = document.querySelector('#uparrow')
uparrow.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
// uparrow End