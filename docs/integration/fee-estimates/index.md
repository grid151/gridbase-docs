# Fees API Documentation

This README file describes several API endpoints for the Fees API. The document provides detailed information on the required fields for each endpoint, including validation rules.

## Get Quote

### Endpoint

`GET /v1/orders/fees/quote/{orderId}`

### Required fields and validation

| Field Name | Field Description                           | Data Type | Validation               |
|------------|---------------------------------------------|-----------|--------------------------|
| orderId    | The identifier of the order                 | string    | Required                 |

### Response example

```json
{
  "Succeeded": true,
  "Value": {
    "ReportId": "string",
    "Property": {
      "FullAddress": "string",
      "CityDesc": "string",
      "CountyDesc": "string",
      "Direction": "string",
      "IsPropertyAddress": true,
      "LandAcreage": "string",
      "LegalDescription": "string",
      "Number": "string",
      "StateId": "string",
      "Street": "string",
      "StreetLine2": "string",
      "StreetName": "string",
      "Suffix": "string",
      "Unit": "string",
      "Zip": "string",
      "Parcel": "string",
      "Parcel2": "string",
      "Parcel3": "string",
      "Parcel4": "string",
      "Lot": "string",
      "Block": "string",
      "Subdivision": "string",
      "Fips": 0
    },
    "Status": "Pending",
    "CreatedDate": "2023-01-01T00:00:00Z"
  },
  "Message": null
}
```

## Get Endorsements

### Endpoint

`GET /v1/orders/fees/quote/{orderId}/endorsements`

### Required fields and validation

| Field Name | Field Description                           | Data Type | Validation               |
|------------|---------------------------------------------|-----------|--------------------------|
| orderId    | The identifier of the order                 | string    | Required                 |

### Response example

```json
{
  "Succeeded": true,
  "Value": {
    "Endorsements": [
      {
        "Code": "string",
        "Description": "string",
        "Amount": 0,
        "Selected": true
      }
    ],
    "IntegrationId": "string"
  },
  "Message": null
}
```

## Get States

### Endpoint

`GET /v1/orders/fees/quote/states/{integrationId}`

### Required fields and validation

| Field Name    | Field Description                                    | Data Type | Validation               |
|---------------|------------------------------------------------------|-----------|--------------------------|
| integrationId | Integration ID                                       | string    | Required                 |

### Response example

```json
[
  {
    "Abbreviation": "string",
    "Links": [
      {
        "Href": "string",
        "Rel": "string",
        "Method": "string"
      }
    ]
  }
]
```

## Get Questions

### Endpoint

`POST /v1/orders/fees/quote/questions`

### Required fields and validation

| Field Name          | Field Description                                      | Data Type         | Validation              |
|---------------------|--------------------------------------------------------|-------------------|-------------------------|
| StateAbbreviation   | State abbreviation                                     | string            | Required                |
| DocumentTypes       | List of document types                                 | array of strings  | Required                |
| RecordingOfficeId   | Recording office ID                                    | string            | Required                |
| IntegrationId       | Integration ID                                         | string            | Optional                |

### Request body example

```json
{
  "StateAbbreviation": "string",
  "DocumentTypes": ["Amendment", "Assignment"],
  "RecordingOfficeId": "string",
  "IntegrationId": "string"
}
```

### Response example

```json
[
  {
    "Id": "string",
    "Description": "string",
    "Answer": "string",
    "QuestionType": "Number"
  }
]
```

## Request Quote

### Endpoint

`POST /v1/orders/fees/quote/request`

### Required fields and validation

