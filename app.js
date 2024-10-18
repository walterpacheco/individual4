const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuración de Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta GET /pendientes
app.get('/pendientes', (req, res) => {
    const tareas = [
        { tarea: 'Hacer la compra' },
        { tarea: 'Lavar el auto' },
        { tarea: 'Estudiar Node.js' }
    ];
    res.render('pendientes', { tareas });
});

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
