// 1. VARIABLES
// 1A. IMPORTACIONES
import "./style.css"
import { UsersApp } from "./src/users-app"
import { SearchBarApp } from "./src/searchbar-app"

const crudArea = document.querySelector("#crud")
const searchBarApp = document.querySelector("#search-bar")

UsersApp(crudArea)
SearchBarApp(searchBarApp)
