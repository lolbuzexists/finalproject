INSERT INTO Comics ("title", "isbn13", "pDate","seID", "pageID", "gID", "coID")
VALUES ("Sonic the Hedgehog, Vol. 1: Fallout!", "978-1684053278", "18.9.2018", 1, 1, 1, 1), ("Batman: The Long Halloween", "2978-14012325972", "11.10.2011", 2, 2, 2, 2), ("Spider Man Miles Morales vol 1", "978-0785199618", "6.9.2016", 3, 3, 2, 3);

INSERT INTO Genre ("genre")
VALUES ("adventure"), ("action");

INSERT INTO People ("first_name", "last_name", "rID", "seID")
VALUES ("Ian", "Flynn", 1, 1), ("Tracy", "Yardley", 2, 1), ("Adam", "Thomas", 2, 1), ("Jeff", "Loeb", 1, 2), ("Tim", "Sale", 2, 2), ("Brian", "Bendis", 1, 3), ("Sara", "Pichelli", 2, 3);

INSERT INTO Roles ("role_name")
VALUES ("author"), ("illustrator");

INSERT INTO Characters ("name", "seID")
VALUES ("Sonic", 1), ("Tails", 1), ("Eggman", 1), ("knuckles", 1), ("Amy", 1), ("Batman", 2), ("Jim Gordon", 2), ("Harvey Dent", 2), ("Catwoman", 2), ("Miles Morales", 3), ("Black Cat", 3);

INSERT INTO Series ("series")
VALUES ("Sonic The Hedgehog"), ("Batman");

INSERT INTO Publisher ("company")
VALUES ("IDW"), ("DC"), ("Marvel");

INSERT INTO Pages ("pCount")
VALUES (104), (384), (112);