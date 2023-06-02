export enum SkillEnumType {
  'Front-end' = 1,
  'Back-end' = 2,
  'Settings' = 3
}

export interface SkillsProps {
  name: string
  type: SkillEnumType
  imgUrl?: string
}

export interface SKillsDataProps {
  skills: SkillsProps[]
}
