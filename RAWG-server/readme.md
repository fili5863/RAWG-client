# TODO API with TypeScript and node.js

working with TypeScript:

new project:


```bash
npm init -y
npm install -D ts-node
```

now in package.json:

```json
"scripts": {
    "start": "ts-node src/index.ts"
}
```

now we can run:
```
npm start
```

Express:

```
npm i express
npm i -D typescript @types/node @types/express
```

create typescript compiler configuration file: tsconfig.json

```
tsc --init
```

create .env file:
```
MONGO_URI= "mongodb://localhost:27017/todoDB"
```

Connect to MongoDB:

```javascript
import mongoose from "mongoose";

export default () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));
};
```

## System architecture with deployment

![Architecture](./architecture.png)
