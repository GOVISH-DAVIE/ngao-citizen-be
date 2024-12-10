import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const passport = require('passport')
require("./middleware/passport")
var multer = require('multer');
export var forms = multer({
  dest: 'upload/',
});
import { Prisma, PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient()

export const saltRounds = 10;

const bcrypt = require('bcrypt');


const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const http = require('http');
const app = express();

const { Server } = require("socket.io");
import { uuid } from 'uuidv4';
import cors from 'cors';
import { home } from './router/home';
import path from 'path';
import iprsPersonRouter from './router/v1/search_iprs';
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));











// app.use(cors({credentials: true, origin: '*'}))
const whitelist = ['http://localhost:5007', 'http://localhost', '*'];
// init()30

app.options('*', cors())




export const server = http.createServer(app);

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors({
  origin: '*'
}));
// io.use

dotenv.config();
// init()
export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});


// routes
app.use('/', home);

app.use('/api/v1/iprsPersons', iprsPersonRouter);

app.get('/uploads/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(filename, { root: path.join('uploads') }); // serve files from uploads directory
});

export const JWTSecret = "secret"
// app.use('/product', product)

// socketInit()s


// start the server
app.listen(5009, () => {
  console.log(
    `server running : http://localhost:5009`
  );
});

server.listen(5007, () => {
  console.log('socket listening  on *:5007');
}); 