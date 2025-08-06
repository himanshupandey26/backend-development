import express from "express";

// cors & cookieParser, config hote h app banne ke baad
import cors from "cors";
import cookieParser from "cookie-parser"; // server se user ke jo browser hai uske andr ki cookies ko access kar pau or set bhi kar pau, basically uski cookies per CRUD operations perform kar pau, we put secure cookies there only server can access or change

const app = express();

// app.use() // 'use' is used for middleware and config
// app.use(cors()) // isse config ho jata hai, but it also have options
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // exploration ke liye ???
  })
);

// data come on backend from different sources
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // %20 or + for spacing in url
app.use(express.static("public"));
app.use(cookieParser());

export { app };
