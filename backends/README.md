# $name$

$param.description$

This source code generated using [Reframe](https://github.com/ansvia/reframe) project generator tool using this [template](https://github.com/ansvia/nuchain-dapp.rf).

// @TODO(me): Add more information here

## Feature

* ...
* ...
* ...

## Test

```bash
$ cargo +nightly test
```

## Build

```bash
$ ./build.sh
```

CATATAN: Pastikan Anda sudah menginstall `cargo-contract`, apabila belum Anda bisa menginstallnya dengan perintah: `cargo install cargo-contract`

Setelah proses build selesai maka akan ditemukan file `$name_kebab_case$.contract` di direktori `target/ink`:

```bash
target/ink
├── CACHEDIR.TAG
├── metadata.json
├── release
├── $name_kebab_case$.contract
├── $name_kebab_case$.wasm
└── wasm32-unknown-unknown
```

File `$name_kebab_case$.wasm` adalah Wasm binary dari app ini, `metadata.json` berisi informasi metadata dari app ini, kemudian `$name_kebab_case$.contract` merupakan gabungan dari keduanya.

File `$name_kebab_case$.contract` bisa Anda deploy melalui [dashboard.nuchain.network](https://dashboard.nuchain.network/), untuk langkah-langkahnya bisa baca di [cara deploy Nuchain App](https://github.com/nusantarachain/nuchain/wiki/Nuchain-App).


