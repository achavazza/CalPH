"use strict";(self["webpackChunkcalculin"]=self["webpackChunkcalculin"]||[]).push([[891],{949:function(l,e,s){s.r(e),s.d(e,{default:function(){return I}});var i=s(6252),n=s(3577),t=s(9963);const o={class:"item"},a={class:"columns is-vcentered is-mobile is-variable is-1-mobile"},u=(0,i._)("div",{class:"column is-2"},[(0,i._)("span",{class:"label-title"},"Unidades")],-1),d={class:"column"},r={class:"select is-fullwidth"},c=["value"],m={class:"column"},p={class:"select is-fullwidth"},_=["value"],h=(0,i._)("div",{class:"column is-narrow"},[(0,i._)("span",{class:"dummy"})],-1),v=["change"],b={class:"columns is-mobile is-variable is-1-mobile"},f={class:"column is-2"},w={class:"field"},g={class:"control"},y=["onUpdate:modelValue"],k=(0,i._)("small",null,null,-1),E={class:"column"},U={class:"field"},z={class:"control"},N=["onUpdate:modelValue"],V={class:"column"},D={class:"field"},F={class:"control"},C=["onUpdate:modelValue"],H={class:"column is-narrow"},M={class:"field"},Y=["onClick"],x=(0,i._)("span",{class:"icon"},[(0,i._)("span",{class:"material-icons"},"close")],-1),K=[x],O={class:"is-fab"},Z=(0,i._)("span",{class:"icon"},[(0,i._)("span",{class:"material-icons"},"add")],-1),j=[Z];function q(l,e,s,x,Z,q){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i._)("div",o,[(0,i._)("div",a,[u,(0,i._)("div",d,[(0,i._)("div",r,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>Z.unit1=l)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Z.options,((l,e)=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,n.zw)(l.name),9,c)))),128))],512),[[t.bM,Z.unit1]])])]),(0,i._)("div",m,[(0,i._)("div",p,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[1]||(e[1]=l=>Z.unit2=l)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Z.options,((l,e)=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,n.zw)(l.name),9,_)))),128))],512),[[t.bM,Z.unit2]])])]),h])]),(0,i._)("form",{change:q.result},[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Z.fields,((l,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,n.C_)(["item",{"has-background-danger-light":l===q.highestEl&&l!=q.lowestEl,"has-background-primary":l!=q.highestEl&&l===q.lowestEl}])},[(0,i._)("div",b,[(0,i._)("div",f,[(0,i._)("div",w,[(0,i._)("div",g,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>l.n0=e,inputmode:"numeric",pattern:"[0-9]*",placeholder:"0",min:"1",step:"1"},null,8,y),[[t.nr,l.n0,void 0,{number:!0}]]),k])])]),(0,i._)("div",E,[(0,i._)("div",U,[(0,i._)("div",z,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>l.n1=e,inputmode:"numeric",pattern:"[0-9]*",placeholder:"0.00",min:"1",step:"any"},null,8,N),[[t.nr,l.n1,void 0,{number:!0}]]),(0,i._)("small",null,"1"+(0,n.zw)(Z.options[Z.unit2].unit)+" = "+(0,n.zw)(l.ptom)+" "+(0,n.zw)(Z.options[Z.unit1].unit),1)])])]),(0,i._)("div",V,[(0,i._)("div",D,[(0,i._)("div",F,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>l.n2=e,inputmode:"numeric",pattern:"[0-9]*",placeholder:"0.00",min:"1",step:"any"},null,8,C),[[t.nr,l.n2,void 0,{number:!0}]]),(0,i._)("small",null,"1"+(0,n.zw)(Z.options[Z.unit1].unit)+" = "+(0,n.zw)(l.mtop)+" "+(0,n.zw)(Z.options[Z.unit2].unit),1)])])]),(0,i._)("div",H,[(0,i._)("div",M,[(0,i._)("button",{tabindex:"-1",class:"button is-danger",onClick:(0,t.iM)((l=>q.removeField(e)),["prevent"])},K,8,Y)])])])],2)))),128))])],8,v)]),(0,i._)("div",O,[(0,i._)("button",{class:"button is-rounded is-primary",onClick:e[2]||(e[2]=(0,t.iM)((l=>q.addField()),["prevent"]))},j)])],64)}s(7658);var A={data(){return{unit1:this.unit1,unit2:this.unit2,options:this.appOptions,fields:[{n0:1,n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0},{n0:1,n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0}]}},computed:{result(){let l=this.fields;l.forEach((l=>{let e=l.n2/(l.n1*l.n0),s=l.n1*l.n0/l.n2;isNaN(e)?(l.res="--",l.mtop="--"):e===1/0||e===-1/0?l.res="Error":(l.res=e,l.mtop=e.toFixed(2)),isNaN(s)?(l.mbp="--",l.ptom="--"):s===1/0||s===-1/0?l.mbp="Error":(l.mbp=s,l.ptom=s.toFixed(2))}));this.fields},log(){return this.fields},highestEl(){if(0==this.fields.length)return;let l=!1;return l=this.fields.reduce(((l,e)=>Number(l.res)>Number(e.res)?l:e)),l},lowestEl(){if(0==this.fields.length)return;let l=!1;return l=this.fields.reduce(((l,e)=>Number(l.res)<Number(e.res)?l:e)),l}},methods:{addField(){this.fields.push({n0:1,n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0})},removeField(l){this.fields.splice(l,1),this.fields.length<=1&&this.addField()}}},B=s(3744);const G=(0,B.Z)(A,[["render",q]]);var I=G}}]);
//# sourceMappingURL=Units.b873f48e.js.map