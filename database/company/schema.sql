CREATE TABLE company (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(100) NOT NULL
);

\COPY company FROM '/Users/jeena/hackReactor/hrsf114/merryMenMarket/m-earnings/database/company/companyDetails.csv' WITH DELIMITER ',' CSV;