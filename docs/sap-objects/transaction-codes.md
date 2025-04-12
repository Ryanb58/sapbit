# Transaction Codes (T-Codes)

Transaction codes, commonly known as T-codes, are short codes used to access specific functions in SAP systems. They provide quick access to various SAP transactions, reports, and utilities.

## Understanding Transaction Codes

Transaction codes are alphanumeric shortcuts that allow users to navigate directly to specific functions in SAP without navigating through menus. They typically consist of:

- Standard SAP transaction codes (e.g., FB01, MM01, VA01)
- Custom transaction codes (typically starting with 'Z' or 'Y')
- Report transaction codes (typically starting with 'S_')

## Common Transaction Code Categories

### Financial Accounting (FI)

| T-Code | Description | Related Tables | Function |
|--------|-------------|----------------|----------|
| FB01   | Post Document | BKPF, BSEG | Create accounting document |
| FB03   | Display Document | BKPF, BSEG | Display accounting document |
| F-02   | Enter G/L Account Posting | BKPF, BSEG | Post to G/L accounts |
| FS10N  | G/L Account Balances | BSIS, BSAS | Display G/L account balances |

### Materials Management (MM)

| T-Code | Description | Related Tables | Function |
|--------|-------------|----------------|----------|
| MM01   | Create Material | MARA, MARC | Create material master |
| MM02   | Change Material | MARA, MARC | Change material master |
| MM03   | Display Material | MARA, MARC | Display material master |
| MMBE   | Stock Overview | MARD | Display stock overview |

### Sales and Distribution (SD)

| T-Code | Description | Related Tables | Function |
|--------|-------------|----------------|----------|
| VA01   | Create Sales Order | VBAK, VBAP | Create sales order |
| VA02   | Change Sales Order | VBAK, VBAP | Change sales order |
| VA03   | Display Sales Order | VBAK, VBAP | Display sales order |
| VL01N  | Create Outbound Delivery | LIKP, LIPS | Create delivery |

### Human Resources (HR)

| T-Code | Description | Related Tables | Function |
|--------|-------------|----------------|----------|
| PA20   | Display HR Master Data | PA0000, PA0001 | Display employee data |
| PA30   | Maintain HR Master Data | PA0000, PA0001 | Maintain employee data |
| PA40   | Personnel Actions | PA0000, PA0001 | Process personnel actions |
| PT61   | Time Statement | PTEX2 | Display time statement |

## Transaction Code Structure

Most transaction codes follow a pattern:

- First two characters often indicate the module (e.g., FB for Finance, MM for Materials Management)
- Numeric characters often indicate the function type (e.g., 01 for create, 02 for change, 03 for display)
- Special prefixes like '/N' force a new session, '/O' opens in a new mode

## Finding Transaction Codes

Several methods exist to find transaction codes:

- **Transaction SE93**: Transaction code repository
- **Transaction SEARCH_SAP_MENU**: Search SAP menu for transaction codes
- **System Status Bar**: Shows the current transaction code
- **SAP Easy Access Menu**: Shows transaction codes in parentheses

## Custom Transaction Codes

Organizations often create custom transaction codes for:

- Custom-developed functionality
- Variants of standard transactions with default values
- Transactions with restricted authorization

Custom transaction codes typically:
- Start with 'Z' or 'Y'
- Are created using Transaction SE93
- Can be linked to standard or custom programs

## Transaction Code Best Practices

- Memorize frequently used transaction codes for efficiency
- Use transaction favorites for quick access
- Document custom transaction codes thoroughly
- Implement proper authorization checks for sensitive transactions
- Consider transaction variants for frequently used transactions with specific parameters

## Related SAP Objects

- **Programs**: Each transaction code executes an ABAP program
- **Screens**: Transactions display screens for user interaction
- **Tables**: Transactions read from and write to database tables
- **Authorization Objects**: Control access to transactions
