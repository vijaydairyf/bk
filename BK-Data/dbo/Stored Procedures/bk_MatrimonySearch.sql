﻿
CREATE PROCEDURE [dbo].[bk_MatrimonySearch]
(    	
	@CategoryID INT = NULL,
	@NukhID INT = NULL,
	@City NVARCHAR(50) = NULL,
	@District NVARCHAR(50) = NULL,
	@State NVARCHAR(50) = NULL,
	@Country NVARCHAR(50) = NULL,
	@Gender BIT = NULL,
	@OccupationId INT = NULL,
	@MaritalStatusId INT = NULL,
	@MinDOB DATETIME = NULL,
	@MaxDOB DATETIME = NULL,	
	@PageSize INT = 50,
	@CurrentPage INT = 1,
	@SortOrder NVARCHAR(50) = NULL,
	@TotalRecords INT OUTPUT
)    
AS

SET NOCOUNT ON 

BEGIN
	
	DECLARE @FirstRecord INT
	DECLARE @LastRecord INT

	IF (@PageSize IS NULL)
		SET @PageSize = 50

	IF (@CurrentPage IS NULL)
		SET @CurrentPage = 1

	IF (@SortOrder IS NULL)
		SET @SortOrder = 'createdon desc'	

	SELECT @FirstRecord = (@CurrentPage - 1) * @PageSize
	SELECT @LastRecord = (@CurrentPage * @PageSize + 1);

	WITH TempResult AS
	(
		SELECT
			ROW_NUMBER() OVER(ORDER BY
				CASE WHEN @sortOrder = 'city asc' then f.City END ASC,				
				CASE WHEN @sortOrder = 'city desc' then f.City END DESC,	
				CASE WHEN @sortOrder = 'state asc' then f.State END ASC,				
				CASE WHEN @sortOrder = 'state desc' then f.State END DESC,	
				CASE WHEN @sortOrder = 'createdon asc' then mat.CreatedOn END ASC,
				CASE WHEN @sortOrder = 'createdon desc' then mat.CreatedOn END DESC,				
				CASE WHEN @sortOrder = 'income asc' then mat.MonthlyIncome END ASC,
				CASE WHEN @sortOrder = 'income desc' then mat.MonthlyIncome END DESC,				
				CASE WHEN @sortOrder = 'dob asc' then m.DOB END ASC,
				CASE WHEN @sortOrder = 'dob desc' then m.DOB END DESC) AS RowNum,
			m.MemberID,
			f.FamilyID,
			m.FirstName,
			m.LastName,								
			f.Address1,
			f.Address2,
			f.City,
			f.District,
			f.State,
			f.Country,
			m.Gender,
			m.DOB,
			m.EducationField,
			m.EducationLevel,
			m.OccupationID,			
			CASE WHEN mat.ModifiedOn > m.ModifiedOn THEN mat.ModifiedOn ELSE m.ModifiedOn END ModifiedOn,			
			mat.MonthlyIncome
		FROM
			Members m 
			JOIN Matrimonials mat ON mat.MemberID = m.MemberID
			JOIN FamilyMemberAssociation fma ON fma.MemberId = m.MemberID AND fma.DefaultFamily = 1
			JOIN Families f ON f.FamilyID = fma.FamilyId		
		WHERE			
			(@CategoryID IS NULL OR f.CategoryID = @CategoryID)
			AND (@NukhID IS NULL OR f.NukhID = @NukhID)
			AND (@City IS NULL OR f.City = @City)
			AND (@District IS NULL OR f.District = @District)
			AND (@State IS NULL OR f.State = @State)
			AND (@Country IS NULL OR f.Country = @Country)
			AND (@Gender IS NULL OR m.Gender = @Gender)
			AND (@OccupationId IS NULL OR m.OccupationID = @OccupationId)
			AND (@MaritalStatusId IS NULL OR mat.MaritalStatusID = @MaritalStatusId)
			AND (@MinDOB IS NULL OR m.DOB >= @MinDOB)
			AND (@MaxDOB IS NULL OR m.DOB <= @MaxDOB)
	)		

	SELECT 
		TOP (@LastRecord -1) *
	FROM
		TempResult
	WHERE
		RowNum > @FirstRecord
		AND RowNum < @LastRecord

	SELECT
		@TotalRecords = COUNT(1)
			FROM
			Members m 
			JOIN Matrimonials mat ON mat.MemberID = m.MemberID
			JOIN FamilyMemberAssociation fma ON fma.MemberId = m.MemberID AND fma.DefaultFamily = 1
			JOIN Families f ON f.FamilyID = fma.FamilyId		
		WHERE			
			(@CategoryID IS NULL OR f.CategoryID = @CategoryID)
			AND (@NukhID IS NULL OR f.NukhID = @NukhID)
			AND (@City IS NULL OR f.City = @City)
			AND (@District IS NULL OR f.District = @District)
			AND (@State IS NULL OR f.State = @State)
			AND (@Country IS NULL OR f.Country = @Country)
			AND (@Gender IS NULL OR m.Gender = @Gender)
			AND (@OccupationId IS NULL OR m.OccupationID = @OccupationId)
			AND (@MaritalStatusId IS NULL OR mat.MaritalStatusID = @MaritalStatusId)
			AND (@MinDOB IS NULL OR m.DOB >= @MinDOB)
			AND (@MaxDOB IS NULL OR m.DOB <= @MaxDOB)
			
END

SET NOCOUNT OFF