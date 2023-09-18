// controllers/issueController.js
const Issue = require('../models/Issue');
const Project = require('../models/Project');

exports.showIssueForm = (req, res) => {
  const projectId = req.params.id;
  const project = Project.findById(projectId);
  console.log(project);
  res.render('create-issue', { projectId, project });
};

exports.createIssue = async (req, res) => {
  try {

    //console.log(projectId);

    const { title, description, labels, author, projectId } = req.body;
    const issue = new Issue({ title, description, labels: labels.split(','), author, projectId });
    await issue.save();
    res.redirect(`/projects/${projectId}`);
  } catch (err) {
    // Handle validation errors or other issues
  }
};
