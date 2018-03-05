LD_LIB_PATH=${LD_LIBRARY_PATH}:./Build/Bin

.PHONY: build

default: dev

# Dev
dev:
	cd build && \
	cmake .. -DCMAKE_BUILD_TYPE=Debug && \
	make && \
	cd ../bin/Debug && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	./WebApp -c config.json --service-port=9081

build: prd npm.prd db
	cd bin/Release && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	./WebApp -c config.json --service-port=9081

prd:
	cd build && \
	cmake .. -DCMAKE_BUILD_TYPE=Release && \
	make

npm.dev:
	npm run dev --report

npm.prd:
	npm run build --report

db:
	python tools/create_database.py

