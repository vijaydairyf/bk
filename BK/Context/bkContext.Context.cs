﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BK.Context
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class bkContext : DbContext
    {
        public bkContext()
            : base("name=bkContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual ObjectResult<bk_MemberSearchBasic_Result> bk_MemberSearchBasic(Nullable<int> memberID, string phoneNumber, Nullable<long> aadhaarNumber, string email)
        {
            var memberIDParameter = memberID.HasValue ?
                new ObjectParameter("MemberID", memberID) :
                new ObjectParameter("MemberID", typeof(int));
    
            var phoneNumberParameter = phoneNumber != null ?
                new ObjectParameter("PhoneNumber", phoneNumber) :
                new ObjectParameter("PhoneNumber", typeof(string));
    
            var aadhaarNumberParameter = aadhaarNumber.HasValue ?
                new ObjectParameter("AadhaarNumber", aadhaarNumber) :
                new ObjectParameter("AadhaarNumber", typeof(long));
    
            var emailParameter = email != null ?
                new ObjectParameter("Email", email) :
                new ObjectParameter("Email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bk_MemberSearchBasic_Result>("bk_MemberSearchBasic", memberIDParameter, phoneNumberParameter, aadhaarNumberParameter, emailParameter);
        }
    
        public virtual ObjectResult<bk_PendingApprovals_Result> bk_PendingApprovals(Nullable<int> memberID)
        {
            var memberIDParameter = memberID.HasValue ?
                new ObjectParameter("MemberID", memberID) :
                new ObjectParameter("MemberID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bk_PendingApprovals_Result>("bk_PendingApprovals", memberIDParameter);
        }
    
        public virtual int bk_DeleteFamily(Nullable<int> familyID)
        {
            var familyIDParameter = familyID.HasValue ?
                new ObjectParameter("FamilyID", familyID) :
                new ObjectParameter("FamilyID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("bk_DeleteFamily", familyIDParameter);
        }
    
        public virtual int bk_DeleteMember(Nullable<int> familyID, Nullable<int> memberID)
        {
            var familyIDParameter = familyID.HasValue ?
                new ObjectParameter("FamilyID", familyID) :
                new ObjectParameter("FamilyID", typeof(int));
    
            var memberIDParameter = memberID.HasValue ?
                new ObjectParameter("MemberID", memberID) :
                new ObjectParameter("MemberID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("bk_DeleteMember", familyIDParameter, memberIDParameter);
        }
    
        public virtual ObjectResult<bk_GetFamilyMembers_Result> bk_GetFamilyMembers(Nullable<int> familyID)
        {
            var familyIDParameter = familyID.HasValue ?
                new ObjectParameter("FamilyID", familyID) :
                new ObjectParameter("FamilyID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bk_GetFamilyMembers_Result>("bk_GetFamilyMembers", familyIDParameter);
        }
    
        public virtual ObjectResult<bk_MatrimonySearch_Result> bk_MatrimonySearch(Nullable<int> categoryID, Nullable<int> nukhID, string city, string state, string country, string gender, Nullable<int> occupationId, Nullable<int> maritalStatusId, Nullable<System.DateTime> minDOB, Nullable<System.DateTime> maxDOB, Nullable<int> pageSize, Nullable<int> currentPage, ObjectParameter totalRecords)
        {
            var categoryIDParameter = categoryID.HasValue ?
                new ObjectParameter("CategoryID", categoryID) :
                new ObjectParameter("CategoryID", typeof(int));
    
            var nukhIDParameter = nukhID.HasValue ?
                new ObjectParameter("NukhID", nukhID) :
                new ObjectParameter("NukhID", typeof(int));
    
            var cityParameter = city != null ?
                new ObjectParameter("City", city) :
                new ObjectParameter("City", typeof(string));
    
            var stateParameter = state != null ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(string));
    
            var countryParameter = country != null ?
                new ObjectParameter("Country", country) :
                new ObjectParameter("Country", typeof(string));
    
            var genderParameter = gender != null ?
                new ObjectParameter("Gender", gender) :
                new ObjectParameter("Gender", typeof(string));
    
            var occupationIdParameter = occupationId.HasValue ?
                new ObjectParameter("OccupationId", occupationId) :
                new ObjectParameter("OccupationId", typeof(int));
    
            var maritalStatusIdParameter = maritalStatusId.HasValue ?
                new ObjectParameter("MaritalStatusId", maritalStatusId) :
                new ObjectParameter("MaritalStatusId", typeof(int));
    
            var minDOBParameter = minDOB.HasValue ?
                new ObjectParameter("MinDOB", minDOB) :
                new ObjectParameter("MinDOB", typeof(System.DateTime));
    
            var maxDOBParameter = maxDOB.HasValue ?
                new ObjectParameter("MaxDOB", maxDOB) :
                new ObjectParameter("MaxDOB", typeof(System.DateTime));
    
            var pageSizeParameter = pageSize.HasValue ?
                new ObjectParameter("PageSize", pageSize) :
                new ObjectParameter("PageSize", typeof(int));
    
            var currentPageParameter = currentPage.HasValue ?
                new ObjectParameter("CurrentPage", currentPage) :
                new ObjectParameter("CurrentPage", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bk_MatrimonySearch_Result>("bk_MatrimonySearch", categoryIDParameter, nukhIDParameter, cityParameter, stateParameter, countryParameter, genderParameter, occupationIdParameter, maritalStatusIdParameter, minDOBParameter, maxDOBParameter, pageSizeParameter, currentPageParameter, totalRecords);
        }
    
        public virtual ObjectResult<bk_MemberSearch_Result> bk_MemberSearch(string firstName, string lastName, Nullable<int> categoryID, Nullable<int> nukhID, string city, string state, string emailAddress, string phoneNumber, Nullable<int> pageSize, Nullable<int> currentPage, Nullable<bool> includeOnlyHOF, ObjectParameter totalRecords)
        {
            var firstNameParameter = firstName != null ?
                new ObjectParameter("FirstName", firstName) :
                new ObjectParameter("FirstName", typeof(string));
    
            var lastNameParameter = lastName != null ?
                new ObjectParameter("LastName", lastName) :
                new ObjectParameter("LastName", typeof(string));
    
            var categoryIDParameter = categoryID.HasValue ?
                new ObjectParameter("CategoryID", categoryID) :
                new ObjectParameter("CategoryID", typeof(int));
    
            var nukhIDParameter = nukhID.HasValue ?
                new ObjectParameter("NukhID", nukhID) :
                new ObjectParameter("NukhID", typeof(int));
    
            var cityParameter = city != null ?
                new ObjectParameter("City", city) :
                new ObjectParameter("City", typeof(string));
    
            var stateParameter = state != null ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(string));
    
            var emailAddressParameter = emailAddress != null ?
                new ObjectParameter("EmailAddress", emailAddress) :
                new ObjectParameter("EmailAddress", typeof(string));
    
            var phoneNumberParameter = phoneNumber != null ?
                new ObjectParameter("PhoneNumber", phoneNumber) :
                new ObjectParameter("PhoneNumber", typeof(string));
    
            var pageSizeParameter = pageSize.HasValue ?
                new ObjectParameter("PageSize", pageSize) :
                new ObjectParameter("PageSize", typeof(int));
    
            var currentPageParameter = currentPage.HasValue ?
                new ObjectParameter("CurrentPage", currentPage) :
                new ObjectParameter("CurrentPage", typeof(int));
    
            var includeOnlyHOFParameter = includeOnlyHOF.HasValue ?
                new ObjectParameter("IncludeOnlyHOF", includeOnlyHOF) :
                new ObjectParameter("IncludeOnlyHOF", typeof(bool));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<bk_MemberSearch_Result>("bk_MemberSearch", firstNameParameter, lastNameParameter, categoryIDParameter, nukhIDParameter, cityParameter, stateParameter, emailAddressParameter, phoneNumberParameter, pageSizeParameter, currentPageParameter, includeOnlyHOFParameter, totalRecords);
        }
    }
}
