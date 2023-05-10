const express = require('express');
const app = express();

// app.set('port', process.env.PORT || 3000);

app.use(express.json());

const examenmedico =  [
    {
        id:1,
        nombre: 'Juan',
        identificacion: 7
    },
    {
        id:2,
        nombre: 'Alberto',
        identificacion: 9
    },
];

app.get('/', (req, res) =>{
    res.send('Activo')
})

app.get('/api/examenmedico', (req,res) =>{
    res.send(examenmedico)
})

app.get('/api/examenmedico/:id', (req,res) =>{
    const examen = examenmedico.find(c=>c.id === parseInt(req.params.id))
    if(!examen) return res.status(404).send('Examen medico encontrado')
    else res.send(examen)
})

app.post('/api/examenmedico', (req, res) =>{
    const examen = {
        id: examenmedico.length+1,
        nombre: req.body.nombre,
        identificacion: parseInt(req.body.identificacion)
    };
    examenmedico.push(examen);
    res.send(examen)
})

app.delete('/api/examenmedico/:id', (req, res)=>{
    const examen = examenmedico.find(c => c.id == parseInt(req.params.id));
    if(!examen) return res.status(404).send('Examen medico no encontrado')
    const index = examenmedico.indexOf(examen)
    examenmedico.splice(index, 1);
    res.send(examen)
})

const port = process.env.port || 5000
app.listen( port,() => console.log(`escuchando en port ${port}..`));

// app.listen(app.get('port'), () => {
//     console.log(`Server on port ${app.get('port')}`);
//   });

module.exports = app;