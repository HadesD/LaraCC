LD_LIB_PATH=${LD_LIBRARY_PATH}:./Build/bin

.PHONY: build

default: build

build:
	cd Build && \
	cmake .. && \
	make && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	cd bin && \
	./WebApp -c config.json
