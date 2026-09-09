import MenuItem from '../Models/menuitems.js';

// Get all menu items
export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new menu item
export const createMenuItem = async (req, res) => {
  try {
    const newItem = await MenuItem.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};