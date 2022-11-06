/*

  Simple Reveal elements with Intersection Observer API
  You can check Mozilla for this:
  https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

*/

// get all sections from DOM
const sections = document.querySelectorAll('section')

// options for our IntersectionObserver API
// root: viewport for checking visibilty of the target
// threshold: percentage of threshold that callback should be executed.
const options = {
  root: null,
  threshold: 0.15
}

// reveal function for our IntersectionObserver API
// this callback will execute when our IntersectionObserver API catch a observe
// remove the 'hide' class targeted section
function reveal(entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return true;
  entry.target.classList.remove('hide');
  observer.unobserve();
}

// initialize our observer api
const sectionObserver = new IntersectionObserver(reveal, options);

// hide all section on load and listen observes with our IntersectionObserver API object
sections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('hide')
})
