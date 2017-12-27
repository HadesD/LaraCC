LD_LIB_PATH=${LD_LIBRARY_PATH}:./Build/Bin

.PHONY: build

default: dev

# Dev
dev:
	cd Build && \
	cmake .. -DCMAKE_BUILD_TYPE=Debug && \
	make && \
	cd Bin && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	./WebApp -c config.json --service-port=9081

build: np
	cd Build && \
	cmake .. -DCMAKE_BUILD_TYPE=Release && \
	make && \
	cd .. && make db

nd:
	npm run dev

np:
	npm run prd

db:
	python tools/create_database.py