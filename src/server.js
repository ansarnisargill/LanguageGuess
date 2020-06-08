const sirv =require('sirv');
const compression =require( 'compression');
const sapper =require( '@sapper/server');
const port=process.env.PORT||3000;
const dev = 'development';
const express = require('express');
let app=express();
const routes=require('./routes');

app.use(routes);
app.use(compression({ threshold: 0 }));
app.use(sirv('static', { dev }));
app.use(sapper.middleware());
app.listen(port, () => {
    console.log(`Server started on port ${port} :)`);
});
