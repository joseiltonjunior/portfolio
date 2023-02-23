var a=Object.defineProperty;var s=(o,n)=>a(o,"name",{value:n,configurable:!0});import{s as r}from"./styled-components.browser.esm.a7805415.js";import{a as c,j as i}from"./jsx-runtime.700ccc9b.js";const t=r.input`
  opacity: 0;
  width: 0;
  height: 0;
`,e=r.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${o=>o.theme.colors.Dark_400};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 12px;

  :before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${o=>o.theme.colors.Dark_100};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`,h=r.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 12px;

  ${t}:checked + ${e} {
    background-color: ${o=>o.theme.colors.Orange};
  }

  ${t}:focus + ${e} {
    box-shadow: 0 0 1px ${o=>o.theme.colors.Orange};
  }

  ${t}:checked + ${e}:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }
`;function p({...o}){return c(h,{children:[i(t,{...o,type:"checkbox"}),i(e,{})]})}s(p,"Swicth");p.__docgenInfo={description:"",methods:[],displayName:"Swicth"};export{p as S};
//# sourceMappingURL=index.3ceabfca.js.map
