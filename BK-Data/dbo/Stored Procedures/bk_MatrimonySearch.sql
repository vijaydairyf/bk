﻿
CREATE PROCEDURE [dbo].[bk_MatrimonySearch]
(    	
	@CategoryID INT = NULL,
	@NukhID INT = NULL,
	@City NVARCHAR(50) = NULL,
	@State NVARCHAR(50) = NULL,
	@Country NVARCHAR(50) = NULL,
	@Gender CHAR(1) = NULL,
	@OccupationId INT = NULL,
	@MaritalStatusId INT = NULL,
	@MinDOB DATETIME = NULL,
	@MaxDOB DATETIME = NULL,	
	@PageSize INT = 50,
	@CurrentPage INT = 1,
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

	SELECT @FirstRecord = (@CurrentPage - 1) * @PageSize
	SELECT @LastRecord = (@CurrentPage * @PageSize + 1);

	WITH TempResult AS
	(
		SELECT
			ROW_NUMBER() OVER(ORDER BY m.MemberId ASC) AS RowNum,
			m.MemberID,
			f.FamilyID,
			m.FirstName,
			m.LastName,								
			f.Address1,
			f.Address2,
			f.City,
			f.State,
			f.Country,
			m.Gender
		FROM
			Members m 
			JOIN Matrimonials mat ON mat.MemberID = m.MemberID
			JOIN FamilyMemberAssociation fma ON fma.MemberId = m.MemberID
			JOIN Families f ON f.FamilyID = fma.FamilyId		
		WHERE			
			(@CategoryID IS NULL OR f.CategoryID = @CategoryID)
			AND (@NukhID IS NULL OR f.NukhID = @NukhID)
			AND (@City IS NULL OR f.City = @City)
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
			JOIN FamilyMemberAssociation fma ON fma.MemberId = m.MemberID
			JOIN Families f ON f.FamilyID = fma.FamilyId		
		WHERE			
			(@CategoryID IS NULL OR f.CategoryID = @CategoryID)
			AND (@NukhID IS NULL OR f.NukhID = @NukhID)
			AND (@City IS NULL OR f.City = @City)
			AND (@State IS NULL OR f.State = @State)
			AND (@Country IS NULL OR f.Country = @Country)
			AND (@Gender IS NULL OR m.Gender = @Gender)
			AND (@OccupationId IS NULL OR m.OccupationID = @OccupationId)
			AND (@MaritalStatusId IS NULL OR mat.MaritalStatusID = @MaritalStatusId)
			AND (@MinDOB IS NULL OR m.DOB >= @MinDOB)
			AND (@MaxDOB IS NULL OR m.DOB <= @MaxDOB)
			
END

SET NOCOUNT OFF