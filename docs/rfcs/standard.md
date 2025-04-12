# Standard RFCs

This page provides documentation on standard RFC-enabled function modules provided by SAP. These are ready-to-use functions for common integration scenarios.

## What are Standard RFCs?

Standard RFCs are function modules provided by SAP that are enabled for Remote Function Call (RFC). They:

- Are part of the standard SAP system
- Can be called from external systems
- Provide standardized interfaces for common business processes
- Are maintained and updated by SAP

## Common Standard RFCs

### Business Partner and Customer RFCs

| RFC Name | Description | Key Parameters | Usage |
|----------|-------------|----------------|-------|
| BAPI_CUSTOMER_GETLIST | Retrieve list of customers | CUSTOMER_LIST, RETURN | Get list of customers based on selection criteria |
| BAPI_CUSTOMER_GETDETAIL | Get customer details | CUSTOMERNO, CUSTOMERADDRESS, RETURN | Retrieve detailed information for a specific customer |
| BAPI_CUSTOMER_CREATE | Create a customer | CUSTOMERNO, CUSTOMERDATA, RETURN | Create a new customer record |
| BAPI_CUSTOMER_CHANGE | Modify customer data | CUSTOMERNO, CUSTOMERDATA, RETURN | Update an existing customer record |

### Material Management RFCs

| RFC Name | Description | Key Parameters | Usage |
|----------|-------------|----------------|-------|
| BAPI_MATERIAL_GETLIST | Retrieve list of materials | MATNRLIST, RETURN | Get list of materials based on selection criteria |
| BAPI_MATERIAL_GET_DETAIL | Get material details | MATERIAL, MATERIALDATA, RETURN | Retrieve detailed information for a specific material |
| BAPI_MATERIAL_SAVEDATA | Create or update material | HEADDATA, CLIENTDATA, RETURN | Create or update a material record |
| BAPI_GOODSMVT_CREATE | Create goods movement | GOODSMVT_HEADER, GOODSMVT_ITEMS, RETURN | Create a goods movement document |

### Sales and Distribution RFCs

| RFC Name | Description | Key Parameters | Usage |
|----------|-------------|----------------|-------|
| BAPI_SALESORDER_GETLIST | Retrieve list of sales orders | SALES_ORDERS, RETURN | Get list of sales orders based on selection criteria |
| BAPI_SALESORDER_GETDETAILEX | Get sales order details | SALESDOCUMENT, ORDER_HEADER_IN, RETURN | Retrieve detailed information for a specific sales order |
| BAPI_SALESORDER_CREATEFROMDAT2 | Create sales order | ORDER_HEADER_IN, ORDER_ITEMS_IN, RETURN | Create a new sales order |
| BAPI_SALESORDER_CHANGE | Modify sales order | SALESDOCUMENT, ORDER_HEADER_IN, RETURN | Update an existing sales order |

### Financial Accounting RFCs

| RFC Name | Description | Key Parameters | Usage |
|----------|-------------|----------------|-------|
| BAPI_ACC_DOCUMENT_POST | Post accounting document | DOCUMENTHEADER, ACCOUNTGL, RETURN | Create an accounting document |
| BAPI_ACC_DOCUMENT_GET | Get accounting document | DOCUMENTHEADER, ACCOUNTGL, RETURN | Retrieve an accounting document |
| BAPI_ACC_GL_ACCOUNT_GETLIST | Get G/L account list | ACCOUNTLIST, RETURN | Retrieve list of G/L accounts |
| BAPI_ACC_INVOICE_RECEIPT_POST | Post invoice receipt | INVOICEHEADER, INVOICEITEMS, RETURN | Post an invoice receipt |

### Human Resources RFCs

| RFC Name | Description | Key Parameters | Usage |
|----------|-------------|----------------|-------|
| BAPI_EMPLOYEE_GETDATA | Get employee data | EMPLOYEE_ID, PERSONAL_DATA, RETURN | Retrieve employee information |
| BAPI_EMPLOYEE_ENQUEUE | Lock employee record | EMPLOYEE_ID, RETURN | Lock an employee record for changes |
| BAPI_EMPLOYEE_DEQUEUE | Unlock employee record | EMPLOYEE_ID, RETURN | Unlock an employee record |
| BAPI_PERSDATA_CHANGE | Change personal data | EMPLOYEE_ID, PERSONAL_DATA, RETURN | Update employee personal data |

### System and Utility RFCs

| RFC Name | Description | Key Parameters | Usage |
|----------|-------------|----------------|-------|
| RFC_READ_TABLE | Read data from SAP table | QUERY_TABLE, FIELDS, OPTIONS, DATA | Generic function to read data from any SAP table |
| RFC_SYSTEM_INFO | Get system information | RFCSI_EXPORT | Retrieve information about the SAP system |
| STFC_CONNECTION | Test RFC connection | REQUTEXT, ECHOTEXT, RESPTEXT | Test the RFC connection to an SAP system |
| BAPI_TRANSACTION_COMMIT | Commit transaction | WAIT, RETURN | Commit changes made in a transaction |
| BAPI_TRANSACTION_ROLLBACK | Rollback transaction | RETURN | Rollback changes made in a transaction |

## Using Standard RFCs

### Prerequisites

Before using standard RFCs, ensure:

1. The RFC destination is properly configured (Transaction SM59)
2. The user has appropriate authorizations
3. The required function modules are available in the target system

### Common Parameters

Most standard RFCs use common parameter patterns:

- **Import parameters**: Input data for the function
- **Export parameters**: Output data returned by the function
- **Tables parameters**: Table data exchanged with the function
- **RETURN parameter**: Contains success/error messages

### Error Handling

Standard RFCs typically return error information in the RETURN parameter:

- **TYPE**: Message type (S: Success, E: Error, W: Warning, I: Information)
- **ID**: Message class
- **NUMBER**: Message number
- **MESSAGE**: Human-readable message text
- **LOG_NO**: Application log number
- **LOG_MSG_NO**: Message number in the application log
- **MESSAGE_V1 to MESSAGE_V4**: Message variables

### Transaction Handling

For RFCs that modify data:

1. Call the RFC to perform the operation
2. Check the RETURN parameter for errors
3. If successful, call BAPI_TRANSACTION_COMMIT to commit the changes
4. If errors occur, call BAPI_TRANSACTION_ROLLBACK to rollback the changes

## Best Practices

- Use standard RFCs whenever possible instead of creating custom ones
- Test RFCs thoroughly in a development environment before using in production
- Implement proper error handling for all RFC calls
- Use transaction RFCs (tRFC) for critical business processes
- Monitor RFC execution with transaction SM58
- Keep RFC interfaces stable by using wrapper functions for any custom logic
- Document RFC usage thoroughly for future reference
