export class MemberModel {
    memberId: number;
    firstName: string;
    lastName: string;
    nickName: string;
    email: string;
    phoneNumber: number;  
    gender: boolean;
    dob: Date;
    birthPlace: string;
    alive: boolean;
    dod:Date;
    deathPlace: string;
    maritalStatusId: number;
    anniversary: Date;
    educationLevel: string;
    educationField: string;
    occupationId: number;
    companyName: string;
    jobTitle: string;
    instagramHandle: string;
    facebookHandle: string;
    twitterHandle: string;
    relationTypeId:number;
    relatedMemberId: number;
    familyId: number;    
    defaultFamily: boolean;
    photoUrl: string;    
    modifiedOn: Date;
    paternalFamilyId: number;
    paternalFamilyName: string;    
    maternalFamilyId: number;
    maternalFamilyName: string;    
    profileText: string;
    canEdit: boolean;

    constructor() { }
}