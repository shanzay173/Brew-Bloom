import express from 'express';
import { getMenuItems, createMenuItem } from '../Controllers/menuControllers.js';

const router = express.Router();

router.get('/', getMenuItems);
router.post('/', createMenuItem);

export default router;