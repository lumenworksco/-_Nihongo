# Contributing

Thanks for helping improve Nihongo!

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase / VAPID values (optional for offline use)
npm run dev
```

## Before opening a PR

```bash
npm run lint
npm test
npm run build
```

- Keep changes focused; one topic per PR.
- Match the existing code style (TypeScript, Tailwind, functional React).
- Never commit secrets. `.env.local` is gitignored.
- Content fixes (vocabulary, grammar, kanji) live in `src/data/`; please cite a source for corrections.

## Reporting bugs

Use the issue templates. For security issues see [SECURITY.md](SECURITY.md).
