// controllers/homeController.js
const Project = require('../models/Project');
const Issue = require('../models/Issue');


exports.showHomePage = async (req, res) => {
  try {
    const projects = await Project.find();
    // You can add any additional data fetching logic you need for the home page.
    // For example, fetching recently created projects or issues.

    res.render('home', { projects });
  } catch (err) {
    // Handle errors appropriately
  }
};
