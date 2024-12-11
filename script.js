/*--- MODALS & POPUPS ---*/
// buttons - open and close specific modals aka popups

let openPopupButton = document.querySelectorAll("[data-open-modal]")
let openDialogButton = document.querySelectorAll("[data-open-dialog]")
const closePopupButton = document.querySelectorAll("[data-close-modal]")
//const modal = document.querySelectorAll("[data-modal]")

for(let i = 0; i < openPopupButton.length; i++) {
  openPopupButton[i].addEventListener('click', function() {
    var openModalSpecific = this.getAttribute('data-modal-target')
    var modalSpecific = document.getElementById(openModalSpecific)
    modalSpecific.showModal()
  });
}

for(let i = 0; i < openDialogButton.length; i++) {
  openDialogButton[i].addEventListener('click', function() {
    var openDialogSpecific = this.getAttribute('data-dialog-target')
    var dialogSpecific = document.getElementById(openDialogSpecific)
    dialogSpecific.show()
  });
}

for(let i = 0; i < closePopupButton.length; i++) {
  closePopupButton[i].addEventListener('click', function() {
    var closeModalSpecific = this.closest('.popup-question')
    closeModalSpecific.close()
  });
}

// quiz window answer reveal
let revealAnswerButtons = document.querySelectorAll('.btn-revealAnswer')
let resetAnswerButtons = document.querySelectorAll('.btn-resetAnswer')

for(let i = 0; i < revealAnswerButtons.length; i++) {
  revealAnswerButtons[i].addEventListener('click', function(){
    this.closest('.card-button-lane').nextElementSibling.style.display = "flex"
    this.nextElementSibling.classList.remove('hidden')
    this.classList.add('inactive')
  })
}

for(let i = 0; i < resetAnswerButtons.length; i++) {
  resetAnswerButtons[i].addEventListener('click', function(){
    this.closest('.card-button-lane').nextElementSibling.style.display = "none"
    this.previousElementSibling.classList.remove('inactive')
    this.classList.add('hidden')
  })
}

/*for(let i = 0; i < hideAnswerButtons.length; i++) {
  hideAnswerButtons[i].addEventListener('click', function(){
    this.parentElement.previousElementSibling.style.display = "flex"
    this.parentElement.style.display = "none"
  })
}*/


// syringe liquid fill

window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const pctScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight

    htmlElement.style.setProperty('--scroll', Math.min(pctScreenHeightScroll * 100, 100))
}

setScrollVar()


const svg = document.querySelector('svg.draw-line')
const path = svg.querySelector('path')
const svgg = document.querySelector('svg.branches')
const paths = svgg.querySelectorAll('path')

const pathScroll = () => {
    const htmlElement = document.documentElement
    const fraScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight

    const pctScreenHeightScroll = Math.min(fraScreenHeightScroll, 1)

    const pathLength = path.getTotalLength()

    path.style.strokeDasharray = `${pathLength}`
    path.style.strokeDashoffset = `${Math.max(pathLength * (1 - (pctScreenHeightScroll * 5)), 1)}`

    for (var i = 0; i < paths.length; i++) {
        const pctScreenHeightScroll = Math.min(Math.max(fraScreenHeightScroll - 0.2, 0), 1)

        let pathh = paths[i];

        let pathhLength = pathh.getTotalLength()

        pathh.style.strokeDasharray = `${pathhLength}`
        pathh.style.strokeDashoffset = `${Math.max(pathhLength * (1 - (pctScreenHeightScroll * 3)), 1)}`
    };
}

pathScroll()
window.addEventListener('scroll', pathScroll);

// return to top of page before unload



/* ---- SIDEBAR ---- */

var dropdown = document.getElementsByClassName("sidebar-button-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
}
//sidebar collapse
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.height = "100%";
}
//hide sidebar button
/*const div = document.querySelector('.sidebar-open-button')
div.addEventListener('click', () => {
    div.classList.add('hidden');
})*/
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.height = "0%";
    // div.classList.remove('hidden'); //reappear sidebar button
}


/* --- STORY OVERLAY --- */
function openContact() {
  document.getElementById("overlayContact").style.height = "100%";
  document.getElementById("overlayContact").style.opacity = "100%";
  document.body.style.overflowY = "hidden";
}

function closeContact() {
  document.getElementById("overlayContact").style.height = "0%";
  document.getElementById("overlayContact").style.opacity = "0%";
  document.body.style.overflowY = "scroll";
  // div.classList.remove('hidden'); //reappear sidebar button
}
