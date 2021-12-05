const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  express.static(
    path.resolve(__dirname, './build') // index, css, js, img static
  )
);

app.get('/*', (req, res, next) => {
  try {
    const indexFile = path.resolve(__dirname, './build/index.html');
    fs.readFile(indexFile, 'utf-8', (err, html) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send('Error 500');
      }

		  return res
        .status(200)
        .send(html);
	  });
  } catch (error) {
    return next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server express listening on: ${PORT}`);
});
