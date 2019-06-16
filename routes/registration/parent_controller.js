var parent = require('./parent_model');
var emailController = require('./EmailController')

exports.list_all_parents = function(req, res) {
  parent.getAllParent(function(err, parent) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', parent);
    res.send(parent);
  });
};


exports.create_a_parent = function(req, res) {

  var new_parent = new parent(req.body);
 
   if(!new_parent.child_enrollment || !new_parent.email_id || parent.child_class ||  parent.category){
            res.status(400).send({ error:true, message: 'Please provide all the details child_enrollment, email_id, child_class, category' });
        }
else {
  
    parent.createParent(new_parent, function(err, parent) {
    if (err)
    {
      res.send(err);
    }
    else
    {
       console.log ("sending mail to" + new_parent.email_id);
       emailController.sendMail(new_parent.email_id, "Registration mail  subject", "Registration mail content");
       res.json(parent);

  //email verification function  
    //
  }
  });
}
};


exports.read_a_parent = function(req, res) {
  parent.getParentById(req.params.parentId, function(err, parent) {
    if (err)
      res.send(err);
    res.json(parent);
  });
};


exports.update_a_parent = function(req, res) {
  parent.updateById(req.params.parentId, new parent(req.body), function(err, parent) {
    if (err)
      res.send(err);
    res.json(parent);
  });
};







exports.delete_a_parent = function(req, res) {


  parent.remove(req.params.parentId, function(err, parent) {
    if (err)
      res.send(err);
    res.json({ message: 'parent successfully deleted' });
  });
};
