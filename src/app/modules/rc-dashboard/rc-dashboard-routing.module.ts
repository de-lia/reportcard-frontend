import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";
import {SchoolGuard} from "../../guards/school.guard";
import {RcSubjectsComponent} from "./components/rc-subjects/rc-subjects.component";
import {RcClassesComponent} from "./components/rc-classes/rc-classes.component";
import {ClassLevelComponent} from "./components/rc-classes/class-level/class-level.component";
import {RcStudentsComponent} from "./components/rc-students/rc-students.component";
import {RcApplicationsComponent} from "./components/rc-applications/rc-applications.component";
import {AddApplicationComponent} from "./components/rc-applications/add-application/add-application.component";
import {RcClasslistsComponent} from "./components/rc-classlists/rc-classlists.component";
import {RcSettingsComponent} from "./components/rc-settings/rc-settings.component";
import {RcHomeComponent} from "./components/rc-home/rc-home.component";
import {
  StudentApplicationComponent
} from "./components/rc-applications/student-application/student-application.component";
import {AddStudentComponent} from "./components/rc-students/add-student/add-student.component";
import {StudentComponent} from "./components/rc-students/student/student.component";

const routes: Routes = [
  {
    component: DashboardComponent, path: 'dashboard', canActivate: [AuthGuard, SchoolGuard],
    children: [
      {component: RcHomeComponent, path: ''},
      {component: RcSubjectsComponent, path: 'subject'},
      {component: RcClassesComponent, path: 'class'},
      {component: ClassLevelComponent, path: 'class/add'},
      {component: ClassLevelComponent, path: 'class/view/:id'},
      {component: RcStudentsComponent, path: 'student'},
      {component: AddStudentComponent, path: 'student/add'},
      {component: StudentComponent, path: 'student/view/:id'},
      {component: RcApplicationsComponent, path: 'application'},
      {component: AddApplicationComponent, path: 'application/add'},
      {component: StudentApplicationComponent, path: 'application/view/:id'},
      {component: RcClasslistsComponent, path: 'class-list'},
      {component: RcSettingsComponent, path: 'settings'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RcDashboardRoutingModule { }
