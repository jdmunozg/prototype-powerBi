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
  @ViewChild('reportContainer', {static: true}) reportContainer: ElementRef; 
    private credentialsBi: any;
  constructor(private _manageApiService: ConnectCredentialsService) {}

  async ngOnInit() {  
    this.screenHeight = (window.screen.height); 
    this._manageApiService.getCredentials().subscribe(async (resp)=>{
     this.credentialsBi= resp;
    });
    setTimeout(()=>{
        this.showReport('H4sIAAAAAAAEAB3Ux4rEVhQE0H-ZrQyKrWDwQjnnrJ1auVs56xn_u8feF1zqwK2_f5z86ae8_Pnzx9MFTSQLdmdwDIzS14FShfEmLfWFIl-vrT0XDB1fLHOHPY16MFEBud8Igf1SoaSvR6ye4iVax-bXo9fLyIPkskWtr97aT6OobmGZ08eYKKw-OW7HRUadHr4r5_t6V0_pU5JnrlZ0LNtIJE4JmJueJ8_UK7sKVp4572Ffm40_mzZ6feLc6l6S1X_aoHgIQoSHQlAiNFMASjokU470yQsClJcd_HViD5TGh3RuV0SSxWgXNfFlfpkdnIxhskPHQKWe8qCgEPGI_pszIOXKOTQc-DKeJ9jLNRpC4hozJ2DXNl8-0jGxG92cOWu3chrooBfEsUJHDIKPYrdjVMFu6T6AT4Y8ShBZILBXSrOVpz7dilvOxu0OylDgNvOhPfcASZs-QZi4Z9E4i8pnZS4gZvx5XDw8kMdLY1yLq-42O2ERhcx-iVtuQMiJWw-pmiWtctYIyVLD9lHURhg-DE9eDQbBlDOQgWE1Wt4zAz4hI7ETodgL_Wpg1q0ki5I3WUJ7SnSY5oL8JsTJjUR1jsVgvZT60HOcskgecT3gzXxC76f1VeyZ6jP1dOf6M-Hdl1BKMazXDIUZZp3qb8YsZWoJUdpolUJnTTwc4n1d7Wu6F5qo5-_RAsqNFHojXdIkkbqFjRXj3mhucNBkiNNj7p7EdUEAOBdDPsp0Kc1LwCqZVBV2C4-6WmUdnOnp0Yju7CTldzzPfaQQMRzmvaZd1d-0OJscqgxsOWqi9h2r2UsQWKO9blk_uoO7vimgbONIl47lkAo7jzLPtqKzUQ_p3sQxX7hk8kA568A_Q1OzS0cKsF8xp-yRCO9AXwt6zaURCynf4-o4GaA_f_zw6zPvk149v-_UasYZChXU806aHW5zFqKO6KAAkV-jUX719DRxn-EULT393ASDO_rv8Qo39heeaJs50FI1OWt1606SuA6ikmgvMajlU3a2ZJr7Snw2EkD1gdxfnPrti57KVFGmvfSguZ4otdz6tDWga_f-0mIAYXY3AGJ0_OYZ_YI61jFWO0ntrAUhiOCc2ySHQpE_hW_b2KR6m3YAvvRKn1u2xpsygXyT9bAuVmcjs2tJIU7N8C53qFjGvKm3V23gNa9lVFZPb5TeYsEPFpymrn2cbmm2jmVo8A46gKFaFU80hbp4fppQEoqHfQOLb2YGwzyyhZHXbWi3EnzgA_ChyrDR1rlss6VM96-__mN-5rZa1ehXWRSY9y1PWbgx6VQEBOY9GM7-n_K7Zsz3Y61-Y9_sBcx98AKnn7iZXUiIz9wd21i_lyE-YpawPXLYJ5yOsV_F-TGtW1246F3b5XFJJa2hjhNuCwTVdJeCvtDkzMwCRDwn1tbRONXfVQX8HTB9ZZLUiJu94WGUZXhHxsB9l0-TrnQZrvZydSt4hBeyb4I86vPr3kdlqBmVPpiyauAG6M-H9C43Dwhc6F3P7gtaGjfXnIJ5kn4rzpZKubM_RPagy0vyYiPcfEQSiyfp5XUhHgcF6ezNp0T52KkQYC0qqMLfXYKutjHYW2_qNyLVdEIv-4OMcdd57NL477Eh1xoafQAZUHaH3wawmcpNmpys3QdB8XHmfSO7If55GiwxDc78j_mffwEiyBaMQgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1HLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE2NzM3MjA1MzYsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==');  
    }, 2000)
    
}  

  showReport(accessToken) {  
    // Embed URL    
    console.log(this.credentialsBi);
    
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=de3d27cc-2849-4459-aec4-fe4cbe47b451&groupId=c121c4f2-ab5c-4135-962b-2f601bb7df52';  
    let embedReportId = 'de3d27cc-2849-4459-aec4-fe4cbe47b451';  
    let config = {  
        type: 'report', 
        tokenType: pbi.models.TokenType.Embed, 
        accessToken: 'H4sIAAAAAAAEAB3Ux4rEVhQE0H-ZrQyKrWDwQjnnrJ1auVs56xn_u8feF1zqwK2_f5z86ae8_Pnzx9MFTSQLdmdwDIzS14FShfEmLfWFIl-vrT0XDB1fLHOHPY16MFEBud8Igf1SoaSvR6ye4iVax-bXo9fLyIPkskWtr97aT6OobmGZ08eYKKw-OW7HRUadHr4r5_t6V0_pU5JnrlZ0LNtIJE4JmJueJ8_UK7sKVp4572Ffm40_mzZ6feLc6l6S1X_aoHgIQoSHQlAiNFMASjokU470yQsClJcd_HViD5TGh3RuV0SSxWgXNfFlfpkdnIxhskPHQKWe8qCgEPGI_pszIOXKOTQc-DKeJ9jLNRpC4hozJ2DXNl8-0jGxG92cOWu3chrooBfEsUJHDIKPYrdjVMFu6T6AT4Y8ShBZILBXSrOVpz7dilvOxu0OylDgNvOhPfcASZs-QZi4Z9E4i8pnZS4gZvx5XDw8kMdLY1yLq-42O2ERhcx-iVtuQMiJWw-pmiWtctYIyVLD9lHURhg-DE9eDQbBlDOQgWE1Wt4zAz4hI7ETodgL_Wpg1q0ki5I3WUJ7SnSY5oL8JsTJjUR1jsVgvZT60HOcskgecT3gzXxC76f1VeyZ6jP1dOf6M-Hdl1BKMazXDIUZZp3qb8YsZWoJUdpolUJnTTwc4n1d7Wu6F5qo5-_RAsqNFHojXdIkkbqFjRXj3mhucNBkiNNj7p7EdUEAOBdDPsp0Kc1LwCqZVBV2C4-6WmUdnOnp0Yju7CTldzzPfaQQMRzmvaZd1d-0OJscqgxsOWqi9h2r2UsQWKO9blk_uoO7vimgbONIl47lkAo7jzLPtqKzUQ_p3sQxX7hk8kA568A_Q1OzS0cKsF8xp-yRCO9AXwt6zaURCynf4-o4GaA_f_zw6zPvk149v-_UasYZChXU806aHW5zFqKO6KAAkV-jUX719DRxn-EULT393ASDO_rv8Qo39heeaJs50FI1OWt1606SuA6ikmgvMajlU3a2ZJr7Snw2EkD1gdxfnPrti57KVFGmvfSguZ4otdz6tDWga_f-0mIAYXY3AGJ0_OYZ_YI61jFWO0ntrAUhiOCc2ySHQpE_hW_b2KR6m3YAvvRKn1u2xpsygXyT9bAuVmcjs2tJIU7N8C53qFjGvKm3V23gNa9lVFZPb5TeYsEPFpymrn2cbmm2jmVo8A46gKFaFU80hbp4fppQEoqHfQOLb2YGwzyyhZHXbWi3EnzgA_ChyrDR1rlss6VM96-__mN-5rZa1ehXWRSY9y1PWbgx6VQEBOY9GM7-n_K7Zsz3Y61-Y9_sBcx98AKnn7iZXUiIz9wd21i_lyE-YpawPXLYJ5yOsV_F-TGtW1246F3b5XFJJa2hjhNuCwTVdJeCvtDkzMwCRDwn1tbRONXfVQX8HTB9ZZLUiJu94WGUZXhHxsB9l0-TrnQZrvZydSt4hBeyb4I86vPr3kdlqBmVPpiyauAG6M-H9C43Dwhc6F3P7gtaGjfXnIJ5kn4rzpZKubM_RPagy0vyYiPcfEQSiyfp5XUhHgcF6ezNp0T52KkQYC0qqMLfXYKutjHYW2_qNyLVdEIv-4OMcdd57NL477Eh1xoafQAZUHaH3wawmcpNmpys3QdB8XHmfSO7If55GiwxDc78j_mffwEiyBaMQgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1HLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE2NzM3MjA1MzYsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==',  
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
