# My Blog

My Blog source - Powered by CppCMS

[![Build Status](https://travis-ci.org/HadesD/CppCMS.svg?branch=master)](https://travis-ci.org/HadesD/CppCMS)

## Feature

- Single Page Application (HyperApp)
- Very Fast and Lightweight (Written in modern C++)
- Render time in tick-tac

## Requirements

- NodeJS (ES5)
- NPM
- GCC/G++ (>=4.9)
- Python (2.7)
- CMake (>=3.1)

## Installation:

- CLONE THIS REPO TO YOUR COMPUTER/DEPLOYMENT ENVIRONMENT

### Create database file

```sh
python tools/create_database.py
```

### node_modules

```sh
npm install
make dev
# or (Product)
make prd
```

### Build WebApp.exe and skin library

```sh
make
```

## License

MIT
(c) Hai Le (a.k.a Dark.Hades)

