import React from 'react';
import Express, { Response, Request } from 'express';
import store, { RootState } from '../src/store';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const app = Express();
const port = 3000;

app.use('/static', Express.static('static'));
console.log('server');
function handleRender(req: Request, res: Response) {
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const preloadState = store.getState();
  console.log(renderFullPage(html, preloadState));
  res.send(renderFullPage(html, preloadState));
}

function renderFullPage(html: string, preloadState: RootState) {}

app.use(handleRender);

app.listen(port);
