# SAP Tables

Tables are database objects that store SAP data. Each table has a specific structure with defined fields and is used to store particular types of information within the SAP system.

## Understanding SAP Tables

SAP tables are the foundation of data storage in SAP systems. They:

- Store business data in a structured format
- Have defined fields with specific data types
- Can be related to other tables through key fields
- Are accessed by SAP transactions and programs

## Table Categories

SAP tables can be categorized based on their purpose and usage:

### Transparent Tables

Transparent tables have a one-to-one correspondence with database tables. They are the most common type of tables in SAP.

**Examples:**
- MARA (Material Master: General Data)
- KNA1 (Customer Master: General Data)
- BKPF (Accounting Document Header)

### Pooled Tables

Pooled tables are stored together in a table pool to optimize database performance. Multiple logical tables share the same physical table space.

**Examples:**
- CDPOS (Change Document Items)
- NRIV (Number Range Intervals)

### Cluster Tables

Cluster tables group related data together and store it in a compressed format. They are used for data that is frequently accessed together.

**Examples:**
- PCL1 (Personnel Calendar Data)
- INDX (Index Table for Various Applications)

## Common SAP Tables by Module

### Financial Accounting (FI)

| Table | Description | Key Fields | Related T-Codes |
|-------|-------------|------------|-----------------|
| BKPF  | Accounting Document Header | BUKRS, BELNR, GJAHR | FB01, FB03 |
| BSEG  | Accounting Document Segment | BUKRS, BELNR, GJAHR, BUZEI | FB01, FB03 |
| SKA1  | G/L Account Master (Chart of Accounts) | KTOPL, SAKNR | FS00, OB_GLACC |
| SKAT  | G/L Account Master Text | SPRAS, KTOPL, SAKNR | FS00, OB_GLACC |

### Materials Management (MM)

| Table | Description | Key Fields | Related T-Codes |
|-------|-------------|------------|-----------------|
| MARA  | Material Master: General Data | MATNR | MM01, MM02, MM03 |
| MARC  | Material Master: Plant Data | MATNR, WERKS | MM01, MM02, MM03 |
| MARD  | Material Master: Storage Location Data | MATNR, WERKS, LGORT | MM01, MM02, MM03 |
| EKKO  | Purchasing Document Header | EBELN | ME21N, ME23N |
| EKPO  | Purchasing Document Item | EBELN, EBELP | ME21N, ME23N |

### Sales and Distribution (SD)

| Table | Description | Key Fields | Related T-Codes |
|-------|-------------|------------|-----------------|
| VBAK  | Sales Document: Header Data | VBELN | VA01, VA02, VA03 |
| VBAP  | Sales Document: Item Data | VBELN, POSNR | VA01, VA02, VA03 |
| KNA1  | Customer Master: General Data | KUNNR | XD01, XD02, XD03 |
| KNVV  | Customer Master: Sales Data | KUNNR, VKORG, VTWEG, SPART | XD01, XD02, XD03 |

### Human Resources (HR)

| Table | Description | Key Fields | Related T-Codes |
|-------|-------------|------------|-----------------|
| PA0000 | HR Master Record: Infotype 0000 (Actions) | PERNR, INFTY, ENDDA, BEGDA | PA20, PA30, PA40 |
| PA0001 | HR Master Record: Infotype 0001 (Org. Assignment) | PERNR, INFTY, ENDDA, BEGDA | PA20, PA30, PA40 |
| PA0002 | HR Master Record: Infotype 0002 (Personal Data) | PERNR, INFTY, ENDDA, BEGDA | PA20, PA30, PA40 |
| HRP1000 | HR Objects: Infotype 1000 (Object) | PLVAR, OTYPE, OBJID, INFTY, ENDDA, BEGDA | PP01, PPOM |

## Table Structure Components

SAP tables consist of several components:

### Fields

Fields are the columns in a table that store specific data elements. Each field has:

- Technical name (e.g., MATNR)
- Data type (e.g., CHAR, NUMC, DEC)
- Length
- Associated data element

### Keys

Keys uniquely identify records in a table:

- **Primary Key**: Combination of fields that uniquely identifies a record
- **Foreign Key**: Field(s) that reference the primary key of another table

### Indexes

Indexes improve query performance by providing faster access paths to data:

- **Primary Index**: Created automatically for the primary key
- **Secondary Indexes**: Additional indexes created for frequently queried fields

## Accessing Table Data

Several methods exist to access and manage table data:

### Transactions

- **SE16**: Data Browser
- **SE16N**: Enhanced Data Browser
- **SE11**: ABAP Dictionary Maintenance
- **SE14**: Database Utility
- **SM30**: Table Maintenance
- **SM31**: Table Maintenance (New)

### ABAP Programs

Tables can be accessed programmatically using:

- SELECT statements
- OPEN SQL
- Native SQL
- Table maintenance generators

## Table Relationships

Tables are often related to each other through key fields, creating:

- One-to-one relationships
- One-to-many relationships
- Many-to-many relationships (typically using junction tables)

Understanding these relationships is crucial for data modeling and reporting.

## Best Practices for Working with Tables

- Use standard SAP transactions for table maintenance when possible
- Document custom tables thoroughly
- Implement proper authorization checks for sensitive tables
- Consider performance implications when querying large tables
- Use appropriate buffering strategies for frequently accessed tables
- Follow SAP naming conventions for custom tables (typically starting with 'Z' or 'Y')
