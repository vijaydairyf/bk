import { Injectable } from '@angular/core';

export class RelationTypeModel {
    relationTypeId: number;
    relationType: string;
    male: boolean;
    constructor() { }
}

@Injectable()
export class RelationTypeData
{
    public data: RelationTypeModel[] = [
        {relationTypeId:1, relationType:'Son Of', male: true},
        {relationTypeId:2, relationType:'Grandson Of', male: true},
        {relationTypeId:3, relationType:'Great Grandson Of', male: true},
        {relationTypeId:4, relationType:'Daughter Of', male: false},
        {relationTypeId:5, relationType:'Granddaughter Of', male: false},
        {relationTypeId:6, relationType:'Great Granddaughter Of', male: false},
        {relationTypeId:7, relationType:'Wife Of', male: false}
    ];    
}
