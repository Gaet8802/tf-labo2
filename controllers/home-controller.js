const homeModel = require("../models/home-model");
const { getErrorMessage } = require("../utils/error-utils");
const { articleSchema } = require("../validators/article-validator");

const homeController = {
  index: (req, res) => {
    // Affichage de la liste des articles
    homeModel.getAll().then((article) => {
      res.render("home/index", {
        title: "shoppingList",
        article,
      });
    });
  },

  articleFormPost: (req, res) => {
    // Permet de traiter les données du formulaire
    articleSchema
      .validate(req.body, { abortEarly: false })
      .then((data) => {
        homeModel
          .insert({
            pseudo: data.pseudo,
          })
          .then((id) => {
            console.log("Article : " + id);
          });
        res.redirect("/");
      })
      .catch((validationError) => {
        console.log(validationError);
        const errors = getErrorMessage(validationError);
        const data = validationError.value;

        res.render("home/index", {
          title: "Corrige ton article",
          errors,
          data,
        });
      });
  },
  memberPost: (req, res) => {
    homeModel
      .insertMember(req.body, {
        pseudo: req.body.pseudo,
        email: req.body.email,
        mdp: req.body.mdp,
        date_de_naissance: req.body.date_de_naissance,
        genre: req.body.genre,
        rank: req.body.rank,
        role: req.body.role
      }, res.status(200).json(req.body))
      
      .catch((error) => {
        
      });
  },
  delete: (req, res) => {
    const { id } = req.params;
    homeModel
      .delete(id)
      .then(() => console.log("OK"))
      .catch((error) => {
        console.log(error);
      });
    res.redirect("/");
  },
};

module.exports = homeController;
