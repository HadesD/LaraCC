LD_LIB_PATH=${LD_LIBRARY_PATH}:./Build/Bin

.PHONY: build npm

default: build

build:
	cd Build && \
	cmake .. && \
	make && \
	cd Bin && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	./WebApp -c config.json

npm:
	npm run dev
