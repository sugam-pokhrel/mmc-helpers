import { Client,Storage ,Databases} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64abce6dab638894ef15');


export const databases = new Databases(client);
export const storage = new Storage(client);