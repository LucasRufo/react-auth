﻿USE AppDatabase
GO

CREATE TABLE Users (
	Id			VARCHAR(30)		NOT NULL	PRIMARY KEY,
	Email		VARCHAR(100)	NOT NULL, 
	Password	VARCHAR(100)	NOT NULL,
)