DROP DATABASE IF EXISTS earning_database;

CREATE DATABASE earning_database;

CREATE TABLE Earnings (
  id SERIAL PRIMARY KEY NOT NULL,
  company_id INTEGER NOT NULL,
  company_name VARCHAR(100) NOT NULL,
  ticker VARCHAR(15) NOT NULL,
  quarter_name VARCHAR(10) NOT NULL,
  quarter_number SMALLINT,
  actual_earning REAL NOT NULL,
  estimate_earning REAL NOT NULL
);

\COPY earnings FROM 'hackReactor/hrsf114/merryMenMarket/m-earnings/database/Earning/dataFile.csv' WITH DELIMITER ',' CSV;

COPY "earnings"."earnings" ("id", "company_id", "company_name", "ticker", "quarter_name", "quarter_number", "actual_earning", "estimate_earning") FROM '/Users/jeena/hackReactor/hrsf114/merryMenMarket/m-earnings/database/Earning/dataFile.csv' WITH DELIMITER=',' AND HEADER = FALSE;