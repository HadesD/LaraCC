# Website project in C++

Module and file struct like Laravel - Base on CppCMS

[![Build Status](https://travis-ci.org/HadesD/CppCMS.svg?branch=master)](https://travis-ci.org/HadesD/CppCMS)

# Installation:

**Ubuntu**

```bash
sudo apt-get install build-essential libpcre3-dev libicu-dev libgcrypt11-dev zlib1g-dev cmake
```

**OSX**

```bash
brew install pcre icu4c libgcrypt zlib cmake
```

1. **Clone and Pull submodule**

```bash
git clone https://github.com/HadesD/CppCMS.git web
cd web
git submodule update --init --recursive
```

2. Build CppCMS Lib

```bash
cd build
cmake ../cppcms
make
sudo make install && sudo rm -r *
```

3. Build CppDB

```bash
cd build
cmake ../cppdb
make
sudo make install && sudo rm -r *
```

4. Run
```bash
./server.sh
```
