"use strict";(self["webpackChunkcalculin"]=self["webpackChunkcalculin"]||[]).push([[268],{3095:function(s,e,l){l.r(e),l.d(e,{default:function(){return K}});var i=l(6252),n=l(3577),t=l(9963);const o={class:"item"},a={class:"columns is-vcentered is-mobile is-variable is-1-mobile"},u={class:"column"},r={class:"select is-fullwidth"},d=["value"],c={class:"column"},p={class:"select is-fullwidth"},m=["value"],h=(0,i._)("div",{class:"column is-narrow"},[(0,i._)("span",{class:"dummy"})],-1),v={class:"columns is-mobile is-variable is-1-mobile"},_={class:"column"},b={class:"field"},w={class:"control"},f=["onUpdate:modelValue"],g={class:"column"},y={class:"field"},k={class:"control"},E=["onUpdate:modelValue"],z={class:"column is-narrow"},N={class:"field"},D=["onClick"],F=(0,i._)("span",{class:"icon"},[(0,i._)("span",{class:"material-icons"},"close")],-1),C=[F],M={class:"is-fab"},U=(0,i._)("span",{class:"icon"},[(0,i._)("span",{class:"material-icons"},"add")],-1),V=[U];function x(s,e,l,F,U,x){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i._)("div",a,[(0,i._)("div",u,[(0,i._)("div",r,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>U.unit1=s)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(U.options,((s,e)=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,n.zw)(s.name),9,d)))),128))],512),[[t.bM,U.unit1]])])]),(0,i._)("div",c,[(0,i._)("div",p,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>U.unit2=s)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(U.options,((s,e)=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,n.zw)(s.name),9,m)))),128))],512),[[t.bM,U.unit2]])])]),h])]),(0,i._)("form",{onInput:e[4]||(e[4]=(...s)=>x.result&&x.result(...s))},[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(U.fields,((s,l)=>((0,i.wg)(),(0,i.iD)("li",{key:l,class:(0,n.C_)(["item",{"has-background-danger-light":s===x.highestEl&&s!=x.lowestEl,"has-background-primary":s!=x.highestEl&&s===x.lowestEl}])},[(0,i._)("div",v,[(0,i._)("div",_,[(0,i._)("div",b,[(0,i._)("div",w,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>s.n1=e,onInput:e[2]||(e[2]=(...s)=>x.result&&x.result(...s)),inputmode:"numeric",pattern:"[0-9]*",placeholder:"0.00",min:"1",step:"any"},null,40,f),[[t.nr,s.n1,void 0,{number:!0}]]),(0,i._)("small",null,"1"+(0,n.zw)(U.options[U.unit2].unit)+" = "+(0,n.zw)(s.ptom)+" "+(0,n.zw)(U.options[U.unit1].unit),1)])])]),(0,i._)("div",g,[(0,i._)("div",y,[(0,i._)("div",k,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>s.n2=e,onInput:e[3]||(e[3]=(...s)=>x.result&&x.result(...s)),inputmode:"numeric",pattern:"[0-9]*",placeholder:"0.00",min:"1",step:"any"},null,40,E),[[t.nr,s.n2,void 0,{number:!0}]]),(0,i._)("small",null,"1"+(0,n.zw)(U.options[U.unit1].unit)+" = "+(0,n.zw)(s.mtop)+" "+(0,n.zw)(U.options[U.unit2].unit),1)])])]),(0,i._)("div",z,[(0,i._)("div",N,[(0,i._)("button",{tabindex:"-1",class:"button is-danger",onClick:(0,t.iM)((s=>x.removeField(l)),["prevent"])},C,8,D)])])])],2)))),128))])],32),(0,i._)("div",M,[(0,i._)("button",{class:"button is-rounded is-primary",onClick:e[5]||(e[5]=(0,t.iM)((s=>x.addField()),["prevent"]))},V)])],64)}l(7658);var H={data(){return{unit1:0,unit2:0,options:this.appOptions,fields:[{n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0},{n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0}]}},computed:{result(){let s=this.fields;s.forEach((s=>{let e=s.n2/s.n1,l=s.n1/s.n2;isNaN(e)?(s.res="--",s.mtop="--"):e===1/0||e===-1/0?s.res="Error":(s.res=e,s.mtop=e.toFixed(Math.max(2,e.toString().split(".")[1]?.length||0))),isNaN(l)?(s.mbp="--",s.ptom="--"):l===1/0||l===-1/0?s.mbp="Error":(s.mbp=l,s.ptom=l.toFixed(Math.max(2,l.toString().split(".")[1]?.length||0)))}))},highestEl(){if(0!==this.fields.length)return this.fields.reduce(((s,e)=>Number(s.res)>Number(e.res)?s:e))},lowestEl(){if(0!==this.fields.length)return this.fields.reduce(((s,e)=>Number(s.res)<Number(e.res)?s:e))}},methods:{addField(){this.fields.push({n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0})},removeField(s){this.fields.splice(s,1),this.fields.length<=1&&this.addField()}}},Y=l(3744);const I=(0,Y.Z)(H,[["render",x]]);var K=I}}]);
//# sourceMappingURL=Home.1dbaeab4.js.map