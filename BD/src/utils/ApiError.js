class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong", // this error message koi use nhi karta hai isliye yaha per use karte hai, since doen't provide details of error
    errors = [], // multiple error hai toh array me le lege
    statck = "" // error stack hai toh do otherwise taken as empty
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null; // data field ko usually null kar diya jata hai | read more about it - node js me baat hogi | find what present in data ???
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
