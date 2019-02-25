# executive_frontend

## Project setup
```
npm install
```

### Build image for development
```
docker build --no-cache -f Dockerfile.dev -t ms3_executive_frontend_dev .
```

### Run the container for development
```
cd ..
docker-compose -f docker-compose.dev.yml up
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
