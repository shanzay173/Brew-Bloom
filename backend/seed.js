import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import connectDB from './config/db.js';
import MenuItem from './Models/menuitems.js';

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log('Connected to database...');

    // Clear existing data
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items...');

    // Read JSON file
    const jsonPath = 'c:\\Users\\shanh\\Downloads\\brew_bloom_menu.json';
    const jsonData = fs.readFileSync(jsonPath, 'utf-8');
    const menuItems = JSON.parse(jsonData);

    // Insert menu items
    const result = await MenuItem.insertMany(menuItems);
    console.log(`✓ Successfully seeded ${result.length} menu items to database`);
    console.log('Menu items by category:');
    const categories = await MenuItem.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    categories.forEach(cat => {
      console.log(`  - ${cat._id}: ${cat.count} items`);
    });
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();