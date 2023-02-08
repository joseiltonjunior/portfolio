var a=Object.defineProperty;var o=(t,e)=>a(t,"name",{value:e,configurable:!0});import{S as n}from"./index.06209cdf.js";import{r,j as s}from"./jsx-runtime.62986c80.js";import"./styled-components.browser.esm.fdb55c40.js";import"./iframe.f114312f.js";const p={parameters:{storySource:{source:`import { Swicth } from "./index";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Swicth",
  component: Swicth,
} as Meta;

export const Default: Story = () => {
  const [value, setValue] = useState<boolean>(false);

  return <Swicth checked={value} onChange={() => setValue(!value)} />;
};
`,locationsMap:{default:{startLoc:{col:30,line:10},endLoc:{col:1,line:14},startBody:{col:30,line:10},endBody:{col:1,line:14}}}}},title:"Components/Swicth",component:n},S=o(()=>{const[t,e]=r.exports.useState(!1);return s(n,{checked:t,onChange:()=>e(!t)})},"Default"),f=["Default"];export{S as Default,f as __namedExportsOrder,p as default};
//# sourceMappingURL=Switch.stories.72e594d1.js.map