| Field Name             | Field Description                                          | Data Type         | Validation              |
|------------------------|------------------------------------------------------------|-------------------|-------------------------|
| IntegrationId          | Integration ID                                             | string            | Required                |
| EstimatedClosingDate   | Estimated closing date                                     | DateTime          | Optional                |
| DocumentTypes          | List of document types                                     | array of strings  | Required                |
| Mortgage               | Mortgage details                                           | object            | Required                |
| Property               | Property address and details                               | object            | Required                |
| Customizations         | Fee customizations                                         | object            | Required                |
| Questions              | List of fee questions                                      | array of objects  | Optional                |
| TitleAgent             | Title agent details                                        | object            | Required                |
| TransactionType        | Transaction type                                           | string            | Required                |
| RecordingOfficeId      | Recording office ID                                        | string            | Optional                |
| RecordingOffice        | Recording office name                                      | string            | Optional                |

### Request body example

```json
{
  "IntegrationId": "string",
  "EstimatedClosingDate": "2023-01-01T00:00:00Z",
  "DocumentTypes": ["Amendment", "Assignment"],
  "Mortgage": {
    "Pages": 0,
    "NewDebtAmount": 0,
    "OriginalAmount": 0,
    "UnpaidBalance": 0
  },
  "Property": {
    "FullAddress": "string",
    "CityDesc": "string",
    "CountyDesc": "string",
    "Direction": "string",
    "IsPropertyAddress": true,
    "LandAcreage": "string",
    "LegalDescription": "string",
    "Number": "string",
    "StateId": "string",
    "Street": "string",
    "StreetLine2": "string",
    "StreetName": "string",
    "Suffix": "string",
    "Unit": "string",
    "Zip": "string",
    "Parcel": "string",
    "Parcel2": "string",
    "Parcel3": "string",
    "Parcel4": "string",
    "Lot": "string",
    "Block": "string",
    "Subdivision": "string",
    "Fips": 0
  },
  "Customizations": {
    "Assignment": {
      "Pages": 0,
      "Amount": 0
    },
    "Deed": {
      "Pages": 0,
      "Amount": 0
    },
    "Release": {
      "Pages": 0,
      "Amount": 0
    },
    "Subordination": {
      "Pages": 0,
      "Amount": 0
    },
    "PowerOfAttorney": {
      "Pages": 0,
      "Amount": 0
    }
  },
  "Questions": [
    {
      "Id": "string",
      "Answer": "string",
      "QuestionType": "Number"
    }
  ],
  "TitleAgent": {
    "FinancingType": "Sale",
    "PolicyType": "New",
    "LoanType": "string",
    "LoanAmount": 0,
    "PurchaseAmount": 0,
    "PriorPolicyAmount": 0,
    "YearsSinceLastPolicy": 0
  },
  "TransactionType": "Purchase",
  "RecordingOfficeId": "string",
  "RecordingOffice": "string"
}
```

### Response example

```json
{
  "ReportId": "string",
  "Property": {
    "FullAddress": "string",
    "CityDesc": "string",
    "CountyDesc": "string",
    "Direction": "string",
    "IsPropertyAddress": true,
    "LandAcreage": "string",
    "LegalDescription": "string",
    "Number": "string",
    "StateId": "string",
    "Street": "string",
    "StreetLine2": "string",
    "StreetName": "string",
    "Suffix": "string",
    "Unit": "string",
    "Zip": "string",
    "Parcel": "string",
    "Parcel2": "string",
    "Parcel3": "string",
    "Parcel4": "string",
    "Lot": "string",
    "Block": "string",
    "Subdivision": "string",
    "Fips": 0
  },
  "Status": "Pending",
  "CreatedDate": "2023-01-01T00:00:00Z"
}
```

## Basic Search

### Endpoint

`POST /v1/orders/fees/quote/search`

### Required fields and validation

| Field Name    | Field Description                 | Data Type         | Validation              |
|---------------|-----------------------------------|-------------------|-------------------------|
| IntegrationId | Integration ID                    | string            | Required                |
| Address       | Address to search                 | string            | Optional                |
| Pagination    | Pagination details                | object            | Required                |

### Request body example

