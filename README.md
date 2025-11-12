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


Bisa digunakan untuk melihat riwayat/history commit versi private
```bash
$ git reflog
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

## Synchronization

digunakan untuk sinkronisasi dari lokal ke remote

```bash
$ git push [-u] <remote> <branch_local>
```

digunakan untuk sinkronisasi dari remote ke lokal

```bash
$ git pull <target_remote> <branch_remote>
```

## Copy Remote Repository to Local Computer

Digunakan untuk meng-kloning remote repo

```bash
$ git clone <link_remote> [<custom_name>]
```

Ketika di clone, link_remote langsung di set menjadi remote origin

## Undoing Changes

Konsep membalikkan waktu ke <span style="background-color: yellow;color:black">***id_commit***</span> tertentu untuk merubah history/riwayat git. <span style="background-color: yellow;color:black">***id_commit***</span> menjadi ***HEAD*** yang terbaru

```bash
$ git reset <id_commit>
```

Konsep yang menghilangkan history dengan <span style="background-color: yellow;color:black">***id_commit***</span> tertentu dengan history baru

```bash
$ git revert <id_commit>
```