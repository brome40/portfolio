Create Table Customer
	(CustID INTEGER NOT NULL UNIQUE,
	FirstName VARCHAR(12) NOT NULL,
	LastName VARCHAR(14) NOT NULL,
Constraint Customer_PK Primary Key (CustID)		);

Create Table Vehicle
	(VIN VARCHAR(10) NOT NULL UNIQUE,
	Make VARCHAR(15),
	Model VARCHAR(29),
	CustID INTEGER NOT NULL,
Constraint Vehicle_PK Primary Key (VIN),
Constraint Vehicle_FK Foreign Key (CustID) References Customer(CustID)	);

Create Table Repair
	(RepairID INTEGER NOT NULL UNIQUE,
	StartDate DATE,
	FinishDate DATE,
	CustID INTEGER NOT NULL,
	VIN VARCHAR(10) NOT NULL,
Constraint Repair_PK Primary Key (RepairID),
Constraint Repair_FK1 Foreign Key (CustID) References Customer(CustID),
Constraint Repair_FK2 Foreign Key (VIN) References Vehicle(VIN)		);

