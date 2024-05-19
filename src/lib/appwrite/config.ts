import {Client,Account,Databases,Storage,Avatars} from "appwrite";

export const appwriteConfig={
    projectID:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url:import.meta.env.VITE_APPWRITE_ENDPOINT,
    databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId:import.meta.env.VITE_APPWRITE_USER_COLLECTIONS_ID,
    postCollectionId:import.meta.env.VITE_APPWRITE_POST_COLLECTIONS_ID,
    savesCollectionId:import.meta.env.VITE_APPWRITE_SAVE_COLLECTIONS_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectID);
client.setEndpoint(appwriteConfig.url);
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)

