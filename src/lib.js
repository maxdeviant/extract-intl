import fs from 'fs';
import { parse } from './parser';

export function extractIntl(files) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(files)) {
      files = [files];
    }

    return Promise.all(
      files.map(readFile)
    ).then(fileContents => {
      return resolve(
        fileContents
          .map(parse)
          .reduce((accumulator, { messages, duplicates }) => ({
            messages: {
              ...accumulator.messages,
              ...messages
            },
            duplicates: [
              ...accumulator.duplicates,
              ...duplicates
            ]
          }), {
            messages: {},
            duplicates: []
          })
      );
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
