FROM ubuntu:latest AS builder

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /cpp-app

RUN apt-get update && apt-get install -y --no-install-recommends \
    g++ \
    make \
    cmake \
    curl \
    git \
    ca-certificates \
    libboost-dev \
    libssl-dev \
    libasio-dev \
    && rm -rf /var/lib/apt/lists/*

COPY . .

RUN chmod +x ./get-crow.sh && ./get-crow.sh
RUN make clean && make -j$(nproc)

FROM ubuntu:latest AS final

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    libstdc++6 \
    libssl3 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /cpp-app/app /app/

EXPOSE 10000

ENTRYPOINT [ "./app" ]
