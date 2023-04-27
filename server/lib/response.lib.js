// We make this response class to keep track of the data we are uploading, and also if we get an error we will be able to find it easily

export default class Response {
  constructor(data, message, error) {
    this.data = data;
    this.message = message || "";
    this.error = error || false;
  }
}
