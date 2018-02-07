import { Component, OnInit } from '@angular/core';
import { FamilyModel, FamilyMemberModel } from '../../models/familyModel';
import { bkDataService } from '../../services/bk-data.service';
import { NotificationsService } from 'angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { bkAuthService } from '../../services/auth-service';
import { ConfirmationService, ResolveEmit } from '@jaspero/ng-confirmations';
import { Location } from '@angular/common';
import { RELATION_TYPES_DATA } from '../../data/relations';
import { CATEGORIES_DATA} from '../../data/categories';
import { NUKHS_LOOKUP_DATA } from '../../data/nukhsLookup';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.scss'],
  providers: [bkDataService, bkAuthService]
})
export class ForkComponent implements OnInit {
  
  model: FamilyModel;
  forkForm: FormGroup;
  familyId: number;
  dataSource: any;
  readonly NUKHS_LOOKUP_DATA_LOCAL = NUKHS_LOOKUP_DATA;
  readonly CATEGORIES_DATA_LOCAL = CATEGORIES_DATA;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: bkDataService,
    private alertService: NotificationsService, public authService: bkAuthService,
    private _confirmation: ConfirmationService, private location: Location) {

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

  getRelations(member: FamilyMemberModel): any[] {
    if (member.gender === 'M')
      return RELATION_TYPES_DATA.filter(x => x.male);
    else if (member.gender === 'F')
      return RELATION_TYPES_DATA.filter(x => !x.male);
    else
      return RELATION_TYPES_DATA;
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
