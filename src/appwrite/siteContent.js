import { ID } from 'appwrite';
import { appwriteConfig, databases, isAppwriteConfigured } from './client';

const SITE_CONTENT_DOCUMENT_ID = 'site-content';

export async function loadSiteContent() {
  if (!isAppwriteConfigured) return null;

  try {
    const document = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.contentCollectionId,
      SITE_CONTENT_DOCUMENT_ID,
    );
    return document.payload ? JSON.parse(document.payload) : null;
  } catch (error) {
    if (error?.code === 404) return null;
    throw error;
  }
}

export async function saveSiteContent(settings) {
  if (!isAppwriteConfigured) return null;

  const payload = JSON.stringify(settings);

  try {
    return await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.contentCollectionId,
      SITE_CONTENT_DOCUMENT_ID,
      { payload },
    );
  } catch (error) {
    if (error?.code !== 404) throw error;

    return databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.contentCollectionId,
      ID.custom(SITE_CONTENT_DOCUMENT_ID),
      { payload },
    );
  }
}
