const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector)

    numInputs.forEach((element) => {
        element.addEventListener("input", () => {
            element.value = element.value.replace(/\D/, "")
        })
    })
}

export default checkNumInputs
