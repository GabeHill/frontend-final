import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private url: string = "https://www.dnd5eapi.co/api"

  constructor(private http: HttpClient) { }

  public getData(endpoint: string, query: string) {
    return this.http.get(`${this.url}/${endpoint}/${query}`)
  }
}
