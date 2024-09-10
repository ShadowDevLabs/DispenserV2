import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import Link from './models/linkSchema.js';
import { config } from 'dotenv';
config();

const initializeLinksAndDB = async () => {
    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGODB_URI, { dbName: 'ShadowDispenser' });
            console.log('Connected to database');
        } catch (error) {
            console.error('Error connecting to database:', error);
        }
    };

    await connectDB();

    const typesFile = new URL('./types.json', import.meta.url).pathname;

    try {
        let Types = fs.readFileSync(typesFile, 'utf8');
        Types = JSON.parse(Types);

        Types.forEach(async (type) => {
            const filePath = new URL(`../links/${type.root}.txt`, import.meta.url).pathname;

            try {
                if (fs.existsSync(filePath)) {
                    const data = fs.readFileSync(filePath, 'utf8');
                    const links = data.split('\n').map(link => link.trim()).filter(link => link);

                    for (const link of links) {
                        const existingLink = await Link.findOne({ url: link, type: type.root });
                        if (!existingLink) {
                            await Link.create({ url: link, type: type.root });
                        }
                    }

                    console.log(`Added All New Links!`);
                } else {
                    fs.writeFileSync(filePath, '', 'utf8');
                    console.log(`Created ${type.root}.txt for type ${type.root}`);
                    console.log(`File ${type.root}.txt not found for type ${type.root}`);
                }
            } catch (error) {
                console.error(`Error processing file ${type.root}.txt:`, error);
            }
        });
    } catch (error) {
        console.error('Error reading types.json:', error);
    }
};

export default initializeLinksAndDB;
