const express = require ('express');
const app = express ();
const router = express.Router();
//set up express module
const path = require ('path');
//includes path module

router.get('/',function(req, res){
    res.sendFile(path.join(__dirname,'indexx.html'));
});
app.use('/', router);
//sets up the express router

let server= app.listen (3000, function(){
    console.log("App server via Exxpress is running on port 3000");
    console.log("To end, press Ctrl+C");
});
/*sets up the express server to listen 
on port3000  and logs some messages to
 the console when the server is ready.*/
