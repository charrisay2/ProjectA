
import db from'../models/index'
let getHomePage = async (req, res) => {
  try {
      let data = await db.students.findAll();
     
      return res.render("homePage.ejs", {
        data:JSON.stringify(data) 
    });
  } catch (e) {
      console.log(e);
    return res.status(500).send('Error loading homepage');

  }
};
let GetCruD = (req, res) => {
    return res.render('crud.ejs');
}

let getsth = (req, res) => {
    return res.send('get sth');
} 

// một object luôn có key và value
module.exports = {
    getHomePage: getHomePage,
  GetCruD: GetCruD, 
    getsth: getsth
};
