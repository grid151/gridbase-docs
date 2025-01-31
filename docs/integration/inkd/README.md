# Ink'd Signings

This repository contains Inkd integration API data, a third-party API service used to document workflow with legally-binding and tamper-proof digital signing, notarization, and document delivery between lender and title provider. This integration provides a seamless way to interact with Inkd using the GridBase API.

# How to use

Setup
Implement the required payload messages into your project.

# Methods

All Inkd API requests are encapsated in the following end point (Reference https://app.gridbase.io/v1/reference#tag/Signing):

- **[ReadyToSchedule](#ready-to-schedule):** Read to Schedule.
- **[ScheduleConfirmed](#schedule-confirmed):** Schedule Confirmed.
- **[ReadyToRescheduleSigning](#ready-to-reschedule-signing):** Ready To Reschedule Signing
- **[RescheduleConfirmed](#reschedule-confirmed):** Reschedule Confirmed.
- **[NotaryAssigned](#notary-assigned):** Notary Assigned.
- **[ClosingPackageApprovedByVendor](#closing-package-approved-by-vendor):** Closing Package Approved By Vendor.
- **[ClosingPackageDeliveredByLender](#closing-package-delivered-by-lender):** Closing Package Delivered By Lender.
- **[ExecutedDocsUploaded](#executed-docs-uploaded):** Executed Docs Uploaded.
- **[ExecutedDocsDelivered](#executed-docs-delivered):** Executed Docs Delivered
- **[eSignedCompleted](#electronic-signed-completed):** Electronic Signed Completed.
- **[CancelAllDocs](#cancel-all-docs):** Cancel All Docs.
- **[CancelOrder](#cancel-order):** Cancel Order.

Required Integration Specific Fields:

- **IntegrationId**
- **TransactionID**: Unique identifier for loan number, format expected `{VendorId}-{LoanNumber}-{TitleId}`. Note that vendorId is unique but can be any value, titleId is unique but can also be any value. Loan Number is used by Inkd as a reference ID.
- **VendorOrderIdentifier:**

# Ready To Schedule:

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Ready to schedule.

ReadyToSchedule
Example:

```xml
<MESSAGE xmlns="http://www.mismo.org/residential/2009/schemas" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xsd="http://www.w3.org/2001/XMLSchema" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-04:00">2024-02-07T09:41:32.701-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">XXX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-04:00">2024-02-07T09:41:32.703-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:EnvironmentID">QA</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<COLLATERALS>
						<COLLATERAL SequenceNumber="1">
							<SUBJECT_PROPERTY>
								<ADDRESS>
									<AddressLineText>QA Regression WO</AddressLineText>
									<CityName>Moon</CityName>
									<CountyName>Allegheny</CountyName>
									<PostalCode>15108</PostalCode>
									<StateCode>PA</StateCode>
								</ADDRESS>
							</SUBJECT_PROPERTY>
						</COLLATERAL>
					</COLLATERALS>
					<LOANS>
						<LOAN>
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText></LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<LOAN_DETAIL>
								<ENoteIndicator>false</ENoteIndicator>
							</LOAN_DETAIL>
							<ORIGINATION_SYSTEMS>
								<ORIGINATION_SYSTEM>
									<LoanOriginationSystemVendorIdentifier>817</LoanOriginationSystemVendorIdentifier>
								</ORIGINATION_SYSTEM>
							</ORIGINATION_SYSTEMS>
							<TERMS_OF_LOAN>
								<LoanPurposeType>Refinance</LoanPurposeType>
							</TERMS_OF_LOAN>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information>
										<inkd:CreatedBy></inkd:CreatedBy>
										<inkd:EventId>ReadyToSchedule</inkd:EventId>
										<inkd:TransactionID>{{transactionID}}</inkd:TransactionID>
										<inkd:UserName>{username}</inkd:UserName>
										<inkd:VendorOrderIdentifier>{{orderNo}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
									<inkd:MortgageDoc_Information>
										<inkd:MortgagePageCount>20</inkd:MortgagePageCount>
										<inkd:DeedPageCount>3</inkd:DeedPageCount>
									</inkd:MortgageDoc_Information>
									<inkd:ECloseType>Hybrid</inkd:ECloseType>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<PARTIES>
						<PARTY SequenceNumber="1" xlink:label="PARTY1">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue>{user-name}</ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Other</ContactPointRoleType>
											<ContactPointRoleTypeOtherDescription>Personal email</ContactPointRoleTypeOtherDescription>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="2">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Mobile</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>Test</FirstName>
									<FullName>Test Signer</FullName>
									<LastName>Signer</LastName>
									<MiddleName/>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS>
									<AddressLineText>600 Clubhouse Dr</AddressLineText>
									<AddressType>Mailing</AddressType>
									<CityName>Moon Twp</CityName>
									<PostalCode>15108</PostalCode>
									<StateCode>PA</StateCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1" xlink:label="PARTY1_ROLE1">
									<ROLE_DETAIL>
										<PartyRoleType>Borrower</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
						<PARTY SequenceNumber="2" xlink:label="PARTY2">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue>{user-name}</ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Other</ContactPointRoleType>
											<ContactPointRoleTypeOtherDescription>Personal email</ContactPointRoleTypeOtherDescription>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="2">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Mobile</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>Jane</FirstName>
									<FullName>Jane Smith</FullName>
									<LastName>Smith</LastName>
									<MiddleName/>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS>
									<AddressLineText>600 Clubouse Dr</AddressLineText>
									<AddressType>Mailing</AddressType>
									<CityName>Moon Twp</CityName>
									<PostalCode>15108</PostalCode>
									<StateCode>PA</StateCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1" xlink:label="PARTY2_ROLE1">
									<ROLE_DETAIL>
										<PartyRoleType>NonTitleNonSpouseOwnershipInterest</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
						<PARTY SequenceNumber="3" xlink:label="PARTY3">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue></ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Work</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>Mickey</FirstName>
									<FullName>Mickey Mouse</FullName>
									<LastName>Mouse</LastName>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS>
									<AddressLineText>123 Main st</AddressLineText>
									<AddressType>Mailing</AddressType>
									<CityName>Plainsboro</CityName>
									<PostalCode>08536</PostalCode>
									<StateCode>NJ</StateCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1" xlink:label="PARTY3_ROLE1">
									<ROLE_DETAIL>
										<PartyRoleType>LoanCloser</PartyRoleType>
									</ROLE_DETAIL>
									<FULFILLMENT_PARTY>
										<FulfillmentPartyRoleType></FulfillmentPartyRoleType>
									</FULFILLMENT_PARTY>
								</ROLE>
							</ROLES>
						</PARTY>
					</PARTIES>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<CLOSING>
								<CLOSING_LOCATIONS>
									<CLOSING_LOCATION SequenceNumber="1">
										<ADDRESS>
											<AddressAdditionalLineText/>
											<AddressLineText>3704 Indianpipe Cir</AddressLineText>
											<CityName>Colorado Springs</CityName>
											<PostalCode>80918</PostalCode>
											<StateCode>CO</StateCode>
										</ADDRESS>
										<CLOSING_LOCATION_DETAIL>
											<ClosingEventLocationType>Other</ClosingEventLocationType>
											<ClosingEventLocationTypeOtherDescription>Subject Property</ClosingEventLocationTypeOtherDescription>
										</CLOSING_LOCATION_DETAIL>
									</CLOSING_LOCATION>
								</CLOSING_LOCATIONS>
								<CLOSING_REQUEST>
									<CLOSING_REQUEST_DETAIL>
										<ClosingScheduledDatetime DisplayTimeZoneText="UTC-05:00">{{ClosingScheduledDatetime}}</ClosingScheduledDatetime>
									</CLOSING_REQUEST_DETAIL>
								</CLOSING_REQUEST>
							</CLOSING>
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2001401605</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Schedule Confirmed:

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Schedule Confirmed

ScheduleConfirmed
Example:

```xml
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC">2024-02-08T20:21:18Z</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">DEV</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET SequenceNumber="1">
			<DEALS>
				<DEAL SequenceNumber="1">
					<LOANS>
						<LOAN SequenceNumber="1">
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText>sss</LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<LOAN_IDENTIFIERS>
								<LOAN_IDENTIFIER SequenceNumber="1">
									<LoanIdentifier>0105451868</LoanIdentifier>
									<LoanIdentifierType>LenderLoan</LoanIdentifierType>
								</LOAN_IDENTIFIER>
							</LOAN_IDENTIFIERS>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information>
										<inkd:CreatedBy></inkd:CreatedBy>
										<inkd:EventId>ScheduleConfirmed</inkd:EventId>
										<inkd:EventIdentifier>4d35e52d-e203-4686-8e64-065c1dc111f4</inkd:EventIdentifier>
										<inkd:TransactionID>{{transactionID}}</inkd:TransactionID>
										<inkd:UserName>{username}</inkd:UserName>
										<inkd:VendorOrderIdentifier>{{orderNo}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<PARTIES>
						<PARTY SequenceNumber="1">
							<INDIVIDUAL>
								<CONTACT_POINTS/>
								<NAME>
									<FirstName/>
									<LastName/>
									<MiddleName/>
								</NAME>
							</INDIVIDUAL>
							<ROLES>
								<ROLE SequenceNumber="1">
									<LICENSES>
										<LICENSE>
											<LICENSE_DETAIL>
												<LicenseIdentifier/>
											</LICENSE_DETAIL>
										</LICENSE>
									</LICENSES>
									<ROLE_DETAIL>
										<PartyRoleType>Appraiser</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
					</PARTIES>
					<SERVICES>
						<SERVICE SequenceNumber="1">
							<CLOSING>
								<CLOSING_LOCATIONS>
									<CLOSING_LOCATION SequenceNumber="1">
										<ADDRESS>
											<AddressLineText>1 First American Way</AddressLineText>
											<CityName>Santa Ana</CityName>
											<CountyName>Orange</CountyName>
											<PostalCode>92707</PostalCode>
											<StateCode>CA</StateCode>
										</ADDRESS>
										<CLOSING_LOCATION_DETAIL>
											<ClosingEventLocationType>ClosingAgentBranch</ClosingEventLocationType>
											<ClosingEventLocationDescription/>
										</CLOSING_LOCATION_DETAIL>
									</CLOSING_LOCATION>
								</CLOSING_LOCATIONS>
								<CLOSING_REQUEST>
									<CLOSING_REQUEST_DETAIL>
										<ClosingScheduledDatetime DisplayTimeZoneText="UTC-5">{{ClosingScheduledDatetime}}</ClosingScheduledDatetime>
									</CLOSING_REQUEST_DETAIL>
								</CLOSING_REQUEST>
							</CLOSING>
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_DETAIL>
										<ServiceProductDescription>Closing</ServiceProductDescription>
										<ServiceProductIdentifier>201</ServiceProductIdentifier>
									</SERVICE_PRODUCT_DETAIL>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2001401605</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Ready To Reschedule Signing

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Ready To Reschedule Signing

ReadyToRescheduleSigning
Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-04:00">2023-08-24T15:57:41-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">XXX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-04:00">2023-08-24T15:57:41-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:EnvironmentID">PROD</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText></LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<TERMS_OF_LOAN>
								<LoanPurposeType>Refinance</LoanPurposeType>
							</TERMS_OF_LOAN>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information xmlns:xsd="http://www.w3.org/2001/XMLSchema">
										<inkd:CreatedBy></inkd:CreatedBy>
										<inkd:EventId>ReadyToRescheduleSigning</inkd:EventId>
										<inkd:TransactionID>303-0151835931-1100578476</inkd:TransactionID>
										<inkd:UserName>{username}</inkd:UserName>
										<inkd:VendorOrderIdentifier>1013</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
									<inkd:MortgageDoc_Information xmlns:xsd="http://www.w3.org/2001/XMLSchema">
										<inkd:MortgagePageCount>20</inkd:MortgagePageCount>
										<inkd:DeedPageCount>3</inkd:DeedPageCount>
									</inkd:MortgageDoc_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<PARTIES>
						<PARTY SequenceNumber="1" xlink:label="PARTY1">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue></ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Other</ContactPointRoleType>
											<ContactPointRoleTypeOtherDescription>Personal email</ContactPointRoleTypeOtherDescription>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="2">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Home</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="3">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Work</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>MICKEY</FirstName>
									<FullName>MICKEY MOUSE</FullName>
									<LastName>MOUSE</LastName>
									<MiddleName/>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS>
									<AddressLineText>26 Green Ave</AddressLineText>
									<AddressType>Mailing</AddressType>
									<CityName>HEMPSTEAD</CityName>
									<PostalCode>11550</PostalCode>
									<StateCode>NY</StateCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1" xlink:label="PARTY1_ROLE1">
									<ROLE_DETAIL>
										<PartyRoleType>Borrower</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
						<PARTY SequenceNumber="2" xlink:label="PARTY2">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue></ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Other</ContactPointRoleType>
											<ContactPointRoleTypeOtherDescription>Personal email</ContactPointRoleTypeOtherDescription>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="2">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Home</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>Mickey</FirstName>
									<FullName>Mickey Mouse</FullName>
									<LastName>Mouse</LastName>
									<MiddleName/>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS>
									<AddressLineText>26 Green Ave</AddressLineText>
									<AddressType>Mailing</AddressType>
									<CityName>HEMPSTEAD</CityName>
									<PostalCode>11550</PostalCode>
									<StateCode>NY</StateCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1" xlink:label="PARTY2_ROLE1">
									<ROLE_DETAIL>
										<PartyRoleType>Borrower</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
						<PARTY SequenceNumber="3" xlink:label="PARTY3">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue></ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Work</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="2">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Home</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>Mickey</FirstName>
									<FullName>Mickey Mouse</FullName>
									<LastName>Mouse</LastName>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS>
									<AddressLineText>907 Pleasant Valley Avenue Suite 3</AddressLineText>
									<AddressType>Mailing</AddressType>
									<CityName>Mount Laurel</CityName>
									<PostalCode>08054</PostalCode>
									<StateCode>NJ</StateCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1" xlink:label="PARTY3_ROLE1">
									<FULFILLMENT_PARTY>
										<FulfillmentPartyRoleType>FHMC</FulfillmentPartyRoleType>
									</FULFILLMENT_PARTY>
									<ROLE_DETAIL>
										<PartyRoleType>LoanCloser</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
					</PARTIES>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<CLOSING>
								<CLOSING_LOCATIONS>
									<CLOSING_LOCATION SequenceNumber="1">
										<ADDRESS>
											<AddressAdditionalLineText/>
											<AddressLineText>26 Green Ave</AddressLineText>
											<CityName>Hempstead</CityName>
											<PostalCode>11550</PostalCode>
											<StateCode>NY</StateCode>
										</ADDRESS>
										<CLOSING_LOCATION_DETAIL>
											<ClosingEventLocationType>Other</ClosingEventLocationType>
											<ClosingEventLocationTypeOtherDescription>Subject Property</ClosingEventLocationTypeOtherDescription>
										</CLOSING_LOCATION_DETAIL>
									</CLOSING_LOCATION>
								</CLOSING_LOCATIONS>
								<CLOSING_REQUEST>
									<CLOSING_REQUEST_DETAIL>
										<ClosingScheduledDatetime DisplayTimeZoneText="UTC-04:00">2023-08-29T11:00:00-04:00</ClosingScheduledDatetime>
									</CLOSING_REQUEST_DETAIL>
								</CLOSING_REQUEST>
							</CLOSING>
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>200146487868</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Reschedule Confirmed:

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Reschedule Confirmed

RescheduleConfirmed
Example:

- See ScheduledConfirmed

# Notary Assigned:

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Notary Assigned

NotaryAssigned
Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-4">2024-02-07T11:00:44-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierwnerURI="urn:lender.com:2013:ApplicationID">MAX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-4">2024-02-07T11:00:44-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierwnerURI="urn:lender.com:2013:EnvironmentID">DEV1</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText>Signing Scheduled</LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
										<inkd:EventId>NotaryAssigned</inkd:EventId>
										<inkd:TransactionID>{{TransactionID}}</inkd:TransactionID>
										<inkd:VendorOrderIdentifier>{{VendorOrderIdentifier}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<PARTIES>
						<PARTY SequenceNumber="1">
							<INDIVIDUAL>
								<CONTACT_POINTS>
									<CONTACT_POINT SequenceNumber="1">
										<CONTACT_POINT_EMAIL>
											<ContactPointEmailValue></ContactPointEmailValue>
										</CONTACT_POINT_EMAIL>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Work</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
									<CONTACT_POINT SequenceNumber="2">
										<CONTACT_POINT_TELEPHONE>
											<ContactPointTelephoneValue></ContactPointTelephoneValue>
										</CONTACT_POINT_TELEPHONE>
										<CONTACT_POINT_DETAIL>
											<ContactPointRoleType>Work</ContactPointRoleType>
										</CONTACT_POINT_DETAIL>
									</CONTACT_POINT>
								</CONTACT_POINTS>
								<NAME>
									<FirstName>MICKEY</FirstName>
									<FullName>MICKEY MOUSE</FullName>
									<LastName>MOUSE</LastName>
								</NAME>
							</INDIVIDUAL>
							<ADDRESSES>
								<ADDRESS SequenceNumber="1">
									<AddressLineText>5082 BREEZEFIELD DR SE</AddressLineText>
									<CityName>KENTWOOD</CityName>
									<PostalCode>49512</PostalCode>
								</ADDRESS>
							</ADDRESSES>
							<ROLES>
								<ROLE SequenceNumber="1">
									<ROLE_DETAIL>
										<PartyRoleType>Notary</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
					</PARTIES>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2001401605</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Closing Package Approved By Vendor

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Closing Package Approved By Vendor

ClosingPackageApprovedByVendor
Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-4">2023-08-11T15:18:37-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierwnerURI="urn:lender.com:2013:ApplicationID">MAX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-4">2023-08-11T15:18:37-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierwnerURI="urn:lender.com:2013:EnvironmentID">DEV1</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText>Document Package Received by Vendor</LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
										<inkd:EventId>UpdateStatus</inkd:EventId>
										<inkd:TransactionID>{{TransactionID}}</inkd:TransactionID>
										<inkd:VendorOrderIdentifier>{{VendorOrderIdentifier}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>200145820133</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
							<STATUSES>
								<STATUS>
									<StatusName>ClosingPackageApprovedByVendor</StatusName>
								</STATUS>
							</STATUSES>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Closing Package Delivered By Lender

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Closing Package Delivered By Lender

ClosingPackageDeliveredByLender
Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<MESSAGE xmlns="http://www.mismo.org/residential/2009/schemas" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkd="http://www.simplysecuresign.com/schema" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-5">2024-02-12T09:07:00-05:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">MAX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-5">2024-02-12T09:07:00-05:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:EnvironmentID">DEV1</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<CLOSING_INFORMATION>
								<CLOSING_INFORMATION_DETAIL>
									<ClosingDocumentsExpirationDate>2024-02-14</ClosingDocumentsExpirationDate>
									<ClosingDocumentsExpirationTime>09:07:00-05:00</ClosingDocumentsExpirationTime>
								</CLOSING_INFORMATION_DETAIL>
							</CLOSING_INFORMATION>
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber='1'>
									<LoanCommentText>Closing Package delivered by lender</LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<LOAN_DETAIL>
								<ENoteIndicator>true</ENoteIndicator>
							</LOAN_DETAIL>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information>
										<inkd:CreatedBy></inkd:CreatedBy>
										<inkd:EventId>UpdateStatus</inkd:EventId>
										<inkd:EventIdentifier>1234</inkd:EventIdentifier>
										<inkd:TransactionID>{{TransactionID}}</inkd:TransactionID>
										<inkd:UserName>{username}</inkd:UserName>
										<inkd:VendorOrderIdentifier>{{VendorOrderIdentifier}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
							<STATUSES>
								<STATUS>
									<StatusName>DeliverClosingPackage</StatusName>
								</STATUS>
							</STATUSES>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
	<DOCUMENT_SETS>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>CLOSINGDOCS</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Closing Docs</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2016-03-14T09:07:00-05:00</ObjectCreatedDatetime>
					<ObjectDescription>Closing Package</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Closing Package.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>CLOSINGDOCS</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Closing Docs</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>xml</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-02-12T09:07:00-05:00</ObjectCreatedDatetime>
					<ObjectDescription>Closing Package</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Closing Package.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
	</DOCUMENT_SETS>
</MESSAGE>
```

# Executed Docs Uploaded

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Executed Docs Uploaded

ExecutedDocsUploaded
Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-4">2023-06-16T13:57:28-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierwnerURI="urn:lender.com:2013:ApplicationID">MAX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-4">2023-06-16T13:57:28-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierwnerURI="urn:lender.com:2013:EnvironmentID">DEV1</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<LOAN_COMMENTS>
								<LOAN_COMMENT>
									<LoanCommentText>Executed Closing Package delivered to lender</LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
										<inkd:EventId>UpdateStatus</inkd:EventId>
										<inkd:TransactionID>{{TransactionID}}</inkd:TransactionID>
										<inkd:VendorOrderIdentifier>{{VendorOrderIdentifier}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>200144300718</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
							<STATUSES>
								<STATUS>
									<StatusName>AddExecutedDocs</StatusName>
								</STATUS>
							</STATUSES>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
	<DOCUMENT_SETS>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>ExecutedClosingPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Executed Closing Package</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}<EmbeddedContentXML>
					<MIMETypeIdentifier>PDF</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2023-06-16T13:57:29-05:00</ObjectCreatedDatetime>
					<ObjectDescription>Executed Closing Package</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>SIGNED DOCS.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
	</DOCUMENT_SETS>
</MESSAGE>
```

# Executed Docs Delivered

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Executed Docs Delivered

ExecutedDocsDelivered
Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<MESSAGE xmlns="http://www.mismo.org/residential/2009/schemas" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkd="http://www.simplysecuresign.com/schema" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-4:00">2024-03-21T13:31:38-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">SSS</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-4:00">2024-03-21T13:31:38-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:EnvironmentID">Stage</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText>Closing Package Executed successfully</LoanCommentText>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information>
										<inkd:EventId>ExecutedDocsDelivered</inkd:EventId>
										<inkd:TransactionID>4-0107409781-1100401844</inkd:TransactionID>
										<inkd:VendorOrderIdentifier>161643</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2001808546</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Electronic Signed Completed

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Electronic Signed Completed

eSignedCompleted
Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<MESSAGE xmlns="http://www.mismo.org/residential/2009/schemas" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkd="http://www.simplysecuresign.com/schema" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-4:00">2024-04-18T13:56:01-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">SSS</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-4:00">2024-04-18T13:56:01-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:EnvironmentID">Dev</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information>
										<inkd:EventId>eSignCompleted</inkd:EventId>
										<inkd:TransactionID>{{TransactionID}}</inkd:TransactionID>
										<inkd:VendorOrderIdentifier>{{VendorOrderIdentifier}}</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2001401605</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
	<DOCUMENT_SETS>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>1003 Uniform Residential Loan Application - 1-2021 (MICKEY MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>1003 Uniform Residential Loan Application - 1-2021 (MICKEY MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>1003 Uniform Residential Loan Application - 1-2021 (MICKEY MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>1003 Uniform Residential Loan Application - 1-2021 (MINNIE MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>1003 Uniform Residential Loan Application - 1-2021 (MINNIE MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>1003 Uniform Residential Loan Application - 1-2021 (MINNIE MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>HUD Addendum to Uniform Residential Loan Application (MICKEY MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>HUD Addendum to Uniform Residential Loan Application (MICKEY MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>HUD Addendum to Uniform Residential Loan Application (MICKEY MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>HUD Addendum to Uniform Residential Loan Application (MINNIE MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>HUD Addendum to Uniform Residential Loan Application (MINNIE MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>HUD Addendum to Uniform Residential Loan Application (MINNIE MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>FACT Act Notice</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>FACT Act Notice</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>FACT Act Notice.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>CA Per Diem Interest Disclosure</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>CA Per Diem Interest Disclosure</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>CA Per Diem Interest Disclosure.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>CA Impound Account Statement</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>CA Impound Account Statement</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>CA Impound Account Statement.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>CA Notice To Cosigner</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>CA Notice To Cosigner</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>CA Notice To Cosigner.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>HUD Appraised Value Disclosure</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>HUD Appraised Value Disclosure</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>HUD Appraised Value Disclosure.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Lender's Closing Affidavit</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Lender's Closing Affidavit</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Lender's Closing Affidavit.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Taxpayer Consent Form</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Taxpayer Consent Form</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Taxpayer Consent Form.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>4506-C IVES Request for Transcript of Tax Return (MICKEY MOUSE, 1040)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>4506-C IVES Request for Transcript of Tax Return (MICKEY MOUSE, 1040)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>4506-C IVES Request for Transcript of Tax Return (MICKEY MOUSE, 1040).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>4506-C IVES Request for Transcript of Tax Return (MINNIE MOUSE, 1040)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>4506-C IVES Request for Transcript of Tax Return (MINNIE MOUSE, 1040)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>4506-C IVES Request for Transcript of Tax Return (MINNIE MOUSE, 1040).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>W-9 Taxpayer ID (MICKEY MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>W-9 Taxpayer ID (MICKEY MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>W-9 Taxpayer ID (MICKEY MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>W-9 Taxpayer ID (MINNIE MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>W-9 Taxpayer ID (MINNIE MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>W-9 Taxpayer ID (MINNIE MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Escrow Account Disclosure Enhanced Fees</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Escrow Account Disclosure Enhanced Fees</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Escrow Account Disclosure Enhanced Fees.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>First Payment Letter Enhanced Fees</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>First Payment Letter Enhanced Fees</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>First Payment Letter Enhanced Fees.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Temporary Payment Coupon</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Temporary Payment Coupon</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Temporary Payment Coupon.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Amortization Schedule</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Amortization Schedule</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Amortization Schedule.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>CONSENT TO CONTACT (OPTIONAL) (MICKEY MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>CONSENT TO CONTACT (OPTIONAL) (MICKEY MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>CONSENT TO CONTACT (OPTIONAL) (MICKEY MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>CONSENT TO CONTACT (OPTIONAL) (MINNIE MOUSE)</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>CONSENT TO CONTACT (OPTIONAL) (MINNIE MOUSE)</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>CONSENT TO CONTACT (OPTIONAL) (MINNIE MOUSE).pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Appraisal Acknowledgment</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:55:59-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Appraisal Acknowledgment</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>Appraisal Acknowledgment.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eSignPackage</DocumentSetUsageCode>
					<DocumentSetUsageDescription>Merged PDF</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:56:00-04:00</ObjectCreatedDatetime>
					<ObjectDescription>Merged PDF</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>MergedPDF.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
		<DOCUMENT_SET SequenceNumber="1">
			<DOCUMENT_SET_USAGES>
				<DOCUMENT_SET_USAGE SequenceNumber="1">
					<DocumentSetUsageCode>eCloseAuditLog</DocumentSetUsageCode>
					<DocumentSetUsageDescription>eCloseAuditLog</DocumentSetUsageDescription>
				</DOCUMENT_SET_USAGE>
			</DOCUMENT_SET_USAGES>
			<FOREIGN_OBJECTS>
				<FOREIGN_OBJECT SequenceNumber="1">
					<EmbeddedContentXML>{{base64}}</EmbeddedContentXML>
					<MIMETypeIdentifier>pdf</MIMETypeIdentifier>
					<ObjectCreatedDatetime>2024-04-18T13:56:01-04:00</ObjectCreatedDatetime>
					<ObjectDescription>eCloseAuditLog-1978433</ObjectDescription>
					<ObjectEncodingType>Base64</ObjectEncodingType>
					<ObjectName>eCloseAuditLog-1978433.pdf</ObjectName>
				</FOREIGN_OBJECT>
			</FOREIGN_OBJECTS>
		</DOCUMENT_SET>
	</DOCUMENT_SETS>
</MESSAGE>
```

# Cancel All Docs

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Cancel All Docs

CancelAllDocs
Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC-04:00">2024-03-18T15:43:39-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">XXX</DataVersionIdentifier>
			<DataVersionName>SourceSystem</DataVersionName>
		</ABOUT_VERSION>
		<ABOUT_VERSION SequenceNumber="2">
			<CreatedDatetime DisplayTimeZoneText="UTC-04:00">2024-03-18T15:43:39-04:00</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:EnvironmentID">PROD</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET>
			<DEALS>
				<DEAL>
					<LOANS>
						<LOAN>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information xmlns:xsd="http://www.w3.org/2001/XMLSchema">
										<inkd:CreatedBy></inkd:CreatedBy>
										<inkd:EventId>UpdateStatus</inkd:EventId>
										<inkd:TransactionID>{{transactionID}}</inkd:TransactionID>
										<inkd:UserName>{username}</inkd:UserName>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<SERVICES>
						<SERVICE SequenceNumber="1" xlink:label="SERVICE1">
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>200146623142</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
							<STATUSES>
								<STATUS>
									<StatusName>CancelAllDocs</StatusName>
								</STATUS>
							</STATUSES>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Cancel Order

- **API Endpoint:** https://app.gridbase.io/v1/orders/signing/signing-process/{IntegrationId}

## Usage

Cancel Order

CancelOrder
Example:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MESSAGE xmlns:inkd="http://www.simplysecuresign.com/schema" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.mismo.org/residential/2009/schemas" MISMOReferenceModelIdentifier="3.4">
	<ABOUT_VERSIONS>
		<ABOUT_VERSION SequenceNumber="1">
			<CreatedDatetime DisplayTimeZoneText="UTC">2023-08-23T16:06:37Z</CreatedDatetime>
			<DataVersionIdentifier IdentifierOwnerURI="urn:lender.com:2013:ApplicationID">DEV</DataVersionIdentifier>
			<DataVersionName>SourceEnvironment</DataVersionName>
		</ABOUT_VERSION>
	</ABOUT_VERSIONS>
	<DEAL_SETS>
		<DEAL_SET SequenceNumber="1">
			<DEALS>
				<DEAL SequenceNumber="1">
					<LOANS>
						<LOAN SequenceNumber="1">
							<LOAN_COMMENTS>
								<LOAN_COMMENT SequenceNumber="1">
									<LoanCommentText/>
								</LOAN_COMMENT>
							</LOAN_COMMENTS>
							<LOAN_IDENTIFIERS>
								<LOAN_IDENTIFIER SequenceNumber="1">
									<LoanIdentifier>0151772480</LoanIdentifier>
									<LoanIdentifierType>LenderLoan</LoanIdentifierType>
								</LOAN_IDENTIFIER>
							</LOAN_IDENTIFIERS>
							<EXTENSION>
								<OTHER>
									<inkd:Transaction_Information>
										<inkd:CreatedBy></inkd:CreatedBy>
										<inkd:EventId>UpdateStatus</inkd:EventId>
										<inkd:EventIdentifier>4e4caee8-ba70-405e-9e44-6e4517846ba2</inkd:EventIdentifier>
										<inkd:TransactionID>{{transacctionID}}</inkd:TransactionID>
										<inkd:UserName>{username}</inkd:UserName>
										<inkd:VendorOrderIdentifier>110T</inkd:VendorOrderIdentifier>
									</inkd:Transaction_Information>
								</OTHER>
							</EXTENSION>
						</LOAN>
					</LOANS>
					<PARTIES>
						<PARTY SequenceNumber="1">
							<INDIVIDUAL>
								<CONTACT_POINTS/>
								<NAME>
									<FirstName/>
									<LastName/>
									<MiddleName/>
								</NAME>
							</INDIVIDUAL>
							<ROLES>
								<ROLE SequenceNumber="1">
									<LICENSES>
										<LICENSE>
											<LICENSE_DETAIL>
												<LicenseIdentifier/>
											</LICENSE_DETAIL>
										</LICENSE>
									</LICENSES>
									<ROLE_DETAIL>
										<PartyRoleType>Appraiser</PartyRoleType>
									</ROLE_DETAIL>
								</ROLE>
							</ROLES>
						</PARTY>
					</PARTIES>
					<SERVICES>
						<SERVICE SequenceNumber="1">
							<REASONS>
								<REASON>
									<ReasonCode>403</ReasonCode>
									<ReasonCodeDescription>Cancelled Order-Lender</ReasonCodeDescription>
									<ReasonCommentText>Need to re-send order</ReasonCommentText>
								</REASON>
							</REASONS>
							<SERVICE_PRODUCT>
								<SERVICE_PRODUCT_REQUEST>
									<SERVICE_PRODUCT_DETAIL>
										<ServiceProductDescription>Closing</ServiceProductDescription>
										<ServiceProductIdentifier>201</ServiceProductIdentifier>
									</SERVICE_PRODUCT_DETAIL>
									<SERVICE_PRODUCT_NAMES>
										<SERVICE_PRODUCT_NAME>
											<SERVICE_PRODUCT_NAME_DETAIL>
												<ServiceProductNameIdentifier>2001497861</ServiceProductNameIdentifier>
											</SERVICE_PRODUCT_NAME_DETAIL>
										</SERVICE_PRODUCT_NAME>
									</SERVICE_PRODUCT_NAMES>
								</SERVICE_PRODUCT_REQUEST>
							</SERVICE_PRODUCT>
							<STATUSES>
								<STATUS>
									<StatusName>CancelOrder</StatusName>
								</STATUS>
							</STATUSES>
						</SERVICE>
					</SERVICES>
				</DEAL>
			</DEALS>
		</DEAL_SET>
	</DEAL_SETS>
</MESSAGE>
```

# Summary

TBD
