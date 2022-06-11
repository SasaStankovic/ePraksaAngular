import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { PrakseService } from 'src/app/_servisi/prakse.service';
import { InternshipType } from 'src/app/_tipovi/internship-type';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource: any[] = [];
  displayedColumns = ['internshipName', 'comanyName', 'internshipType', 'internshipStatus'];

  types = new FormControl('FINISHED');


  constructor(
    public praksa: PrakseService,
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.getInternships();
  }

  getInternships() {
    this.dataSource = [];

    this.praksa.getPrakseByStatusAndType(this.types.value, InternshipType.Strucna).subscribe(
      {
        next: res => {
          res.forEach((e: any) => {
            this.dataSource.push({
              internshipName: e.title,
              comanyName: e.company.name,
              internshipType: e.internshipType,
              internshipStatus: e.status,
              id: e.internshipId,
            });
          });
          if (!this.dataSource?.length)
            this.dataSource.push({ internshipName: "Lista je prazna" })
          this.table.renderRows();
          console.log("res", res)
          console.log("result", this.dataSource);
        }
      }
    )
  }

  navigateToStudents(id: number) {
    this.router.navigate(['/commission_member', 'internships', id, 'students'])
  }

}
