const request = require("supertest");
const server = require("../index");
const cafes = require("../cafes.json")

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo un 200", async () => {
        const response = await request(server).get("/cafes").send(cafes);
        const status = response.statusCode;
        console.log(response)
        expect(status).toBe(200)
        expect(cafes).toBeInstanceOf(Array);
        });

it("Eliminando un producto", async () => {
   const jwt = "token";
    const idDeProductoAEliminar = 5
    const response = await request(server).delete(`/cafes/${idDeProductoAEliminar}`).set("Authorization", jwt)
    const status = response.statusCode;
    expect(status).toBe(404);

            });
it("Enviando un nuevo cafe", async () => {
    const id = Math.floor(Math.random() * 999);
    const producto = { id, nombre: "De tarro" };
    const response = await request(server).post("/cafes").send(producto);
    const status = response.statusCode;
    expect(status).toBe(201);
    });

it("Editando un nuevo cafe", async () => {
    const id = Math.floor(Math.random() * 999);
    const producto = { id, nombre: "De tarro" };
    const response = await request(server).put("/cafes/8").send(producto);
    const status = response.statusCode;
    expect(status).toBe(400);
    });                                       
});
