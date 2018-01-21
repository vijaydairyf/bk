﻿CREATE TABLE [dbo].[Members] (
    [MemberID]         INT              IDENTITY (1, 1) NOT NULL,
    [MemberSID]        NVARCHAR (18)    NULL,
    [FirstName]        NVARCHAR (50)    NOT NULL,
    [LastName]         NVARCHAR (50)    NOT NULL,
    [NickName]         NVARCHAR (50)    NULL,
    [Gender]           BIT              CONSTRAINT [DF_FamilyMembers_Gender] DEFAULT ((1)) NOT NULL,
    [DOB]              DATETIME2 (7)    NULL,
    [UseFamilyAddress] BIT              CONSTRAINT [DF_FamilyMembers_UseFamilyAddress] DEFAULT ((1)) NOT NULL,
    [Address1]         NVARCHAR (50)    NULL,
    [Address2]         NVARCHAR (50)    NULL,
    [City]             NVARCHAR (50)    NULL,
    [State]            NVARCHAR (50)    NULL,
    [PostalCode]       NVARCHAR (10)    NULL,
    [Country]          NVARCHAR (50)    NULL,
    [EducationLevel]   NVARCHAR (50)    NULL,
    [EducationField]   NVARCHAR (50)    NULL,
    [WorkingWith]      NVARCHAR (50)    NULL,
    [JobTitle]         NVARCHAR (50)    NULL,
    [EmailAddress]     NVARCHAR (100)   NULL,
    [AadhaarNumber]    BIGINT           NULL,
    [InstagramHandle]  NVARCHAR (50)    NULL,
    [FacebookHandle]   NVARCHAR (50)    NULL,
    [TwitterHandle]    NVARCHAR (50)    NULL,
    [Phone]            NVARCHAR (15)    NULL,
    [Password]         NVARCHAR (300)   NULL,
    [LastLoginOn]      DATETIME2 (7)    NULL,
    [PasswordUID]      UNIQUEIDENTIFIER NULL,
    [Active]           BIT              CONSTRAINT [DF_Members_Active] DEFAULT ((1)) NOT NULL,
    [CreatedOn]        DATETIME2 (7)    CONSTRAINT [DF_FamilyMembers_CreatedOn] DEFAULT (getdate()) NOT NULL,
    [CreatedBy]        INT              NULL,
    [ModifiedOn]       DATETIME2 (7)    NULL,
    [ModifiedBy]       INT              NULL,
    CONSTRAINT [PK_FamilyMembers_1] PRIMARY KEY CLUSTERED ([MemberID] ASC)
);



