FROM ubuntu:22.04
RUN set -x \
	&& apt-get update \
	&& apt-get install -y \
  curl \
	unzip \
	# && apt-get -y install linux-image-5.15.0-46 \
	&& curl -fsSL https://bun.sh/install | bash 
	# && rm -rf /var/lib/apt/lists/* \
# ENV BUN_INSTALL="$HOME/.bun"
COPY path.sh .
RUN /path.sh
# ENV PATH="$BUN_INSTALL/bin:$PATH"
