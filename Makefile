LD_LIB_PATH=${LD_LIBRARY_PATH}:./Dependencies/cppcms/prebuilt/linux/x64:./Dependencies/cppcms/prebuilt/linux/x64/booster

.PHONY: all

default: build

build:
	cd Build && \
	cmake .. && \
	make && \
	LD_LIBRARY_PATH=${LD_LIB_PATH} && \
	cd bin && \
	./WebApp -c config.json
