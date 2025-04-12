# IMG Activities

Implementation Guide (IMG) activities are configuration steps used during SAP implementation. They guide users through the process of customizing SAP systems to meet specific business requirements.

## Understanding IMG Activities

IMG activities are:

- Configuration tasks organized in a hierarchical structure
- Used to customize SAP systems during implementation
- Linked to specific customizing tables
- Accessed through the Implementation Guide (Transaction SPRO)
- Part of the SAP customizing framework

## IMG Structure

The IMG is organized in a hierarchical structure:

1. **IMG Root**: The top level of the IMG hierarchy
2. **Enterprise Structure**: Organizational units and their relationships
3. **Functional Areas**: Modules such as FI, MM, SD, etc.
4. **Activity Groups**: Related configuration activities
5. **Activities**: Individual configuration tasks

## Types of IMG Activities

IMG activities can be categorized into several types:

### Documentation Activities

- Provide information and guidance
- Do not directly modify configuration data
- Help users understand configuration concepts

### Table Maintenance Activities

- Allow direct editing of customizing tables
- Use standard table maintenance transactions (SM30, SM31)
- Modify configuration data in the system

### Transaction Activities

- Launch specific transactions for complex configuration
- May involve multiple steps or tables
- Often include guided procedures

### Report Activities

- Execute reports to analyze or modify configuration data
- Generate lists or statistics
- Perform mass updates or checks

## Common IMG Activities by Module

### Financial Accounting (FI)

| Activity | Description | Transaction | Tables |
|----------|-------------|-------------|--------|
| Define Company Code | Create and configure company codes | OX02 | T001, T001K |
| Define Fiscal Year Variant | Configure fiscal year periods | OB29 | T009, T009B |
| Define Document Types | Configure accounting document types | OBA7 | T003 |
| Define Posting Keys | Configure posting keys for accounting | OB41 | T004 |

### Materials Management (MM)

| Activity | Description | Transaction | Tables |
|----------|-------------|-------------|--------|
| Define Plant | Create and configure plants | OX10 | T001W |
| Define Storage Locations | Configure storage locations | OX09 | T001L |
| Define Purchasing Groups | Configure purchasing groups | OME4 | T024 |
| Define Material Types | Configure material types | OMSL | T134 |

### Sales and Distribution (SD)

| Activity | Description | Transaction | Tables |
|----------|-------------|-------------|--------|
| Define Sales Organization | Create and configure sales organizations | OVXM | TVKO |
| Define Distribution Channel | Configure distribution channels | OVXD | TVTW |
| Define Division | Configure divisions | OVXE | TVSB |
| Define Pricing Procedure | Configure pricing procedures | V/08 | T683 |

### Human Resources (HR)

| Activity | Description | Transaction | Tables |
|----------|-------------|-------------|--------|
| Define Personnel Areas | Configure personnel areas | OOPK | T500P |
| Define Employee Groups | Configure employee groups | OOPG | T501 |
| Define Employee Subgroups | Configure employee subgroups | OOPF | T503K |
| Define Payroll Areas | Configure payroll areas | OOPN | T549A |

## Accessing IMG Activities

IMG activities can be accessed through several methods:

### Transaction SPRO

The primary method to access the IMG:

1. Execute Transaction SPRO
2. Select "SAP Reference IMG" or "Project IMG"
3. Navigate through the hierarchy to find the desired activity
4. Double-click the activity to execute it

### Transaction Code

Many IMG activities have direct transaction codes:

- OX02: Define Company Code
- OX10: Define Plant
- OVXM: Define Sales Organization
- OOPK: Define Personnel Areas

### IMG Search

Search for IMG activities by:

1. Execute Transaction SPRO
2. Click "Edit" → "Find" (or press Ctrl+F)
3. Enter search terms
4. Select from the search results

## IMG Projects

IMG projects help manage configuration activities during implementation:

### Project Types

- **SAP Reference IMG**: Complete set of all configuration activities
- **Project IMG**: Subset of activities relevant to a specific implementation project
- **Enterprise IMG**: Consolidated view across multiple systems

### Project Creation

1. Execute Transaction SPRO
2. Select "Project" → "Create Project"
3. Enter project details
4. Select relevant activities from the Reference IMG
5. Save the project

## Best Practices for IMG Activities

### Documentation

- Document all configuration decisions
- Capture screenshots of key settings
- Maintain a configuration guide for future reference
- Document the business rationale for configuration choices

### Change Management

- Use transport requests for all configuration changes
- Test configuration changes in development and quality assurance systems
- Follow a structured approval process for configuration changes
- Maintain version control for configuration documentation

### Implementation Approach

- Follow a logical sequence for configuration activities
- Complete prerequisite activities before dependent ones
- Validate configuration through testing
- Consider business process requirements when configuring

## Custom IMG Activities

Organizations can create custom IMG activities for:

- Custom developments
- Extensions to standard functionality
- Industry-specific solutions

Custom IMG activities typically:
- Are created using Transaction SIMGH
- Are integrated into the standard IMG structure
- Follow SAP naming conventions (Z or Y prefix)
- Include comprehensive documentation

## IMG Activity Documentation

Each IMG activity includes documentation:

- **Purpose**: What the activity accomplishes
- **Prerequisites**: Activities that must be completed first
- **Procedure**: Step-by-step instructions
- **Example**: Sample configuration
- **Notes**: Additional information and tips

## IMG Activity Relationships

IMG activities are related to other SAP objects:

- **Customizing Tables**: Store configuration data
- **Transactions**: Execute configuration tasks
- **Business Processes**: Affected by configuration settings
- **Authorization Objects**: Control access to configuration activities

Understanding these relationships is crucial for effective system configuration.

## IMG Activity Status

IMG activities can have different status indicators:

- **Not Processed**: Activity has not been executed
- **In Process**: Activity has been started but not completed
- **Completed**: Activity has been successfully completed
- **Not Relevant**: Activity is not applicable to the implementation

These status indicators help track progress during implementation projects.
