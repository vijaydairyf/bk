﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BK.ViewModel
{
    public class FamilyViewModel
    {
        public FamilyViewModel()
        {
            this.Members = new List<FamilyMemberViewModel>();
            this.PendingApprovals = new List<PendingApprovalViewModel>();
        }


        [JsonProperty("familyId")]
        public int FamilyID { get; set; }

        [JsonProperty("nukhId")]
        public int NukhID { get; set; }

        [JsonProperty("categoryId")]
        public int CategoryID { get; set; }

        [JsonProperty("hofId")]
        public int HeadOfFamilyID { get; set; }

        [JsonProperty("hofFirstName")]
        public string HeadOfFirstName { get; set; }

        [JsonProperty("hofLastName")]
        public string HeadOfLastName { get; set; }

        [JsonProperty("familyNative")]
        public string FamilyNative { get; set; }

        [JsonProperty("address1")]
        public string Address1 { get; set; }

        [JsonProperty("address2")]
        public string Address2 { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("district")]
        public string District { get; set; }

        [JsonProperty("state")]
        public string State { get; set; }

        [JsonProperty("postalcode")]
        public string PostalCode { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }

        [JsonProperty("canEdit")]
        public bool CanEdit { get; set; }

        [JsonProperty("members")]
        public List<FamilyMemberViewModel> Members { get; set; }

        [JsonProperty("approvals")]
        public List<PendingApprovalViewModel> PendingApprovals { get; set; }
    }

    public class FamilyMemberViewModel
    {
        [JsonProperty("memberId")]
        public int MemberID { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("dob")]
        public DateTime? DOB { get; set; }

        [JsonProperty("maritalStatusId")]
        public int MaritalStatusId { get; set; }

        [JsonProperty("canEdit")]
        public bool CanEdit { get; set; }

        [JsonProperty("relatedToName")]
        public string RelatedToName { get; set; }

        [JsonProperty("alive")]
        public bool Alive { get; set; }

        [JsonProperty("gender")]
        public bool Gender { get; set; }

        [JsonProperty("selected")]
        public bool Selected { get; set; }

        [JsonProperty("relatedToId")]
        public int? RelatedToId { get; set; }

        [JsonProperty("relationTypeId")]
        public int? RelationTypeId { get; set; }

        [JsonProperty("matrimonialExists")]
        public bool MatrimonialExists { get; set; }

        [JsonProperty("dod")]
        public DateTime? DOD { get; set; }

        [JsonProperty("paternalFamilyId")]
        public int? PaternalFamilyId { get; set; }

        [JsonProperty("paternalFamilyName")]
        public string PaternalFamilyName { get; set; }

        [JsonProperty("maternalFamilyId")]
        public int? MaternalFamilyId { get; set; }

        [JsonProperty("maternalFamilyName")]
        public string MaternalFamilyName { get; set; }

        [JsonProperty("defaultFamilyId")]
        public int? DefaultFamilyId { get; set; }

        [JsonProperty("age")]
        public int Age
        {
            get {
                if (!this.DOB.HasValue)
                    return 0;

                if (!this.Alive && !this.DOD.HasValue)
                    return 0;

                int age = DateTime.Today.Year - DOB.Value.Year;

                if (!this.Alive)
                    age = this.DOD.Value.Year - DOB.Value.Year;  

                if (age > 0 && this.DOB.Value > DateTime.Today.AddYears(-age))
                    age--;

                return age;
            }
        }
    }
}