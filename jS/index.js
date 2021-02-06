window.onload = () => {
    let sections = document.getElementsByClassName("needSameHeight")
    resize(sections)
}
window.onresize = () => {
    let sections = document.getElementsByClassName("needSameHeight")
    resize(sections)
}

function resize(sections) {
    let height = 0
    for (let section of sections)
        section.style.height = "auto"
    for (let section of sections)
        if (section.offsetHeight > height) height = section.offsetHeight
    console.log(height)
    for (let section of sections)
        section.style.height = height + "px"
}