const app = require('../index');

function courseRouter(app){
    app.get('/course', (req,res)=>{
        res.json({
            "message": "working course router!"
        })
    })
}

module.exports = courseRouter;