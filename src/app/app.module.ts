import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [FormsModule, DatePipe,BrowserModule,SharedModule],
    declarations:[AppComponent,HeaderComponent, UserComponent, TasksComponent,TaskComponent,AddTaskComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}