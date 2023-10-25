import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatChip, MatChipEditInput, MatChipInput, MatChipsModule } from '@angular/material/chips';
import { MatChipInputEvent } from '@angular/material/chips';
import { ToolOneComponent } from './tool-one/tool-one.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepicker } from '@angular/material/datepicker';
import { TooltwoComponent } from './tooltwo/tooltwo.component';
import { QuizGenComponent } from './quiz-gen/quiz-gen.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ToolOneComponent,
    SidebarComponent,
    TooltwoComponent,
    QuizGenComponent,
 
    SignupComponent,
      LoginComponent,
   
  ],
  imports: [
    BrowserModule,
   HttpClientModule,
 CardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
   MatFormFieldModule,
   ReactiveFormsModule,
   MatChipsModule,
   MultiSelectModule,
   InputNumberModule ,
   FormsModule,
   MatInputModule,
   MatSelectModule,
   MatAutocompleteModule,
   MatRadioModule,
   MatCheckboxModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }