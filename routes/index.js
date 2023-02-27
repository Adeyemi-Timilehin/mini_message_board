const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini message board',messages:messages });
});

//router to fill a form
router.get('/new',(req,res, next)=>{
  res.render('form',{ title: 'mini message board'})
  })

  //router to post and treat the form
  router.post('/new', (req, res, next) => {
    const newMessage = {
      text: req.body.messageText,
      user: req.body.author,
      added: new Date()
    };
    
    messages.push(newMessage);
    res.redirect('/');
  });
  
module.exports = router;
