const mariadb = require('mariadb')

export async function ConnectDB() {
    const connection= await mariadb.createConnection({
         host: 'localhost',
         user: 'mark',
         password: '0802',
         database: 'mark_house'
      })
    
 //  con.query(`CREATE TABLE NCT (
 //         id INT AUTO_INCREMENT PRIMARY KEY,
 //         name VARCHAR(50) NOT NULL,
 //         email VARCHAR(100) NOT NULL,
 //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 //       )`)
    
     
 }
 
