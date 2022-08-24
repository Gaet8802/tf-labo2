DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (

`id` int(11) NOT NULL AUTO_INCREMENT,

`pseudo` varchar(50) NOT NULL,

`email` varchar(255) NOT NULL,

`mdp` varchar(255),

`date_de_naissance` DATE,

`genre` varchar(5),

`rang` int(4),

`role` varchar(5),


CONSTRAINT Pk_article PRIMARY KEY (`id`),

CONSTRAINT CK_message__pseudo CHECK (TRIM(pseudo) NOT LIKE email),
CONSTRAINT CK_message__email CHECK (TRIM(email) NOT LIKE pseudo)

)

INSERT INTO `member` (`id`, `pseudo`, `email`,`mdp`,`date_de_naissance`,`genre`,`rang`,`role`) VALUES

(1, 'dddddddd', 'gg@gmail.com' , SHA1('turfumdp'), '2022-08-08 15:11:43', 'homme', '1200', 'user'),

(2, 'aaaaaaaaaaaaaaaa', 'giig@gmail.com' , SHA1('onycrois'), '2022-05-08 15:11:43', 'homme', '1500', 'user'),

(3, 'didodia', 'gg@gmail.com' , SHA2('unedinguerie',256), '2022-04-08 15:11:43', 'femme', '0', 'user'),

(4, 'oliiiii', 'gaaaagner@gmail.com' , SHA1('unedinguerie2.0'), '2022-08-08 15:11:43', 'homme', '1200', 'user');