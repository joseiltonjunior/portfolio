import { SkillEnumType, SkillsProps } from '~/types/skills'
import { Container } from './style'
import { Techs } from './Techs'
import { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { firestore } from '~/services/firebase'
import { useToast } from '~/hooks/useToast'

export function Skills() {
  const [skills, setSkills] = useState<SkillsProps[]>()
  const { showToast } = useToast()
  const handleProjectsPortfolio = useCallback(() => {
    const q = query(collection(firestore, 'skills'))
    getDocs(q)
      .then((querySnapshot) => {
        const skillsResponse = querySnapshot.docs.map(
          (doc) =>
            ({
              imgUrl: doc.data().imgUrl,
              name: doc.data().name,
              type: doc.data().type,
            } as SkillsProps),
        )

        setSkills(skillsResponse)
      })
      .catch(() => {
        showToast('Error while fetching hard-skills', {
          type: 'error',
          theme: 'colored',
        })
      })
  }, [showToast])

  function filterTech(type: 'front' | 'back' | 'settings') {
    if (!skills) return

    switch (type) {
      case 'front':
        return skills.filter((item) => item.type === SkillEnumType['Front-end'])

      case 'back':
        return skills.filter((item) => item.type === SkillEnumType['Back-end'])

      case 'settings':
        return skills.filter((item) => item.type === SkillEnumType.Settings)

      default:
    }
  }

  useEffect(() => {
    handleProjectsPortfolio()
  }, [handleProjectsPortfolio])

  return (
    <Container>
      <Techs skills={filterTech('front')} title={'Front-end'} />

      <Techs skills={filterTech('back')} title={'Back-end'} />

      <Techs skills={filterTech('settings')} title={'General'} />
    </Container>
  )
}
