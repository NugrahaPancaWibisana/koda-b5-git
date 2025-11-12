# PRAKTEK GIT

## Inisialisasi GIT

```bash
$ git init
```

## Perubahan Sementara (STAGING)

Menyimpan perubahan sementara dari working directory ke dalam staging area

```bash
$ git add <...dir_file>
$ git add <...dir_folder>
$ git add .
```

## Perubahan Permanen (COMMIT)

menyimpan seluruh staging menjadi permanen

```bash
$ git commit
$ git commit -m '<message>'
$ git commit -am '<message>'
```

## Pengecekan Status Working Directory

bisa di gunakan untuk melihat status baik yang sudah di staging area ataupun belum

```bash
$ git status
```

bisa digunakan untuk melihat riwayat commit

```bash
$ git log
```

## Manajemen Git Remote

digunakan untuk menghubungkan antara git yang di komputer lokal dengan git yang ada di penyedia layanan git (github, gitlab, dll..)

```bash
$ git remote add <alias> <link_alamat_repo>
```

digunakan untuk melihat list remote

```bash
$ git remote
```

digunakan untuk melihat isi dari alias remote

```bash
$ git remote get-url <alias_remote>
```

## Synchornization

digunakan untuk sinkronisasi dari lokal ke remote

```bash
$ git push [-u] <remote> <branch_local>
```

digunakan untuk sinkronisasi dari remote ke lokal

```bash
$ git pull <target_remote> <branch_remote>
```
