class ApiError extends Error {
  constructor(
    statusCode,
    success,
    message = "Something Went Wrong",
    error = [],
    stack = "",
  ) {
    super(message);

    this.statusCode = statusCode;
    this.success = success;
    this.message = message;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      success: this.success,
      message: this.message,
      error: this.error,
    };
  }
}

export { ApiError };
