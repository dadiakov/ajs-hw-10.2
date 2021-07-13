/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

import json from './parser';
import read from './reader';

let saveObj = {};

export default class GameSaving {
  constructor(data) {
    this.save = data;
  }
}

(async () => {
  try {
    const response = await read();
    const data = await json(response);
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
})().then((data) => { saveObj = new GameSaving(data); console.log(saveObj)});
