var c=Object.defineProperty;var e=(r,a)=>c(r,"name",{value:a,configurable:!0});import{s as t,C as o}from"./styled-components.browser.esm.4d57caa4.js";import{j as n}from"./jsx-runtime.161e2533.js";import"./iframe.583613f3.js";const i=t.button`
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

  ${r=>r.variant==="secondary"&&o`
      border: 1px solid var(--gray-100);
      color: var(--gray-100);

      :focus {
        box-shadow: none;
      }
    `}

  ${r=>r.disabled?o`
          opacity: 0.5;
          cursor: not-allowed;
        `:o`
          :hover {
            color: var(--gray-100);
            background-color: var(--orange-600);
          }

          ${r.variant==="secondary"&&o`
            :hover {
              color: var(--gray-600);
              background-color: var(--gray-100);
            }
          `}
        `}
`,s=t.div`
  max-width: 18.75rem;
`;i.displayName="Button";s.displayName="Box";function d({children:r,variant:a="primary",...l}){return n(i,{...l,variant:a,type:"button",children:r})}e(d,"Button");d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""}}};const v={title:"Components/Button",component:d,decorators:[r=>n(s,{children:r()})],args:{children:"Button",variant:"primary",disabled:!1},argTypes:{disabled:{control:{type:"boolean"}},variant:{options:["primary","secondary"],control:{type:"inline-radio"}}}},g={},b=["Default"];export{g as Default,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories.3463f450.js.map
