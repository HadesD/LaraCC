NPROCS:=1
OS:=$(shell uname -s)

# ifeq($(OS),'Linux')
NPROCS:=$(shell grep -c ^processor /proc/cpuinfo)
# endif
# ifeq($(OS),'Darwin') # Assume Mac OS X
# NPROCS:=$(shell system_profiler | awk '/Number Of CPUs/{print $4}{next;}')
# endif

.PHONY: build

default: dev

# Dev
dev:
	echo "Use ${NPROCS} cpus" \
		&& cd build && \
		cmake .. -DCMAKE_BUILD_TYPE=Debug && \
		make -j ${NPROCS} && \
		cd ../bin/Debug && \
		./WebApp -c config.json --service-port=9081

build: prd npm.prd db
	cd bin/Release && \
		./WebApp -c config.json --service-port=9081

prd:
	cd build && \
		cmake .. -DCMAKE_BUILD_TYPE=Release && \
		make -j ${NPROCS}

npm.dev:
	npm run dev --report

npm.prd:
	npm run build --report

db:
	python tools/create_database.py

