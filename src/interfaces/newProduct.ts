export interface NewProduct {
    id:           string,
    nombre:       string,
    descripcion:  string,
    ubicaciones:  string[],
    precio:       number,
    categoria:    string,
    mainPhoto:    string
}