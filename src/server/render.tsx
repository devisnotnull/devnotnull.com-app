import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Router } from '@remix-run/router';
import { Response } from 'express';
import { StaticRouterProvider, StaticHandlerContext } from 'react-router-dom/server';
import Html from '../components/html/html';

export const render = (
  config: unknown,
  router: Router,
  context: StaticHandlerContext,
  res: Response,
  css?: string[]
): string => {
  const response = '';
  const BUILD_PROD = process.env.NODE_ENV === 'production';
  const RUNTIME_PROD = process.env.NODE_RUNTIME_ENV === 'production';

  const rootComponent = BUILD_PROD ? (
    <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
  ) : null;

  let didError = false;
  const stream = renderToPipeableStream(
    <Html
      config={config}
      buildProd={BUILD_PROD}
      runtimeProd={RUNTIME_PROD}
      rootComponent={rootComponent}
      css={css}
    />,
    {
      onShellReady() {
        // The content above all Suspense boundaries is ready.
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError(error) {
        // Something errored before we could complete the shell so we emit an alternative shell.
        console.error(error);
        res.statusCode = 500;
        res.send(
          '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        );
      },
      onAllReady() {
        // If you don't want streaming, use this instead of onShellReady.
        // This will fire after the entire page content is ready.
        // You can use this for crawlers or static generation.
        // res.statusCode = didError ? 500 : 200;
        // res.setHeader('Content-type', 'text/html');
        // stream.pipe(res);
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    }
  );

  // Dispatch a close event so sagas stop listening after they're resolved
  return response;
};
