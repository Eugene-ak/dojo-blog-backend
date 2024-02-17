import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./routes/index.js";
// import usersRouter from "./routes/users.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.use('/blogs', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, async () => {
  // connect database
  try {
    const uri = process.env.CON_STRING;
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
  }
  console.log(`Server started on port ${port}`);
})

export default app;
