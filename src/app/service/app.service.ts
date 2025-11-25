import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HomeModel } from '../home/home.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly http: HttpClient = inject(HttpClient);
  public apiUrl: string = 'http://139.162.60.251';

  public isLoading:Subject<boolean> = new BehaviorSubject<boolean>(true);
  homeData:Subject<HomeModel| null> = new BehaviorSubject<HomeModel | null>(null);
  
  get isLoading$(){
    return this.isLoading.asObservable();
  }

  get homeData$(){
    return this.homeData.asObservable();
  }

  public getHomeData(): Observable<HomeModel> {
    return this.http.get<HomeModel>('http://139.162.60.251/api/nestor-homes/mbu64jngdftb2823bvar4b0j?populate[0]=ThemeColor&populate[1]=Section2Image&populate[2]=Section3Feature&populate[3]=Section3Feature.Icon&populate[4]=Section6Work&populate[5]=Section6Work.Image&populate[6]=Section8Client&populate[7]=Section8Client.Avatar&populate[8]=Section9Image1&populate[9]=Section10Image1&populate[10]=Section11Insight&populate[11]=Section11Insight.Avatar&populate[12]=Section7Image1&populate[13]=Section5Service&populate[14]=Section5Video');
  }


}