/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

import json from './parser';
import read from './reader';

export default class GameSaving {
  constructor() {
    (async () => {
      try {
        const response = await read();
        const data = await json(response);
        return JSON.parse(data);
      } catch (e) {
        console.log(e);
      }
    })().then((data) => { this.save = data; });
  }
}

const p = new GameSaving();
setTimeout(() => console.log(p), 2000);
