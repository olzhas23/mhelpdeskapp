const Template = require('../models/templates');


// Display list of all templates.
exports.template_list = function(req, res) {
Template.findAll({where: {'isActive':1}, raw: true})
.then(Template => {console.log(Template);
res.json(Template);} )
.catch(err => console.log(err))
};

// Display detail page for a specific template.
exports.template_detail = function(req, res) {
    res.send('Repository template detail: ' + req.params.id);
};

// Display template create form on GET.
exports.template_create_get = function(req, res) {
    res.send('Repository template create GET');
};

// Handle template create on POST.
exports.template_create_post = function(req, res) {
    res.send('Repository template create POST');
};

// Display template delete form on GET.
exports.template_delete_get = function(req, res) {
    res.send('Repository template delete GET');
};

// Handle template delete on POST.
exports.template_delete_post = function(req, res) {
    res.send('template delete POST');
};

// Display template update form on GET.
exports.template_update_get = function(req, res) {
    res.send('Repository template update GET');
};

// Handle template update on POST.
exports.template_update_post = function(req, res) {
    res.send('Repository template update POST');
};