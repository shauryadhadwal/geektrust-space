import { AppDataService } from './shared/store/app-data.service';
import { Http } from '@angular/http';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FindingFalconeModule } from './finding-falcone/finding-falcone.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        SharedModule,
        FindingFalconeModule,
        AppRoutesModule
    ],
    providers: [AppDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
