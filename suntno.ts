const connection: MongoClient = await MongoClient.connect(
  `mongodb://${config.db.host}:${config.db.port}`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);  
