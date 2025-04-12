# Domains

Domains define the value range for data elements. They specify the technical properties of a field, such as data type and length, and can include value tables for validation.

## Understanding Domains

Domains are ABAP Dictionary objects that:

- Define the technical attributes of fields
- Specify valid value ranges
- Can include fixed values or value tables
- Are linked to data elements
- Provide a foundation for data consistency

## Domain Structure

A domain consists of:

### Technical Attributes

- **Data Type**: The technical data type (CHAR, NUMC, DEC, etc.)
- **Length**: The field length in characters or digits
- **Decimals**: The number of decimal places (for decimal types)
- **Output Characteristics**: Output length, conversion routine, etc.

### Value Range

- **Fixed Values**: Predefined list of valid values
- **Value Table**: Reference to a table containing valid values
- **Value Range**: Minimum and maximum values

## Domain vs. Data Element

Domains and data elements serve different purposes:

| Aspect | Domain | Data Element |
|--------|--------|--------------|
| Purpose | Technical definition | Semantic definition |
| Defines | Data type, length, value range | Field labels, documentation |
| Reuse | Multiple data elements with same technical properties | Multiple fields with same meaning |
| Example | 10-character alphanumeric (technical) | Customer Number (semantic) |

## Common Domains by Module

### Financial Accounting (FI)

| Domain | Description | Data Type | Length | Used By Data Elements |
|--------|-------------|-----------|--------|----------------------|
| BUKRS | Company Code | CHAR | 4 | BUKRS |
| BELNR | Accounting Document Number | CHAR | 10 | BELNR, XBELNR |
| GJAHR | Fiscal Year | NUMC | 4 | GJAHR |
| SAKNR | G/L Account Number | CHAR | 10 | SAKNR, RACCT |

### Materials Management (MM)

| Domain | Description | Data Type | Length | Used By Data Elements |
|--------|-------------|-----------|--------|----------------------|
| MATNR | Material Number | CHAR | 18 | MATNR |
| WERKS | Plant | CHAR | 4 | WERKS |
| LGORT | Storage Location | CHAR | 4 | LGORT |
| EBELN | Purchase Order Number | CHAR | 10 | EBELN |

### Sales and Distribution (SD)

| Domain | Description | Data Type | Length | Used By Data Elements |
|--------|-------------|-----------|--------|----------------------|
| VBELN | Sales Document Number | CHAR | 10 | VBELN, AUBEL |
| KUNNR | Customer Number | CHAR | 10 | KUNNR |
| POSNR | Item Number | NUMC | 6 | POSNR |
| VKORG | Sales Organization | CHAR | 4 | VKORG |

### Human Resources (HR)

| Domain | Description | Data Type | Length | Used By Data Elements |
|--------|-------------|-----------|--------|----------------------|
| PERNR | Personnel Number | NUMC | 8 | PERNR |
| PLANS | Position | NUMC | 8 | PLANS |
| ORGEH | Organizational Unit | NUMC | 8 | ORGEH |
| PERSG | Employee Group | CHAR | 1 | PERSG |

## Value Range Types

Domains can define value ranges in several ways:

### Fixed Values

Fixed values define a list of valid values directly in the domain:

```
Value  | Description
-------------------------------
01     | Domestic Customer
02     | International Customer
03     | Internal Customer
```

### Value Table

Value tables reference a database table containing valid values:

```
Table: T001
Field: BUKRS (Company Code)
```

### Value Range

Value ranges define minimum and maximum values:

```
Minimum: 1000
Maximum: 9999
```

## Creating and Managing Domains

### Transactions

- **SE11**: ABAP Dictionary Maintenance
- **SE80**: Object Navigator (access domains in the ABAP Repository)

### Development Process

1. Define the purpose and usage of the domain
2. Determine the appropriate data type and length
3. Create the domain in Transaction SE11
4. Define value range (fixed values, value table, or min/max)
5. Activate the domain

## Best Practices

### Naming Conventions

- Use descriptive names that indicate the purpose of the domain
- Follow SAP naming conventions for custom domains (Z or Y prefix)
- Use consistent naming patterns within your organization

### Design Considerations

- Reuse existing domains when appropriate
- Create new domains for fields with distinct technical requirements
- Define value ranges to ensure data consistency
- Consider performance implications of value table validations

### Documentation

- Document the purpose and usage of the domain
- Describe the valid value range
- Include examples of valid values
- Document any dependencies or relationships with other objects

## Finding Domains

Several methods exist to find domains:

- **Transaction SE11**: Search by name or description
- **Transaction SE80**: Browse the ABAP Repository
- **Transaction SE16/SE16N**: Query table DD01L (domain directory)
- **Data Element Information**: View the domain linked to a data element

## Domain Usage Examples

### Creating a Domain with Fixed Values

```abap
DOMAIN Z_CUSTOMER_TYPE
  TYPE CHAR
  LENGTH 2
  VALUE TABLE
    VALUE '01' TEXT 'Domestic Customer'
    VALUE '02' TEXT 'International Customer'
    VALUE '03' TEXT 'Internal Customer'
```

### Creating a Domain with Value Table

```abap
DOMAIN Z_COMPANY_CODE
  TYPE CHAR
  LENGTH 4
  VALUE TABLE T001
  FIELD BUKRS
```

### Creating a Domain with Value Range

```abap
DOMAIN Z_QUANTITY
  TYPE DEC
  LENGTH 13
  DECIMALS 3
  VALUE RANGE
    MINIMUM 0.000
    MAXIMUM 999999999.999
```

## Custom Domains

Organizations often create custom domains for:

- Business-specific fields not covered by standard SAP
- Extensions to standard functionality
- Custom applications and reports

Custom domains typically:
- Start with 'Z' or 'Y' (following SAP naming conventions)
- Define technical properties specific to the organization's needs
- Include value ranges appropriate for the business context

## Domain Relationships

Domains are related to other ABAP Dictionary objects:

- **Data Elements**: Use domains to define technical properties
- **Tables**: Use data elements (linked to domains) to define fields
- **Structures**: Use data elements (linked to domains) to define components
- **Search Helps**: May use domains for value restriction

Understanding these relationships is crucial for effective data modeling and development.

## Domain Conversion Routines

Domains can include conversion routines that transform values between internal and external formats:

| Conversion Routine | Purpose | Example |
|--------------------|---------|---------|
| ALPHA | Convert numeric values to alphanumeric | '1' → '0000000001' |
| CUNIT | Convert unit of measure | 'KG' → 'KGM' |
| DATFM | Format date based on user settings | '20220101' → '01/01/2022' |
| TZONE | Convert time zone | 'UTC' → 'GMT' |

Conversion routines ensure consistent data representation across the system.

## Domain Validation

Domains provide several levels of validation:

1. **Technical Validation**: Ensures data matches the defined data type and length
2. **Value Range Validation**: Ensures data falls within defined minimum and maximum values
3. **Fixed Value Validation**: Ensures data matches one of the predefined fixed values
4. **Value Table Validation**: Ensures data exists in the referenced value table

These validations help maintain data integrity throughout the SAP system.
