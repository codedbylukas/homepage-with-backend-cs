#!/bin/bash


docker rm -f my-frontend-homepage || true
sudo docker build -t frontend-homepage .
sudo docker run -itd -p 80:80 --rm --name my-frontend-homepage frontend-homepage
sudo docker save frontend-homepage > frontend-homepage.tar
