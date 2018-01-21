﻿CREATE TABLE [dbo].[Families] (
    [FamilyID]       INT            IDENTITY (1, 1) NOT NULL,
    [ParentFamilyID] INT            NULL,
    [FamilySID]      NVARCHAR (18)  NOT NULL,
    [NukhID]           INT  NOT NULL,
    [CategoryID]       INT  NOT NULL,
    [Address1]       NVARCHAR (50)  NOT NULL,
    [Address2]       NVARCHAR (50)  NULL,
    [City]           NVARCHAR (50)  NOT NULL,
    [State]          NVARCHAR (50)  NOT NULL,
    [PostalCode]     NVARCHAR (10)  NOT NULL,
    [Country]        NVARCHAR (50)  NULL,
    [CreatedOn]      DATETIME2 (7)  CONSTRAINT [DF_Families_AddedOn] DEFAULT (getdate()) NOT NULL,
    [CreatedBy]      DATETIME2 (7)  NOT NULL,
    [ModifiedOn]     DATETIME2 (7)  NULL,
    [ModifiedBy]     INT            NULL,
    CONSTRAINT [PK_Families] PRIMARY KEY CLUSTERED ([FamilyID] ASC)
);

