import 'dotenv/config';
import mongoose from 'mongoose';

const findUsersInCluster = async () => {
    try {
        console.log('Connecting to cluster...');
        await mongoose.connect(process.env.MONGODB_URI);
        
        const admin = mongoose.connection.db.admin();
        const { databases } = await admin.listDatabases();
        
        console.log('\nFound Databases in Cluster:');
        for (const dbInfo of databases) {
            const dbName = dbInfo.name;
            const db = mongoose.connection.client.db(dbName);
            const collections = await db.listCollections().toArray();
            const collectionNames = collections.map(c => c.name);
            
            if (collectionNames.includes('users')) {
                const count = await db.collection('users').countDocuments();
                console.log(`- [MATCH] Database: "${dbName}" has "users" collection with ${count} users.`);
            } else {
                console.log(`- Database: "${dbName}" (No "users" collection)`);
            }
        }
        
        await mongoose.disconnect();
        console.log('\nSearch complete.');
    } catch (error) {
        console.error('Error searching cluster:', error);
    }
};

findUsersInCluster();
