var n=Object.defineProperty;var i=(o,a)=>n(o,"name",{value:a,configurable:!0});import{s as e}from"./styled-components.browser.esm.8bd8bcf5.js";import{a as c,j as s}from"./jsx-runtime.5766d0e8.js";const t=e.input`
  opacity: 0;
  width: 0;
  height: 0;
`,r=e.span`
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
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${o=>o.theme.colors.Dark_100};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`,h=e.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 12px;

  ${t}:checked + ${r} {
    background-color: ${o=>o.theme.colors.Primary};
  }

  ${t}:focus + ${r} {
    box-shadow: 0 0 1px ${o=>o.theme.colors.Primary};
  }

  ${t}:checked + ${r}:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }
`;function p({...o}){return c(h,{children:[s(t,{...o,type:"checkbox"}),s(r,{})]})}i(p,"Swicth");p.__docgenInfo={description:"",methods:[],displayName:"Swicth"};export{p as S};
//# sourceMappingURL=index.13389952.js.map
