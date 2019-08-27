const Repository = require('../models/repository');


// Display list of all repositorys.
exports.repository_list = function(req, res) {
   Repository.findAll()
   .then(Repository => {console.log(Repository);
  res.json(Repository);})
  .catch(err => console.log(err))
};

// Handle repository create on POST.
exports.repository_post = function(req, res) {

    const data ={
      id: 1,
      name: 'randome',
      stars: 10,
    }
  
    let {id, name, stars} = data;
    Repoisitory.create({
      id,
      name,
      stars
    })
    .then(Repoisitory => res.redirect('/'))
    .catch(err => console.log(err));
  };

// Display repository delete form on GET.
exports.repository_delete_get = function(req, res) {
    res.send(' repository delete GET');
};

// Handle repository delete on POST.
exports.repository_delete_post = function(req, res) {
    res.send(' repository delete POST');
};

// Display repository update form on GET.
exports.repository_update_get = function(req, res) {
    res.send(' repository update GET');
};

// Handle repository update on POST.
exports.repository_update_post = function(req, res) {
    res.send(' repository update POST');
};