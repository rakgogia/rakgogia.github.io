import { copyFileSync, mkdirSync } from 'node:fs';

const routes = ['experience', 'education', 'skills', 'travel'];
const indexPath = 'dist/index.html';

copyFileSync(indexPath, 'dist/404.html');

for (const route of routes) {
  const routeDirectory = `dist/${route}`;
  mkdirSync(routeDirectory, { recursive: true });
  copyFileSync(indexPath, `${routeDirectory}/index.html`);
}
