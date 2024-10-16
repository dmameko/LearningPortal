import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IUser } from "../models/user.interface";
import { userMock } from "../mocks/user.mock";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
  ],
})
export class HeaderComponent {
  public user: IUser = userMock;
}
