const { Plugin } = require('powercord/entities');

const owo = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];

module.exports = class OwO extends Plugin {
  startPlugin() {
    this.registerCommand(
      'owo',
      [],
      'OwO what\'s this',
      '{c}',
      async OwO => {
        let uwu = OwO.join(" ");

        uwu = uwu.replace(/(?:r|l)/g, "w")
          .replace(/(?:R|L)/g, "W")
          .replace(/n([aeiou])/g, 'ny$1')
          .replace(/N([aeiou])/g, 'Ny$1')
          .replace(/N([AEIOU])/g, 'Ny$1')
          .replace(/ove/g, "uv")
          .replace(/\!+/g, " " + owo[Math.floor(Math.random() * owo.length)] + " ");

        return {
          send: true,
          result: uwu
        }
      }
    );
  }
};
