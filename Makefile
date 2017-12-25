LD_LIB_PATH=${LD_LIBRARY_PATH}:./Build/Bin

.PHONY: build

default: build

build:
	cd Build && \
	cmake .. && \
	make && \
	cd Bin && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	./WebApp -c config.json

dev:
	npm run dev

prd:
	npm run prd

db:
	python tools/create_database.py