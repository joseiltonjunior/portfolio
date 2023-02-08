var p=Object.defineProperty;var a=(r,o)=>p(r,"name",{value:o,configurable:!0});import{s as t,C as e}from"./styled-components.browser.esm.fdb55c40.js";import{j as n}from"./jsx-runtime.62986c80.js";import"./iframe.f114312f.js";const i=t.button`
  background-color: transparent;
  border: 1px solid var(--orange-600);
  font-weight: 600;
  padding: 0.6rem;
  height: 40px;
  border-radius: 6px;
  color: var(--orange-600);
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  :hover:not():disabled {
    color: var(--gray-100);
    background-color: var(--orange-600);
  }

  ${r=>r.variant==="secondary"&&e`
      border: 1px solid var(--gray-100);
      color: var(--gray-100);

      :focus {
        box-shadow: none;
      }

      :hover {
        color: var(--gray-600);
        background-color: var(--gray-100);
      }
    `}

  ${r=>r.disabled&&e`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`,s=t.div`
  max-width: 18.75rem;
`;i.displayName="Button";s.displayName="Box";function d({children:r,variant:o="primary",...l}){return n(i,{...l,variant:o,type:"button",children:r})}a(d,"Button");d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""}}};const v={title:"Components/Button",component:d,decorators:[r=>n(s,{children:r()})],args:{children:"Button",variant:"primary",disabled:!1},argTypes:{disabled:{control:{type:"boolean"}},variant:{options:["primary","secondary"],control:{type:"inline-radio"}}}},g={},b=["Default"];export{g as Default,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories.befd9243.js.map
