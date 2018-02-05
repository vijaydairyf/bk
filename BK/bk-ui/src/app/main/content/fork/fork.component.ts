import { Component, OnInit } from '@angular/core';
import { FamilyModel, FamilyMemberModel } from '../../models/familyModel';
import { bkDataService } from '../../services/bk-data.service';
import { NotificationsService } from 'angular2-notifications';
import { NukhData } from '../../data/nukhs';
import { CategoryData } from '../../data/categories';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { FamilyLookupModel } from '../../models/familyLookupModel';
import { bkAuthService } from '../../services/auth-service';
import { ConfirmationService, ResolveEmit } from '@jaspero/ng-confirmations';
import { Location } from '@angular/common';
import { RelationTypeData } from '../../data/relations';
import { RelationTypeLookupModel } from '../../models/relationTypeLookupModel';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.scss'],
  providers: [bkDataService, NukhData, RelationTypeData, CategoryData, bkAuthService]
})
export class ForkComponent implements OnInit {
  
  model: FamilyModel;
  forkForm: FormGroup;
  familyId: number;
  dataSource: any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: bkDataService,
    private alertService: NotificationsService, public nukhs: NukhData, public authService: bkAuthService,
    private _confirmation: ConfirmationService, public categories: CategoryData, private location: Location,
    public relationTypes: RelationTypeData) {

    this.route.params.subscribe(params => {
      if (params.familyId > 0)
        this.familyId = params.familyId;
      else
        this.familyId = null;

      this.initializeComponent();
    });    
  }

  displayedColumns = ['selected', 'name', 'relationTypeId', 'relatedToId'];

  ngOnInit() {
    this.forkForm = new FormGroup({
      categoryId: new FormControl('', [Validators.required]),
      nukhId: new FormControl('', [Validators.required]),
      address1: new FormControl('', null),
      address2: new FormControl('', null),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      hof: new FormControl('', [Validators.required])
    });
  }

  initializeComponent(){
    this.model = new FamilyModel();
    this.dataSource = null;
    this.loadFamily();   
  }

  loadFamily() {
    this.dataService.getFamilyDetail(this.familyId).subscribe(
      (res) => {
        this.model = res.result;        
        this.model.hofId = null;
        this.dataSource = new MatTableDataSource<FamilyMemberModel>(this.model.members);
      },
      (err) => {
        if (err.errors)
          this.alertService.error('', err.errors[0]);
        else
          this.alertService.error('', err);
      }
    );
  }

  filterMember(member: FamilyMemberModel) {
    return member.selected === true;    
  }

  getRelations(member: FamilyMemberModel): RelationTypeLookupModel[] {
    if (member.gender === 'M')
      return this.relationTypes.data.filter(x => x.male);
    else if (member.gender === 'F')
      return this.relationTypes.data.filter(x => !x.male);
    else
      return this.relationTypes.data;
  }
  
  forkFamily(){
    if (this.model.members.filter(x => x.selected).length === 0)
    {
      this.alertService.alert('', 'Please select at least one family member to be part of new family');
      return;
    }

    this.dataService.forkFamily(this.model).subscribe(
      (res) => {
        this.alertService.success("New family created successfully");
        this.router.navigate(['family', res.result]);
      },
      (err) => {
        if (err.errors)
          this.alertService.error('', err.errors[0]);
        else
          this.alertService.error('', err);
      }
    );    
  }

  cancel(){
    this.location.back();
  }
}