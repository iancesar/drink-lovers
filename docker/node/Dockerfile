FROM node:current


RUN mkdir build && cd build/ \
&& git clone https://github.com/iancesar/drink-lovers.git \
&& cd drink-lovers/ \
&& yarn install && yarn run build \
&& chmod -R +rX .; \
	chmod 777 /build

# WORKDIR /

VOLUME [ "build" ]
#COPY build/drink-lovers/dist build