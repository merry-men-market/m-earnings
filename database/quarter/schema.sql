CREATE TABLE quarter (
  company_id INTEGER REFERENCES company(id),
  quarter_name VARCHAR(10) NOT NULL,
  quarter_number SMALLINT,
  actual_earning REAL NOT NULL,
  estimate_earning REAL NOT NULL
);

\COPY quarter FROM '/Users/jeena/hackReactor/hrsf114/merryMenMarket/m-earnings/database/quarter/quarterDetails.csv' WITH DELIMITER ',' CSV;