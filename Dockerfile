FROM iancesarvidinha/drink-lovers:latest

MAINTAINER iancesarvidinharego@gmail.com

RUN ["chmod", "774", "/build/build.sh"]

RUN /build/build.sh