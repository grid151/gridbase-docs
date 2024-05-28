
# RamQuest Integration (Provider Initiated Workflow)

This README file describes several API endpoints as part of the Provider Initiated Workflow for integrating with RamQuest, a real estate and title insurance software company. The document provides detailed information on the required fields for each endpoint, including validation rules.

## Stage Order

### Endpoint

`POST https://app.gridbase.io/v1/orders/stage`

### Required fields and validation

| Field Name                       | Field Description                                                                | Data Type | Validation                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------- |
| orderDetails.ProductTypeDesc     | Products Available to order                                                      | string    | Max 100 characters                                                         |
| orderDetails.transactionTypeDesc | Transaction Type                                                                 | string    | Max 100 characters                                                         |
| orderDetails.NewLoanType         | Type of new loan                                                                 | string    | Max 50 characters                                                          |
| orderDetails.NewLoanNumber       | New loan number                                                                  | string    | Max 30 characters                                                          |
| parties.buyers.lastName          | Buyers Last Name                                                                 | string    | Max 50 characters, required                                                |
| parties.buyers.firstName         | Buyers First Name                                                                | string    | Max 30 characters, required                                                |
| parties.lender.companyName       | Lender Company Name                                                              | string    | Max 250 characters, required                                               |
| property.address.street          | Property Address 1                                                               | string    | Max 100 characters, required                                               |
| property.address.cityDesc        | Property City Description                                                        | string    | Max 30 characters, required                                                |
| property.address.stateId         | Property State                                                                   | string    | Max 2 characters, required                                                 |
| property.address.zip             | Property Zip                                                                     | string    | Max 10 characters, required                                                |
| integrationId                    | Integration ID (use the ID of the partner/title agent to send the order to)       | string    | Required                                                                   |
| System                           | System integration type                                                          | enum      | Required, must be "RamQuest"                                               |

### Request body example

\`\`\`json
{
  "orderDetails": {
    "ProductTypeDesc": "Residential",
    "transactionTypeDesc": "Purchase",
    "NewLoanType": "Fixed",
    "NewLoanNumber": "123456"
  },
  "parties": {
    "buyers": [
      {
        "lastName": "Doe",
        "firstName": "John"
      }
    ],
    "lender": {
      "companyName": "LenderCorp"
    }
  },
  "property": {
    "address": {
      "street": "123 Main St",
      "cityDesc": "Hometown",
      "stateId": "CA",
      "zip": "12345"
    }
  },
  "integrationId": "your-integration-id",
  "System": "RamQuest"
}
\`\`\`

## Update Order

### Endpoint

`PUT https://app.gridbase.io/v1/orders/update`

### Required fields and validation

> Updates will take the full order, anything left null should not replace an existing value.

| Field Name                       | Field Description                                                                | Data Type | Validation                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------- |
| orderDetails.ProductTypeDesc     | Products Available to order                                                      | string    | Max 100 characters                                                         |
| orderDetails.transactionTypeDesc | Transaction Type                                                                 | string    | Max 100 characters                                                         |
| orderDetails.NewLoanType         | Type of new loan                                                                 | string    | Max 50 characters                                                          |
| orderDetails.NewLoanNumber       | New loan number                                                                  | string    | Max 30 characters                                                          |
| parties.buyers.lastName          | Buyers Last Name                                                                 | string    | Max 50 characters, required                                                |
| parties.buyers.firstName         | Buyers First Name                                                                | string    | Max 30 characters, required                                                |
| parties.lender.companyName       | Lender Company Name                                                              | string    | Max 250 characters, required                                               |
| property.address.street          | Property Address 1                                                               | string    | Max 100 characters, required                                               |
| property.address.cityDesc        | Property City Description                                                        | string    | Max 30 characters, required                                                |
| property.address.stateId         | Property State                                                                   | string    | Max 2 characters, required                                                 |
| property.address.zip             | Property Zip                                                                     | string    | Max 10 characters, required                                                |

### Request body example

\`\`\`json
{
  "orderDetails": {
    "ProductTypeDesc": "Residential",
    "transactionTypeDesc": "Refinance",
    "NewLoanType": "Variable",
    "NewLoanNumber": "654321"
  },
  "parties": {
    "buyers": [
      {
        "lastName": "Smith",
        "firstName": "Jane"
      }
    ],
    "lender": {
      "companyName": "FinanceInc"
    }
  },
  "property": {
    "address": {
      "street": "456 Elm St",
      "cityDesc": "Smalltown",
      "stateId": "TX",
      "zip": "67890"
    }
  }
}
\`\`\`

## Add Document

### Endpoint

`POST https://app.gridbase.io/v1/documents/{orderId}`

### Required fields and validation

| Field Name   | Field Description                             | Data Type | Validation                                                |
| ------------ | --------------------------------------------- | --------- | --------------------------------------------------------- |
| fileName     | Name of file without extension                | string    | Required, Max 50 characters                               |
| documentBody | Document as a Base64 string                   | string    | Required, Must be Base64 format                           |
| extension    | Extension of the uploaded file (txt, pdf, etc.) | string    | Required, Max 10 characters                               |

### Request body example

\`\`\`json
{
  "fileName": "contract",
  "documentBody": "base64encodedstring",
  "extension": "pdf"
}
\`\`\`

## Add Note

### Endpoint

`POST https://app.gridbase.io/v1/notes/{orderId}`

### Required fields and validation

| Field Name  | Field Description    | Data Type | Validation                                                |
| ----------- | -------------------- | --------- | --------------------------------------------------------- |
| noteSubject | Note Subject         | string    | Max 100 characters, required                              |
| noteBody    | Note Body            | string    | Max 500 characters, required                              |
| description | Additional details   | string    | Optional                                                  |
| documentId  | Related Document ID  | string    | Optional                                                  |

### Request body example

\`\`\`json
{
  "noteSubject": "Inspection",
  "noteBody": "The property inspection is scheduled for next week.",
  "description": "Additional note details",
  "documentId": "document-id-123"
}
\`\`\`

## Cancel Order

### Endpoint

`PUT https://app.gridbase.io/v1/orders/cancel`

### Required fields and validation

| Field Name   | Field Description              | Data Type | Validation                                                |
| ------------ | ------------------------------ | --------- | --------------------------------------------------------- |
| orderId      | Unique identifier of the order | string    | Required                                                  |
| cancelReason | Reason for cancelling order    | string    | Required                                                  |

### Request body example

\`\`\`json
{
  "orderId": "63f---------------443413",
  "cancelReason": "Client request"
}
\`\`\`
