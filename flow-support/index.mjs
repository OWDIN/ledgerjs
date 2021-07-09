import glob from "glob";
import { copyFile } from "fs";

glob("./node_modules/@owdin/**/*.js.flow", (err, matches) => {
  if (err) {
    console.error(err);
    return;
  }

  matches.forEach((src) => {
    const dest = src.replace("./node_modules/@owdin", "../packages");

    copyFile(src, dest, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`${src} -> ${dest}`);
    });
  });
});
