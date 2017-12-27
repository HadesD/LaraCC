#!/bin/sh

cd Build/Bin/Release &&
  export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:./ &&
  ./WebApp -c config.json --service-port=$1

