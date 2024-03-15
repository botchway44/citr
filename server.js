import express from "express";
import fs from 'fs';
import path from "path";

import { fileURLToPath } from 'url';
import renderApp from "./dist/server/ServerApp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 3001;

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const parts = html.split("PLIT POINT");

const app = express();
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

app.use((req,res)=>{
  res.write(parts[0]);

  const stream = renderApp(req.url, {
    onShellReady(){
      //if it is the crawler, do nothing here
      stream.pipe(res)
    },
    onShellError(){
      //do something
    },
    onAllReady(){
      //if it is the crawler, do this here
      // stream.pipe(res)

      res.write(parts[1]);
      res.end()
    },
    onError(err){
      console.error(err)
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`Server up localhost:${PORT}`);
})