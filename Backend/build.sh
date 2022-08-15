#!/bin/bash

wget https://packages.microsoft.com/config/debian/11/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-5.0
  
dotnet build

dotnet new tool-manifest

dotnet tool install --local dotnet-ef --version 5.0.5

dotnet dotnet-ef database update 

