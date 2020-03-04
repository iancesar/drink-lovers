FROM node:current AS node

RUN mkdir build \
&& cd build/ \
&& git clone https://github.com/iancesar/drink-lovers.git \
&& cd drink-lovers/ \
&& yarn install && yarn run build

VOLUME [ "drink-lovers" ]