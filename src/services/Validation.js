export default class Validation {
  constructor() {
    this.messages = {};
  }

  getMessage(field) {
    if (this.messages && this.messages[field]) {
      return this.messages[field][0];
    }
  }

  setMessages(messages) {
    this.messages = messages;
  }

  empty() {
    this.messages = {};
  }
}
