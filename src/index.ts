// src/index.ts
import express from 'express';

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/', (_req, res) => {
  res.send('<h1>perf-master</h1>');
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});