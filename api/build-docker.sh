#!/bin/bash

sudo docker build -t api-homepage .
sudo docker run -itd -p 5202:5202 --rm --name my-api-homepage api-homepage
sudo docker save api-homepage > api-homepage.tar
