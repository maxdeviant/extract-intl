import fs from 'fs';
import { parse } from './parser';

export function extractIntl(files) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(files)) {
      files = [files];
    }

    const fileContents = files.map(readFile);

    fileContents[0].then(data => {
      return resolve(parse(data));
    }).catch(err => {
      return reject(err);
    });
  });
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}
