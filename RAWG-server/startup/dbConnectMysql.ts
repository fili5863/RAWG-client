import { AppDataSource } from './data-source';

const dbConnectMySql = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database cnnection successful');
  } catch (err) {
    console.log(err);
  }
};

export default dbConnectMySql;
