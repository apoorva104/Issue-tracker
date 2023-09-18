// controllers/projectController.js
const Project = require('../models/Project');
const Issue=require('../models/Issue');
exports.listProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('home', { projects });
  } catch (err) {
    // Handle errors appropriately
  }
};

exports.showProjectForm = (req, res) => {
  res.render('create-project');
};

exports.createProject = async (req, res) => {
  try {
    const { name, description, author, labels } = req.body;
    const project = new Project({ name, description, author, labels: labels.split(',') });
    await project.save();
    res.redirect('/');
  } catch (err) {
    // Handle validation errors or other issues
  }
};

exports.showProjectDetails = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      // Handle project not found
    }
    const issues = await Issue.find({ projectId });
    // Fetch related issues and render project details
    res.render('project-details', { project, issues });
  } catch (err) {
    // Handle errors appropriately
  }
};

// app.get('/projects/:projectId', async (req, res) => {
//   try {
//     const projectId = req.params.projectId;

//     // Assuming you fetch 'issues' related to the project from a database or another data source
//     const issues = await Issue.find({ projectId }); // Adjust your database query accordingly

//     // Fetch the project details as well
//     const project = await Project.findById(projectId);

//     // Render the 'project-details.ejs' view and pass 'issues' and 'project' as variables
//     res.render('project-details', { issues, project });
//   } catch (err) {
//     // Handle errors appropriately
//   }
// });