const request = require('supertest')
const app = require('../index')

describe('GET /api/examenmedico', () =>{
    it('Retornando examen medico' , async () => {
        const res = await request(app).get('/api/examenmedico')
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('nombre');
        expect(res.body[0]).toHaveProperty('identificacion');
    })
})

describe('GET /api/examenmedico/:id', ()=>{
    it('Retornando examen medico especifico con ID', async () => {
        const res = await request(app).get('/api/examenmedico/1')
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(1)
        expect(res.body).toHaveProperty('identificacion')
    })
})

describe('DELETE /api/examenmedico/:id', () => {
    it('Elimina examen mediante ID', async () => {
        const res = await request(app).delete('/api/examenmedico/2')
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(2)
    })

    it('should return a 404 not found', async () => {
        const res = await request(app).delete('/api/examenmedico/999')
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe('Examen medico no encontrado')
    })
})