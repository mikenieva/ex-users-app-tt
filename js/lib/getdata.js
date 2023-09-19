// UN PROCESO ASÍNCRONO GRACIAS A LA PALABRA "ASYNC"
export const getData = async () => {
  try {
    // 1. OBTENER LA RESPUESTA DEL SERVIDOR
    const response = await fetch("https://cataas.com/cat?json=true")
    console.log("response:", response)

    if (response.status === 404) {
      // throw new Error("Ha ocurrido un error", response.statusText)
      console.log("Ha ocurrido un error:", response.statusText)
    }

    // 2. OBTENER EL DATO EN JSON (ÚNICO)
    const data = await response.json()
    console.log("data", data)

    const baseUrl = "https://cataas.com/"
    const url = `${baseUrl}${data.url}`

    // 3. PINTAR EN LA VISTA
    app.innerHTML = /* HTML */ `
      <div>
        <h1>Hello Cat!</h1>
        <img src="${url}" />
      </div>
    `
  } catch (error) {
    console.log("error", error)
  }
}
