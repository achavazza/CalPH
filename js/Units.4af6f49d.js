"use strict";(self["webpackChunkcalculin"]=self["webpackChunkcalculin"]||[]).push([[891],{1190:function(l,e,s){s.r(e),s.d(e,{default:function(){return B}});var i=s(6252),n=s(3577),t=s(9963);const a={class:"item"},o={class:"columns is-vcentered is-mobile is-variable is-1-mobile"},u=(0,i._)("div",{class:"column is-2"},[(0,i._)("span",{class:"label-title"},"Unidades")],-1),d={class:"column"},r={class:"select is-fullwidth"},c=["value"],m={class:"column"},p={class:"select is-fullwidth"},_=["value"],b=(0,i._)("div",{class:"column is-narrow"},[(0,i._)("span",{class:"dummy"})],-1),v={class:"columns is-mobile is-variable is-1-mobile"},h={class:"column is-2"},f={class:"field"},w={class:"control"},g=["onUpdate:modelValue"],y=(0,i._)("small",null,null,-1),k={class:"column"},N={class:"field"},E={class:"control"},U=["onUpdate:modelValue"],z={class:"column"},F={class:"field"},V={class:"control"},D=["onUpdate:modelValue"],C={class:"column is-narrow"},M={class:"field"},H=["onClick"],Y=(0,i._)("span",{class:"icon"},[(0,i._)("span",{class:"material-icons"},"close")],-1),x=[Y],K={class:"is-fab"},I=(0,i._)("span",{class:"icon"},[(0,i._)("span",{class:"material-icons"},"add")],-1),O=[I];function Z(l,e,s,Y,I,Z){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i._)("div",a,[(0,i._)("div",o,[u,(0,i._)("div",d,[(0,i._)("div",r,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>I.unit1=l)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.options,((l,e)=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,n.zw)(l.name),9,c)))),128))],512),[[t.bM,I.unit1]])])]),(0,i._)("div",m,[(0,i._)("div",p,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[1]||(e[1]=l=>I.unit2=l)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.options,((l,e)=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,n.zw)(l.name),9,_)))),128))],512),[[t.bM,I.unit2]])])]),b])]),(0,i._)("form",{onInput:e[2]||(e[2]=(...l)=>Z.result&&Z.result(...l))},[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.fields,((l,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,n.C_)(["item",{"has-background-danger-light":l===Z.highestEl&&l!=Z.lowestEl,"has-background-primary":l!=Z.highestEl&&l===Z.lowestEl}])},[(0,i._)("div",v,[(0,i._)("div",h,[(0,i._)("div",f,[(0,i._)("div",w,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>l.n0=e,inputmode:"numeric",pattern:"[0-9]*",placeholder:"0",min:"1",step:"1"},null,8,g),[[t.nr,l.n0,void 0,{number:!0}]]),y])])]),(0,i._)("div",k,[(0,i._)("div",N,[(0,i._)("div",E,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>l.n1=e,inputmode:"numeric",pattern:"[0-9]*",placeholder:"0.00",min:"1",step:"any"},null,8,U),[[t.nr,l.n1,void 0,{number:!0}]]),(0,i._)("small",null,"1"+(0,n.zw)(I.options[I.unit2].unit)+" = "+(0,n.zw)(l.ptom)+" "+(0,n.zw)(I.options[I.unit1].unit),1)])])]),(0,i._)("div",z,[(0,i._)("div",F,[(0,i._)("div",V,[(0,i.wy)((0,i._)("input",{class:"input",type:"number","onUpdate:modelValue":e=>l.n2=e,inputmode:"numeric",pattern:"[0-9]*",placeholder:"0.00",min:"1",step:"any"},null,8,D),[[t.nr,l.n2,void 0,{number:!0}]]),(0,i._)("small",null,"1"+(0,n.zw)(I.options[I.unit1].unit)+" = "+(0,n.zw)(l.mtop)+" "+(0,n.zw)(I.options[I.unit2].unit),1)])])]),(0,i._)("div",C,[(0,i._)("div",M,[(0,i._)("button",{tabindex:"-1",class:"button is-danger",onClick:(0,t.iM)((l=>Z.removeField(e)),["prevent"])},x,8,H)])])])],2)))),128))])],32)]),(0,i._)("div",K,[(0,i._)("button",{class:"button is-rounded is-primary",onClick:e[3]||(e[3]=(0,t.iM)(((...l)=>Z.addField&&Z.addField(...l)),["prevent"]))},O)])],64)}s(7658);var j={data(){return{unit1:this.unit1,unit2:this.unit2,options:this.appOptions,fields:[{n0:1,n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0},{n0:1,n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0}]}},computed:{result(){let l=this.fields;l.forEach((l=>{let e=l.n2/(l.n1*l.n0),s=l.n1*l.n0/l.n2;isNaN(e)?(l.res="--",l.mtop="--"):e===1/0||e===-1/0?l.res="Error":(l.res=e,l.mtop=this.formatNumber(e)),isNaN(s)?(l.mbp="--",l.ptom="--"):s===1/0||s===-1/0?l.mbp="Error":(l.mbp=s,l.ptom=this.formatNumber(s))}))},highestEl(){if(0!==this.fields.length)return this.fields.reduce(((l,e)=>Number(l.res)>Number(e.res)?l:e))},lowestEl(){if(0!==this.fields.length)return this.fields.reduce(((l,e)=>Number(l.res)<Number(e.res)?l:e))}},methods:{addField(){this.fields.push({n0:1,n1:"",n2:"",res:0,mbp:0,ptom:0,mtop:0})},removeField(l){this.fields.splice(l,1),this.fields.length<=1&&this.addField()},formatNumber(l){let e=Math.abs(l);return e<1?l.toFixed(4):l.toFixed(2)}}},q=s(3744);const A=(0,q.Z)(j,[["render",Z]]);var B=A}}]);
//# sourceMappingURL=Units.4af6f49d.js.map