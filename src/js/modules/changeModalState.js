import checkNumInputs from "./checkNumInputs"

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWidth = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfile = document.querySelectorAll(".checkbox")

    checkNumInputs("#width")
    checkNumInputs("#height")

    function bindActionToElems(event, elem, prop) {
        elem.forEach((element, i) => {
            element.addEventListener(event, () => {
                switch (element.nodeName) {
                    case "SPAN":
                        state[prop] = i
                        break
                    case "INPUT":
                        if (element.getAttribute("type") === "checkbox") {
                            i === 0
                                ? (state[prop] = "Холодное")
                                : (state[prop] = "Теплое")
                            elem.forEach((box, j) => {
                                box.checked = false
                                if (i == j) {
                                    box.checked = true
                                }
                            })
                        } else {
                            state[prop] = element.value
                        }
                        break
                    case "SELECT":
                        state[prop] = element.value
                        break
                }
                console.log(state)
            })
        })
    }

    bindActionToElems("click", windowForm, "form")
    bindActionToElems("input", windowHeight, "height")
    bindActionToElems("input", windowWidth, "width")
    bindActionToElems("change", windowType, "type")
    bindActionToElems("change", windowProfile, "profile")
}

export default changeModalState
