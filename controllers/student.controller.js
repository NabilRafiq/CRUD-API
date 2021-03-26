const Student = require('../models/student.model');
exports.test = (req, res) => {
    res.send("Welcome to Nabeel's Crud Api")
}
exports.student_create = (req, res) => {
    let product = new Product({
        name: req.body.name,
        section: req.body.section,
        field: req.body.field,
        GPA: req.body.gpa
    });
    student.save((err => {
        if (err) {
            return next(err);
        }
        res.send("Entry Created Successfully.");
    }));

}
exports.student_detail = (req, res) => {
    Student.findById(req.params.id, (err, product) => {
        if (err) return next(err);
        res.send(product);
    })
}
exports.student_update = (req, res) => { 
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,product)=>{
        if(err) return next(err);
        res.send('Record updated');
    });
}
exports.student_delete = (req, res) => { 
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.send('Deleted Successfully!');
    })
}