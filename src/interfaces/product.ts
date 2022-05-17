export interface Product {
    id:           number,
    nombre:       string,
    descripcion:  string,
    precio:       number,
    ubicaciones:  string[],
    categoria:    string,
    empresa:      string,
    mainPhoto:    string,
    altPhotos:    []
}