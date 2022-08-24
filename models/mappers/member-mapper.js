const memberMapper = (memberRow) => {

  return {
    id: memberRow['id'],
    pseudo: memberRow['pseudo'],
    email: memberRow['email'],
    mdp: memberRow['mdp'],
    date_de_naissance: memberRow['date_de_naissance'],
    genre: memberRow['genre'],
    rank: memberRow['rang'],
    role: memberRow['role'] 
  }

}

module.exports = { memberMapper }