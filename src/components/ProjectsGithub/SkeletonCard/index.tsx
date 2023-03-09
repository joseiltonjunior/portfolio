import Skeleton from 'react-loading-skeleton'
import {
  Card,
  Description,
  Info,
  RowContent,
  StarContent,
  Title,
} from '../style'

export function SkeletonCard() {
  return (
    <Card disabled>
      <Title>
        <Skeleton width={100} />
      </Title>
      <Description>
        <Skeleton width={200} />
      </Description>
      <RowContent>
        <Info>
          <Skeleton width={60} />
        </Info>
        <StarContent>
          <Skeleton width={30} />
          <Info>
            <Skeleton width={50} />
          </Info>
        </StarContent>
      </RowContent>
    </Card>
  )
}
