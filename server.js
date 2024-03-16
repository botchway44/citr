import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/ServerApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const parts = html.split("not rendered");

const app = express();

app.use("/assets", express.static(path.resolve(__dirname, './dist/client/assets')));

app.use((req, res)=>{

  res.write(parts[0]);

  const stream = renderApp(req.url, {
    onShellReady(){
      // if it is a crawler, do nothing here
      stream.pipe(res);

    },
    onShellError(){

    },
    onAllReady(){
       // if it is a crawler, here
      // stream.pipe(res);

      //last thing to write 
      res.write(parts[1]);
      res.end();
    },
    onError(error){
      console.error(error);
    }
  })
})


app.listen(PORT, ()=>{
  console.log("Server up 🚀", PORT);
})