const { createConnection } = require("../utils/db-utils");
const { articleMapper } = require("./mappers/member-mapper");

const homeModel = {
  getAll: async () => {
    const db = await createConnection();

    const query = `SELECT * FROM article ORDER BY createdAt ASC`;

    const result = await db.query(query);

    db.end();

    return result.map((row) => articleMapper(row));
  },

  insert: async ({ content }) => {
    let db;
    try {
      db = await createConnection();

      const query = `INSERT INTO article (content) VALUES (?)`;
      const result = await db.query(query, content);
      return result.insertId;
    } catch (error) {
    } finally {
      db.end();
    }
  },
  
  insertMember: async ({
    pseudo,
    email,
    mdp,
    date_de_naissance,
    genre,
    rang,
    role,
  }) => {
    const db = await createConnection();

      const query = `SELECT * FROM member WHERE email LIKE ? OR pseudo LIKE ?`;

      const result = await db.query(query, [pseudo, email]);

      console.log(result);
    db.end()
      if(result.length === 0){

        const db = await createConnection();
        
        console.log("heyyyy");

        const secondQuery = `INSERT INTO member (pseudo,email,mdp,date_de_naissance,genre,rang,role) VALUES(?, ?, SHA2(?, 256), ?, ?, ?, ?)`;

        const secondResult = await db.query(secondQuery, [
          pseudo,
          email,
          mdp,
          date_de_naissance,
          genre,
          rank,
          role,
        ]);
    
        const newUser = await db.query("SELECT * FROM member WHERE id = ?", [
          secondResult.insertId,
        ]);
        console.log(newUser);
        db.end();
      }
      else{
        db.end()
      }
    
    
    
  },

  delete: async (id) => {
    let db;
    try {
      db = await createConnection();

      const query = "DELETE FROM article WHERE id = ?";
      const result = await db.query(query, [id]);
    } catch (error) {
      console.log(error);
    } finally {
      db.end();
    }
  },
};

module.exports = homeModel;
