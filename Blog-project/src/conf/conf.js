const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionsId: String(import.meta.env.VITE_COLLECTIONS_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID)
}

export default conf