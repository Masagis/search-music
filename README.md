# ReactJS Application NGMUSIC!

Repositori ini adalah codebase Frontend project search itunes

## Get Started

1. Install [Node.js v16.20](https://nodejs.org/en/) atau diatasnya
2. Install [Yarn v1.22](https://yarnpkg.com/) atau diatasnya
3. Clone repositori ini
4. Jalankan perintah `yarn install` atau `npm install`
5. Jalankan perintah `yarn serve` atau `npm run serve`
6. Akses web di `http://localhost:3000`

## Folder Structure

- `public`: berisi asset yang bisa akses public
- `src`: berisi semua folder pendukung
  - `components`: berisi reusable komponen yang dipakai di banyak tempat
  - `routes`: default routes. Disini tidak boleh ada file/folder lain selain untuk routes.

### Important Branch

Branch `develop` adalah default branch. Setiap kali developer ingin membuat branch baru yang ter-update, **_maka wajib membuat dari branch develop sebagai source_**

### Commit Rule

Berikan pesan commit dengan template berikut:
`type(scope): message`

- `type`:
  - `feat`: jika yang dilakukan ada membuat fitur baru.
  - `fix`: jika yang dilakukan adalah fixing major bug.
  - `hot-fix`: jika yang dilakukan adalah fixing minor bug.
  - `docs`: jika yang dilakukan adalah update readme.
- `scope`: mendeskripsikan bagian yang terkena dampak perubahan code.
- `message`: pesan commit secara singkat yang mendeskripsikan perubahan yang dilakukan.

```
Contoh:
- feat(login): add layouting login
- feat(approval): add detail section
- fix(konfirmasi): refactor code if else kondisi
- docs(main readme): update folder structure
```
