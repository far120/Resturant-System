const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const {addCategory , getCategories} = require("../controllers/category.Controller");
const asynchandler = require('express-async-handler');
const authorize = require('../middlewares/authorize.middleware');
const authandicate = require('../middlewares/authenticate.middleware');
const paginate = require('../middlewares/paginate.middleware');
const upload = require('../middlewares/uploadMiddleware');

/**
 * @desc    add a new category
 * @route   POST /api/categories
 * @method  POST
 * @access  Private (admin only)
 */

router.post('/' , authorize(['admin']), addCategory )

/**
 * @desc    get all categories
 * @route   GET /api/categories
 * @method  GET
 * @access  Private (admin only)
 */
router.get('/' , authandicate, paginate(Category), getCategories) 





module.exports = router;