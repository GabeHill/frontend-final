import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  private rawData: any = {}
  cleanData: any = {}

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
  }

  public getSpell(query: string): void {
    if (query !== "") {
      this.getDataService.getData('spells', query.replace(' ', '-').toLowerCase()).subscribe(
        (resp: any) => {
          this.rawData = resp

          // turn multiples into cleaned arrays
          // values every spell has
          let desc: string[] = []
          this.rawData.desc.forEach((e: any) => {
            desc.push(e)
          })

          let components: string[] = []
          this.rawData.components.forEach((e: any) => {
            components.push(e)
          })

          let classes: string[] = []
          this.rawData.classes.forEach((e: any) => {
            classes.push(e.name)
          })

          let subclasses: string[] = []
          this.rawData.subclasses.forEach((e: any) => {
            subclasses.push(e.name)
          })

          this.cleanData = {
            name: this.rawData.name,
            desc: desc.join(' '),
            range: this.rawData.range,
            components: components.join(', '),
            ritual: this.rawData.ritual,
            duration: this.rawData.duration,
            concentration: this.rawData.concentration,
            castTime: this.rawData.casting_time,
            level: (this.rawData.level === 0 ? "Cantrip" : this.rawData.level),
            school: this.rawData.school.name,
            classes: classes.join(', '),
            subclasses: subclasses.join(', ')
          }

          // optional values
          if (this.rawData.higher_level) {
            let higherLevel: string[] = []
            this.rawData.higher_level.forEach((e: any) => {
              higherLevel.push(e)
            })
            this.cleanData.higherLevel = higherLevel
          }

          if (this.rawData.material) this.cleanData.material = this.rawData.material

          if (this.rawData.damage) {
            let lvl: number = this.rawData.level
            let damageLevel: string[] = []
            if (lvl > 0) {
              // this.rawData.damage.damage_at_slot_level.forEach((e: any) => {
              //   damageLevel.push(`Spell level ${lvl}: ${e[lvl++]}`)
              // })

              for (let i = lvl; i < 9; i++) {
                let e: string = this.rawData.damage.damage_at_slot_level[i]
                damageLevel.push(`Spell level ${i}: ${e}`)
              }
            } else {
              damageLevel.push(`Character level 1: ${this.rawData.damage.damage_at_character_level[1]}`)
              damageLevel.push(`Character level 5: ${this.rawData.damage.damage_at_character_level[5]}`)
              damageLevel.push(`Character level 11: ${this.rawData.damage.damage_at_character_level[11]}`)
              damageLevel.push(`Character level 17: ${this.rawData.damage.damage_at_character_level[17]}`)
            }
            this.cleanData.damage = this.rawData.damage.damage_type.name
            this.cleanData.damageLevel = damageLevel
          }

          if (this.rawData.dc) {
            this.cleanData.dcType = this.rawData.dc.dc_type.name
            this.cleanData.dcSuccess = this.rawData.dc.dc_success
          }

          if (this.rawData.area_of_effect) {
            this.cleanData.area = `${this.rawData.area_of_effect.type} foot ${this.rawData.area_of_effect.size}`
          }
        }
      )
    }
  }

}
