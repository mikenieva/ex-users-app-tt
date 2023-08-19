// 1. VARIABLES
// 1A. IMPORTACIONES
import "./style.css"

// 1B. VARIABLES LOCALES
const app = document.querySelector("#app")

// 2. EJECUCIONES
// 2A. VISTAS

// UN PROCESO ASÍNCRONO GRACIAS A LA PALABRA "ASYNC"
const getData = async () => {
  try {
    // 1. OBTENER LA RESPUESTA DEL SERVIDOR
    const response = await fetch(
      "https://dog.ceo/api/breed/hound/images/random"
    )
    console.log("response:", response)

    if (response.status === 404) {
      // throw new Error("Ha ocurrido un error", response.statusText)
      console.log("Ha ocurrido un error:", response.statusText)
    }

    // 2. OBTENER EL DATO EN JSON (ÚNICO)
    const data = await response.json()
    console.log("data", data)

    // 3. PINTAR EN LA VISTA
    app.innerHTML = /* HTML */ `
      <div>
        <h1>Hello Dog!</h1>
        <img src="${data.message}" />
      </div>
    `
  } catch (error) {
    console.log("error", error)
  }
}

getData()