```json
{
  "IntegrationId": "string",
  "Address": "string",
  "Pagination": {
    "PageNo": 1,
    "PageSize": 20,
    "SortBy": "string",
    "IsSortAsc": true
  }
}
```

### Response example

```json
{
  "Count": 1,
  "Quotes": [
    {
      "GridBaseOrderId": "string",
      "

FullAddress": "string",
      "Street": "string",
      "City": "string",
      "State": "string",
      "Zip": "string",
      "CreatedBy": "string",
      "Status": "Pending",
      "CreatedDate": "2023-01-01T00:00:00Z",
      "ClosingDate": "2023-01-01T00:00:00Z"
    }
  ]
}
```

## Advanced Search

### Endpoint

`POST /v1/orders/fees/quote/search/advanced`

### Required fields and validation

| Field Name      | Field Description                 | Data Type         | Validation              |
|-----------------|-----------------------------------|-------------------|-------------------------|
| IntegrationId   | Integration ID                    | string            | Required                |
| Dates           | Date range search criteria        | object            | Optional                |
| PropertyAddress | Property address search criteria  | object            | Optional                |
| Pagination      | Pagination details                | object            | Required                |

### Request body example

```json
{
  "IntegrationId": "string",
  "Dates": {
    "CreatedDateFrom": "2023-01-01T00:00:00Z",
    "CreatedDateTo": "2023-01-01T00:00:00Z",
    "ClosingDateFrom": "2023-01-01T00:00:00Z",
    "ClosingDateTo": "2023-01-01T00:00:00Z"
  },
  "PropertyAddress": {
    "City": "string",
    "County": "string",
    "StateId": "string",
    "Street": "string",
    "Zip": "string"
  },
  "Pagination": {
    "PageNo": 1,
    "PageSize": 20,
    "SortBy": "string",
    "IsSortAsc": true
  }
}
```

### Response example

```json
{
  "Count": 1,
  "Quotes": [
    {
      "GridBaseOrderId": "string",
      "FullAddress": "string",
      "Street": "string",
      "City": "string",
      "State": "string",
      "Zip": "string",
      "CreatedBy": "string",
      "Status": "Pending",
      "CreatedDate": "2023-01-01T00:00:00Z",
      "ClosingDate": "2023-01-01T00:00:00Z"
    }
  ]
}
```

## Complete Quote

### Endpoint

`POST /v1/orders/fees/quote/complete`

### Required fields and validation

| Field Name     | Field Description                   | Data Type        | Validation               |
|----------------|-------------------------------------|------------------|--------------------------|
| OrderId        | Order ID                            | string           | Required                 |
| Endorsements   | List of endorsements                | array of objects | Optional                 |

### Request body example

```json
{
  "OrderId": "string",
  "Endorsements": [
    {
      "EndorsementId": "string",
      "Selected": true
    }
  ]
}
```

### Response example

```json
{
  "Succeeded": true,
  "Message": null
}
```

## Get Recording Offices

### Endpoint

`POST /v1/orders/fees/quote/recording-offices`

### Required fields and validation

| Field Name        | Field Description                           | Data Type | Validation               |
|-------------------|---------------------------------------------|-----------|--------------------------|
| StateAbbreviation | State abbreviation                          | string    | Required                 |
| CountyFips        | County FIPS code                            | string    | Required                 |
| IntegrationId     | Integration ID                              | string    | Optional                 |

### Request body example

```json
{
  "StateAbbreviation": "string",
  "CountyFips": "string",
  "IntegrationId": "string"
}
```

### Response example

```json
[
  {
    "Id": "string",
    "Name": "string",
    "State": "string",
    "County": "string",
    "Fips": "string",
    "Questions": [
      {
        "Id": "string",
        "Description": "string",
        "Answer": "string",
        "QuestionType": "Number"
      }
    ],
    "OfficeDetail": {
      "Detail": "string"
    },
    "Links": [
      {
        "Href": "string",
        "Rel": "string",
        "Method": "string"
      }
    ]
  }
]
```
