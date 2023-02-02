import { SwitchProps } from "~/types/switch";
import { Checkbox, Slider, Switch } from "./style";

export function Swicth({ value, action }: SwitchProps) {
  return (
    <Switch>
      <Checkbox type="checkbox" onChange={action} checked={value} />
      <Slider />
    </Switch>
  );
}
