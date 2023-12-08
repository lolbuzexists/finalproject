SELECT title FROM Comics INNER JOIN Pages ON Pages.id = Comics.pageID WHERE Pages.pCount = 112;

SELECT first_name, last_name FROM People INNER JOIN Roles ON Roles.id = People.rID WHERE Roles.role_name = "author";

SELECT title FROM Comics INNER JOIN Genre ON Genre.id = Comics.gID WHERE Genre.genre = "action";

SELECT name FROM Characters INNER JOIN Comics ON Comics.seID = Characters.seID INNER JOIN Series ON Series.id = Characters.seID WHERE Comics.title = "Batman: The Long Halloween"; 

SELECT People.first_name, Roles.role_name, Comics.title FROM People INNER JOIN Comics ON Comics.id = People.seID INNER JOIN Roles ON Roles.id = People.rID WHERE Comics.title LIKE "%Sonic%";

SELECT title FROM Comics INNER JOIN Publisher ON Comics.coID = Publisher.id WHERE Publisher.company = "Marvel";

SELECT title FROM Comics INNER JOIN Genre ON Genre.id = Comics.gID INNER JOIN Publisher on Publisher.id = Comics.coID WHERE Publisher.company = "DC" AND Genre.genre = "action"; 

SELECT company FROM Publisher INNER JOIN Comics ON Comics.coID = Publisher.id INNER JOIN People ON People.seID = Comics.id WHERE People.first_name = "Ian";

SELECT name FROM Characters WHERE name LIKE "%c%";

SELECT title FROM Comics INNER JOIN Pages ON Pages.id = Comics.pageID WHERE Pages.pCount > 150;

SELECT Roles.role_name, People.first_name FROM Roles INNER JOIN People ON People.rID = Roles.id WHERE People.first_name LIKE "%i%";

SELECT name FROM Characters INNER JOIN Series ON Series.id = Characters.seID WHERE Series.series = "Five Nights At Freddys";

SELECT name FROM Characters ORDER BY name ASC;