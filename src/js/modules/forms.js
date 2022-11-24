const forms = () => {
    const form = document.querySelectorAll("form")
    const inputs = document.querySelectorAll("input")
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    phoneInputs.forEach((element) => {
        element.addEventListener("input", () => {
            element.value = element.value.replace(/\D/, "")
        })
    })

    const message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так...",
    }

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = message.loading
        let res = await fetch(url, {
            method: "POST",
            body: data,
        })

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach((element) => {
            element.value = ""
        })
    }

    form.forEach((element) => {
        element.addEventListener("submit", (e) => {
            e.preventDefault()

            let statusMessage = document.createElement("div")
            statusMessage.classList.add("status")
            element.appendChild(statusMessage)

            const formData = new FormData(element)

            postData("assets/server.php", formData)
                .then((res) => {
                    console.log(res)
                    statusMessage.textContent = message.success
                })
                .catch((err) => {
                    statusMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                })
        })
    })
}

export default forms
