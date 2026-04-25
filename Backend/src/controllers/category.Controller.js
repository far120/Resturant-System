const Category = require('../models/category');
const logger = require('../utils/Logger');
const asynchandler = require('express-async-handler');
const paginate = require('../middlewares/paginate.middleware');

/**
 * @desc    add a new category
 * @route   POST /api/categories
 * @method  POST
 * @access  Private (admin only)
 */
exports.addCategory = asynchandler(async (req, res) => {
    const name = req.body.name;
    if (!name) {
        logger.error("Category name is required");
        res.status(400);
        throw new Error("Category name is required");
    }
    await Category.create({ name });
    logger.info(`Category ${name} created successfully`);
    res.status(201).json({ message: "Category created successfully" });
});


/**
 * @desc    get all categories
 * @route   GET /api/categories
 * @method  GET
 * @access  Private (admin only)
 */
exports.getCategories = asynchandler(async (req, res) => {
    logger.info("Fetching categories with pagination");
    res.status(200).json(res.paginatedResult);
   
});
