import { NewProduct } from "./newProduct";

export interface UserMinInfo {
    "id":        string,
    "nombre":    string,
    "cesta":     NewProduct[],
    "favoritos": NewProduct[],
    "imagen":    string
}