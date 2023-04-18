document.addEventListener("DOMContentLoaded", function() {
const head = document.getElementsByTagName(`header`)
console.log(head)

const allSections = document.getElementsByTagName(`section`)
console.log(allSections)

const currentSection = document.querySelector("section.current");
console.log(currentSection);

const nextSection = currentSection.nextElementSibling;
console.log(nextSection);

const previousSection = currentSection.previousElementSibling
const h2Node = previousSection.querySelector(`h2`)
console.log(h2Node)

const highlight = document.querySelector(`div.col h2.highlight`).parentNode.parentNode
console.log(highlight)

const sectionsWithH2 = document.querySelectorAll(`section:has(h2)`)
console.log(sectionsWithH2)
})
