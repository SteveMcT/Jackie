window.onload = () => {
    let sections = document.getElementsByClassName("needSameHeight")
    resize(sections)
}
window.onresize = () => {
    let sections = document.getElementsByClassName("needSameHeight")
    for (let section of sections)
        section.style.height = "0px !important"
    resize(sections)
}

function resize(sections) {
    var height = 0
    for (let section of sections)
        if (section.offsetHeight > height) height = section.offsetHeight
    for (let section of sections)
        section.style.height = height + "px"
}