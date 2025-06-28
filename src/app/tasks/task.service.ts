import { Injectable } from "@angular/core";
import { dummyTasks } from "./task.constant";
import { type NewTaskData } from "./task/task.model";
import { v4 } from 'uuid';

@Injectable({
    providedIn:"root"
})
export class TaskService{
private availableTask=dummyTasks;

getTask(userId:string){
    return this.availableTask.filter((task) => task.userId === userId)
}
deleteTask(taskId:string){
    this.availableTask = this.availableTask.filter((task) => task.id !== taskId);
}
addTask(taskData: NewTaskData, userId:string){
    this.availableTask.unshift({
      userId: userId,
      id: v4(),
      dueDate: taskData.date,
      summary: taskData.summary,
      title: taskData.title,
    });
}
}