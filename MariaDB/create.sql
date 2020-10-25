CREATE OR REPLACE TABLE books (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    authors varchar(255) NOT NULL,
    publish_date date NOT NULL,
    CONSTRAINT books_pk PRIMARY KEY (id)
);

CREATE OR REPLACE TABLE books_log (
    action varchar(8) NOT NULL,
    revision int NOT NULL,
    timestamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id int NOT NULL ,
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    authors varchar(255) NOT NULL,
    publish_date date NOT NULL,
    PRIMARY KEY (id,revision)
);

ALTER TABLE books_log
ADD INDEX(revision);

ALTER TABLE books_log
MODIFY COLUMN revision int NOT NULL AUTO_INCREMENT;

CREATE OR REPLACE TRIGGER books_log_insert AFTER INSERT ON books FOR EACH ROW
    INSERT INTO books_log SELECT 'insert', NULL, NOW(), d.* 
    FROM books AS d WHERE d.id = NEW.id;

CREATE OR REPLACE TRIGGER books_log_update AFTER UPDATE ON books FOR EACH ROW
    INSERT INTO books_log SELECT 'update', NULL, NOW(), d.*
    FROM books AS d WHERE d.id = NEW.id;

CREATE OR REPLACE TRIGGER books_log_delete BEFORE DELETE ON books FOR EACH ROW
    INSERT INTO books_log SELECT 'delete', NULL, NOW(), d.* 
    FROM books AS d WHERE d.id = OLD.id;
