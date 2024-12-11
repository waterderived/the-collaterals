/* --- PAGE LOADER --- */

const loaderContainer = document.querySelector('.loader-container')
    const pageContent = document.querySelector('#page-content')

    window.addEventListener('load', () => {
        loaderContainer.classList.add('hidden')
        pageContent.classList.add('visible')
    })

// return to top of page before unload

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
