var c=Object.defineProperty;var t=(r,o)=>c(r,"name",{value:o,configurable:!0});import{s as a,C as e}from"./styled-components.browser.esm.a7805415.js";import{j as n}from"./jsx-runtime.700ccc9b.js";import"./iframe.ca4c553d.js";const s=a.button`
  background-color: transparent;
  border: 1px solid ${r=>r.theme.colors.Orange};
  font-weight: 600;
  padding: 0.6rem;
  height: 40px;
  border-radius: 6px;
  color: ${r=>r.theme.colors.Orange};
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  ${r=>r.variant==="secondary"&&e`
      border: 1px solid ${o=>o.theme.colors.Dark_100};
      color: ${o=>o.theme.colors.Dark_100};

      :focus {
        box-shadow: none;
      }
    `}

  ${r=>r.disabled?e`
          opacity: 0.5;
          cursor: not-allowed;
        `:e`
          :hover {
            color: ${o=>o.theme.colors.Dark_100};
            background-color: ${o=>o.theme.colors.Orange};
          }

          ${r.variant==="secondary"&&e`
            :hover {
              color: ${o=>o.theme.colors.Dark_600};
              background-color: ${o=>o.theme.colors.Dark_100};
            }
          `}
        `}
`,i=a.div`
  max-width: 18.75rem;
`;s.displayName="Button";i.displayName="Box";function l({children:r,variant:o="primary",...d}){return n(s,{...d,variant:o,type:"button",children:r})}t(l,"Button");l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""}}};const h={title:"Components/Button",component:l,decorators:[r=>n(i,{children:r()})],args:{children:"Button",variant:"primary",disabled:!1},argTypes:{disabled:{control:{type:"boolean"}},variant:{options:["primary","secondary"],control:{type:"inline-radio"}}}},b={},f=["Default"];export{b as Default,f as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories.ffa44c47.js.map
