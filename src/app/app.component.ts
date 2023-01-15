import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client';  
import { ConnectCredentialsService } from './services/connect-credentials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prototype-powerBi';
  public screenHeight!: number;
  public credentialsBi: any;
  public status:boolean = true;
  constructor(private _manageApiService: ConnectCredentialsService) {}

  async ngOnInit() {  
    this.screenHeight = (window.screen.height); 
    this._manageApiService.getCredentials().subscribe(async (resp)=>{
     this.credentialsBi= resp;
     this.status = false
    });
    
}  

  showReport(token, infoReport) {  
    // Embed URL    
    console.log(infoReport);
    
    let embedUrl = infoReport.embed_url;  
    let embedReportId = infoReport.resport_id;  
    let config = {  
        type: 'report', 
        tokenType: pbi.models.TokenType.Embed, 
        accessToken: token,  
        embedUrl: embedUrl,  
        id: embedReportId,
        permissions: pbi.models.Permissions.All,  
        settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: true
          }  
    };  
    var embedContainer = document.getElementById('reportContainer');
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);  
    let report = powerbi.embed(embedContainer, config);  
    report.off("loaded");  
    report.on("loaded", () => {  
        console.log("Loaded");  
    });  
    report.on("error", () => {  
        console.log('ERROR WEY');
          
    });  
}
}
