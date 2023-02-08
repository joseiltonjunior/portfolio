var n=Object.defineProperty;var e=(r,a)=>n(r,"name",{value:a,configurable:!0});import{s as i}from"./styled-components.browser.esm.fdb55c40.js";import{a as c,j as s}from"./jsx-runtime.62986c80.js";const t=i.input`
  opacity: 0;
  width: 0;
  height: 0;
`,o=i.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-400);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 12px;

  :before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: var(--gray-100);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`,p=i.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 12px;

  ${t}:checked + ${o} {
    background-color: var(--orange-600);
  }

  ${t}:focus + ${o} {
    box-shadow: 0 0 1px var(--orange-600);
  }

  ${t}:checked + ${o}:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }
`;function d({...r}){return c(p,{children:[s(t,{...r,type:"checkbox"}),s(o,{})]})}e(d,"Swicth");d.__docgenInfo={description:"",methods:[],displayName:"Swicth"};export{d as S};
//# sourceMappingURL=index.06209cdf.js.map
