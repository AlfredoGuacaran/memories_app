import express from 'express';import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import path from 'path';

import dotenv from 'dotenv';

const app = express();
dotenv.config();

//configuraciones
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// config static folder

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//definicion del puerto
const PORT = process.env.PORT || 5000;
//configuracion de la base de datos
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, //previene warnings
    useUnifiedTopology: true, //previene warnings
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false); //previene warnings