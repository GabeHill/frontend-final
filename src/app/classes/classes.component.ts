import { Component, OnInit } from '@angular/core'
import { GetDataService } from '../get-data.service'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  private rawData: any = {}
  cleanData: any = {}

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
  }

  public getClass(query: string): void {
    if (query !== "") {
      this.getDataService.getData('classes', query.replace(' ', '-').toLowerCase()).subscribe(
        (resp: any) => {
          this.rawData = resp

          // clean up multiples into names
          let skills: string[] = []
          this.rawData.proficiency_choices[0].from.forEach((e: any) => {
            // console.log(e.name)
            skills.push(e.name.replace("Skill: ", ""))
          })

          let proficiencies: string[] = []
          this.rawData.proficiencies.forEach((e: any) => {
            proficiencies.push(e.name)
          })

          let saves: string[] = []
          this.rawData.saving_throws.forEach((e: any) => {
            saves.push(e.name)
          })

          let equipment: string[] = []
          this.rawData.starting_equipment.forEach((e: any) => {
            equipment.push((e.quantity ? `${e.quantity} ` : "") + e.equipment.name)
          })

          let equipmentOptions: string[] = []
          this.rawData.starting_equipment_options.forEach((e: any) => {
            equipmentOptions.push(this.buildEquipmentStr(e))
          })

          let subclasses: string[] = []
          this.rawData.subclasses.forEach((e: any) => {
            subclasses.push(e.name)
          })

          let spellcasting: { name: string, desc: string }[] = []
          if (this.rawData.spellcasting) {
            this.rawData.spellcasting.info.forEach((e: any) => {
              spellcasting.push({ name: e.name, desc: e.desc })
            })
          }

          this.cleanData = {
            name: this.rawData.name,
            hitDie: `d${this.rawData.hit_die}`,
            skillCount: this.rawData.proficiency_choices[0].choose,
            skills: skills.join(', '),
            proficiencies: proficiencies.join(', '),
            saves,
            equipment,
            equipmentOptions,
            subclasses,
            spellMod: `${this.rawData.spellcasting.spellcasting_ability.name}`,
            spellcasting
          }
        }
      )
    }
  }

  private buildEquipmentStr(e: any): string {
    let str: string = ""
    let count: number = e.choose

    e.from.forEach((f: any) => {
      if (f.equipment) {
        str += (`${f.quantity} ${f.equipment.name}`)
      }
      if (f[0]) {
        console.log(f)
        let s: string = ""
        let q: number = -1
        if (f[1].equipment) {
          s = f[1].equipment.name
          q = f[1].quantity
        }
        if (f[1].equipment_option) {
          s = f[1].equipment_option.from.equipment_category.name
          q = f[1].equipment_option.choose
        }
        str += (`${f[0].quantity} ${f[0].equipment.name} and ${q} ${s}`)
      }
      if (f.equipment_option) {
        str += (`${f.equipment_option.choose} ${f.equipment_option.from.equipment_category.name}`)
      }
      str += " or "
    })
    str = str.slice(0, str.length - 4)

    return `Choose ${count} from ${str}`
  }

}
