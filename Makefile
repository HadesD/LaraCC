LD_LIB_PATH=${LD_LIBRARY_PATH}:./Build/bin

.PHONY: build npm

default: build

build:
	cd Build && \
	cmake .. && \
	make && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	cd Bin && \
	./WebApp -c config.json

npm:
	npm run dev
