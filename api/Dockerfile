# --- STAGE 1: Build & Publish ---
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Useing of docker caching to cache the dependencies
COPY *.csproj ./
RUN dotnet restore

# Using and copying the ather source code
COPY . .
RUN dotnet publish -c Release -o /app/publish --no-restore

# --- STAGE 2: Runtime ---
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 5202
ENV ASPNETCORE_URLS=http://0.0.0.0:5202

ENTRYPOINT [ "dotnet", "api.dll" ]
