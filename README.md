<p align="center">
  <img src=".github/assets/preview.png" alt="Northern Cyprus Christian Tabernacle: home page preview" width="100%">
</p>

#### **OVERVIEW**

---

Official website of the Northern Cyprus Christian Tabernacle, sharing its sermons, songs, books and beliefs across six pages: Home, Sermons, Songs, Books, What We Believe and Contact. Sermons and songs are synchronised from the church's YouTube channel, and the books can be read online or downloaded. The codebase prioritises long-term maintainability, with semantic and accessible markup, strict typing, validated configuration and automated quality checks on every commit.

#### **STACK**

---

The project runs on the Next.js App Router, with React for the interface and TypeScript throughout. Styling uses Tailwind CSS. The site is hosted on AWS, with PostgreSQL for the media data, S3 for the books and Lambda for the YouTube sync. The versions listed are the major releases in use.

> - [x] Next.js 16 (App Router)
> - [x] React 19
> - [x] TypeScript 5
> - [x] Tailwind CSS 4
> - [x] PostgreSQL 17 on Amazon RDS
> - [x] AWS Amplify, S3, SES and Lambda

#### **REQUIREMENTS**

---

The Node.js version is pinned in `.nvmrc` and picked up automatically by version managers such as nvm. Dependencies install with any of the package managers below, although npm matches the lock file used in CI.

> - [x] Node.js 24
> - [x] npm 10 or later, pnpm or Yarn
> - [x] PostgreSQL 17 for local development

#### **GETTING STARTED**

---

Clone the repository, install the dependencies, create the local environment file and start the development server. The pages run with the default values, while the database, YouTube sync and contact email need their own credentials in `.env.local`.

> ```bash
> git clone https://github.com/Makcood/northern-cyprus-christian-tabernacle.git
> cd northern-cyprus-christian-tabernacle
> ```
>
> ```bash
> # npm
> npm ci
> cp .env.example .env.local
> npm run dev
> ```
>
> ```bash
> # pnpm
> pnpm install
> cp .env.example .env.local
> pnpm dev
> ```
>
> ```bash
> # Yarn
> yarn install
> cp .env.example .env.local
> yarn dev
> ```

> [!NOTE]
> Exact dependency versions are locked for npm in `package-lock.json`, which CI also uses. pnpm and Yarn resolve versions independently.

#### **GOOD TO KNOW**

---

The project follows a few conventions that differ from a default Next.js setup. Knowing them up front avoids rejected commits, failed builds and failing CI checks.

> - Staged files are formatted and linted automatically on every commit
> - Environment variables are validated in `config/env.ts`
> - Commit messages follow Conventional Commits
> - `npm run quality:check` runs before every pull request
> - Every merge into `main` deploys automatically on AWS Amplify

#### **LICENCE**

---

The source code is released under the [MIT License](LICENSE).

> [!IMPORTANT]
> The church's content is not covered by this licence. This includes the sermons, songs, lyrics, books, logo, statement of faith and images, which remain the property of the Northern Cyprus Christian Tabernacle and its preachers, and may not be reused without permission.