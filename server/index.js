import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

//configuraciones
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
//acceso a la base de datos
const CONNECTION_URL =
  'mongodb+srv://alfredoguacaran:alfredoguacaran123@cluster0.rwdn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//definicion del puerto
const PORT = process.env.PORT || 5000;

//configuracion de la base de datos
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true, //previene warnings
    useUnifiedTopology: true, //previene warnings
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch(error => console.log(error));

mongoose.set('useFindAndModify', false); //previene warnings
