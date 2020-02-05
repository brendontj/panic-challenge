# Panic Intership Challenge  (Back-end)

To run the back-end I recommend using the **Docker** . 
([Docker](https://www.docker.com/why-docker))

# First step
- After clone the project remove the ***.example***  extension in config.js.example file, and set the variables with your credentials of [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

- So, after this change the string connection on file **src/index.js** using this layout by the string defined in your cluster: 

```javascript
mongoose.connect(`mongodb+srv://${mongoCredentials.username}:${mongoCredentials.password}@cluster0-oqsu2.mongodb.net/test?retryWrites=true&w=majority`,{ 
 useNewUrlParser: true,
 useUnifiedTopology: true
});
```


# Using Docker

## Requirements 
- Docker (version 18.09.7)

## Step by step
- Build the image
 ``` zsh 
$ docker build -t <your_username>/<image_name> .
```
- Run the image
 ``` zsh 
$  docker run -p <port>:3333 -d <your_username>/<image_name>
   ``` 
```bash
# Get container ID
$ docker ps
```
- Check if the server is running 
```bash

$ docker logs <container_id>

# Output: 
Running on http://localhost:3333
```

# Without Docker

## Requirements 

- Node.js (version 12.14.1)
- NPM (version  6.13.4) or Yarn (version 1.21.1)

## Step by step 

- First, after clone the project install the dependencies using yarn or npm.

``` bash 
$ yarn install
```
or 
``` bash
$ npm install 
```

- After the last step, run the **index.js**.
``` bash
$ node src/index.js
```

- Check if the server is running with the output in your terminal:
```bash
#Output
Running on http://0.0.0.0:3333
```  