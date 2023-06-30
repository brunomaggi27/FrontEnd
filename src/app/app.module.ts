import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoargentinaComponent } from './componentes/logoargentina/logoargentina.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectosComponent } from './componentes/projectos/projectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule} from '@angular/forms'
import { InterceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NeweducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditeducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditAboutmeComponent } from './componentes/aboutme/edit-aboutme.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoargentinaComponent,
    BannerComponent,
    AboutmeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProjectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAboutmeComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
