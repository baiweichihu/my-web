import { Client, Databases } from 'appwrite';

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT ?? '',
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID ?? '',
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID ?? '',
  contentCollectionId: import.meta.env.VITE_APPWRITE_CONTENT_COLLECTION_ID ?? '',
};

export const isAppwriteConfigured = Boolean(
  appwriteConfig.endpoint &&
  appwriteConfig.projectId &&
  appwriteConfig.databaseId &&
  appwriteConfig.contentCollectionId,
);

export const appwriteClient = new Client();

if (appwriteConfig.endpoint && appwriteConfig.projectId) {
  appwriteClient
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);
}

export const databases = new Databases(appwriteClient);
