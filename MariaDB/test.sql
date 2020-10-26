UPDATE `books` SET
`title` = 'Sapiens'
WHERE `id` = '2';

UPDATE `books` SET
`authors` = 'Steven Erikson, Ian Esslemont'
WHERE `id` = '4';

UPDATE `books` SET
`title` = 'Malazan Book of the Fallen: Gardens of the Moon'
WHERE `id` = '4';

DELETE FROM `books` WHERE `id` = '3'