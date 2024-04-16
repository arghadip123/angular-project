import { Component } from '@angular/core';
import { AppSidebarModule } from './path/to/app-sidebar.module';
import {
faHome,
faChartBar,
faComment,
faBookmark,
faUser,
} from '@fortawesome/free-solid-svg-icons';
@NgModule({
  imports: [
    // other imports
    AppSidebarModule
  ],
  // other configurations
})
export class YourModule { }
@Component({
selector: 'app-sidebar',
templateUrl: './sidebar.component.html',
styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
home = faHome;
chart = faChartBar;
message = faComment;
bookmark = faBookmark;
user = faUser;
}
