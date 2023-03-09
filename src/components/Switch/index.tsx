import { SwitchProps } from '~/types/switch'
import { Checkbox, Slider, Switch } from './style'

export function Swicth({ ...rest }: SwitchProps) {
  return (
    <Switch>
      <Checkbox {...rest} type="checkbox" />
      <Slider />
    </Switch>
  )
}
