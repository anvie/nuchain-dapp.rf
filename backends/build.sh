#!/usr/bin/env bash


cargo +nightly contract build

cp target/ink/metadata.json ../frontends/web/assets/$name_snake_case$.json
