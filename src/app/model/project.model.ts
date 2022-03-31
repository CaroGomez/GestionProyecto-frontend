import {CommentModel} from "./comment.model";
import {KpiModel} from "./kpi.model";
import {UserModel} from "./user.model";

export interface ProjectModel {
   id: number;
   name: string;
   document: string;
   comments: CommentModel[];
   kpis: KpiModel[];
   students: UserModel[];
   teachers: UserModel[];
}
