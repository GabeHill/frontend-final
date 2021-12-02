import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  private rawData: any = {}
  private cleanData: any = {}

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
  }

  getRace(query: string): void {
    if (query !== "") {
      query.replace(' ', '-')
      this.getDataService.getData('races', query).subscribe(
        (resp: any) => {
          this.rawData = resp

          // clean up multiples into names
          let bonuses: { name: string, bonus: number }[] = []
          this.rawData.ability_bonuses.forEach((e: any) => {
            bonuses.push({ name: e.ability_score.name, bonus: e.bonus })
          })

          let proficiencies: string[] = []
          this.rawData.starting_proficiencies.forEach((e: any) => {
            proficiencies.push(e.name)
          })

          let languages: string[] = []
          this.rawData.languages.forEach((e: any) => {
            languages.push(e.name)
          })

          let traits: string[] = []
          this.rawData.traits.forEach((e: any) => {
            traits.push(e.name)
          })

          let subraces: string[] = []
          this.rawData.subraces.forEach((e: any) => {
            subraces.push(e.name)
          })

          this.cleanData = {
            name: this.rawData.name,
            speed: this.rawData.speed,
            bonuses,
            algnment: this.rawData.alignment,
            age: this.rawData.age,
            size: this.rawData.size,
            proficiencies,
            languages,
            traits,
            subraces
          }
        }
      )
    }
  }
}
