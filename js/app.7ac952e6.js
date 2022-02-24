(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tutorial-vue-edd/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"4a6c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("formulario-persona",{on:{"add-persona":e.agregarPersona}}),a("tabla-personas",{attrs:{personas:e.personas},on:{"delete-persona":e.eliminarPersona,"actualizar-persona":e.actualizarPersona}})],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[e._v("Personas")])])])}],s=a("5530"),i=a("2909"),l=(a("99af"),a("4de4"),a("d3b7"),a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tabla-personas"}},[e.personas.length?e._e():a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[e._v(" No se han agregado personas ")]),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.personas,(function(t){return a("tr",{key:t.id},[e.editando===t.id?a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"persona.nombre"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nombre},on:{input:function(a){a.target.composing||e.$set(t,"nombre",a.target.value)}}})]):a("td",[e._v(" "+e._s(t.nombre)+" ")]),e.editando===t.id?a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.apellido,expression:"persona.apellido"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.apellido},on:{input:function(a){a.target.composing||e.$set(t,"apellido",a.target.value)}}})]):a("td",[e._v(" "+e._s(t.apellido)+" ")]),e.editando===t.id?a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"persona.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||e.$set(t,"email",a.target.value)}}})]):a("td",[e._v(" "+e._s(t.email)+" ")]),e.editando===t.id?a("td",[a("button",{staticClass:"btn btn-success",on:{click:function(a){return e.guardarPersona(t)}}},[e._v("💾 Guardar")]),a("button",{staticClass:"btn btn-secondary ml-2",on:{click:function(a){return e.cancelarEdicion(t)}}},[e._v("❌ Cancelar")])]):a("td",[a("button",{staticClass:"btn btn-info",on:{click:function(a){return e.editarPersona(t)}}},[e._v("✏️ Editar")]),a("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return e.$emit("delete-persona",t.id)}}},[e._v("🗑️ Eliminar")])])])})),0)])])}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Nombre")]),a("th",[e._v("Apellido")]),a("th",[e._v("Email")]),a("th",[e._v("Acciones")])])])}],d={name:"tabla-personas",props:{personas:Array},data:function(){return{editando:null}},methods:{editarPersona:function(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona:function(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.personaEditada),this.editando=null}}},u=d,p=a("2877"),m=Object(p["a"])(u,l,c,!1,null,"091a740d",null),v=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"formulario-persona"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.enviarFormulario.apply(null,arguments)}}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.persona.nombre,expression:"persona.nombre"}],ref:"nombre",staticClass:"form-control",class:{"is-invalid":e.procesando&&e.nombreInvalido},attrs:{type:"text"},domProps:{value:e.persona.nombre},on:{focus:e.resetEstado,keypress:e.resetEstado,input:function(t){t.target.composing||e.$set(e.persona,"nombre",t.target.value)}}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Apellido")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.persona.apellido,expression:"persona.apellido"}],staticClass:"form-control",class:{"is-invalid":e.procesando&&e.apellidoInvalido},attrs:{type:"text"},domProps:{value:e.persona.apellido},on:{focus:e.resetEstado,input:function(t){t.target.composing||e.$set(e.persona,"apellido",t.target.value)}}})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.persona.email,expression:"persona.email"}],staticClass:"form-control",class:{"is-invalid":e.procesando&&e.emailInvalido},attrs:{type:"email"},domProps:{value:e.persona.email},on:{focus:e.resetEstado,input:function(t){t.target.composing||e.$set(e.persona,"email",t.target.value)}}})])])]),e._m(0)]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[e.error&&e.procesando?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Debes rellenar todos los campos! ")]):e._e(),e.correcto?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" La persona ha sido agregada correctamente! ")]):e._e()])])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary"},[e._v("Añadir persona")])])])])}],h={name:"formulario-persona",data:function(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",email:""}}},methods:{enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido:function(){return this.persona.nombre.length<1},apellidoInvalido:function(){return this.persona.apellido.length<1},emailInvalido:function(){return this.persona.email.length<1}}},g=h,_=(a("dbd7"),Object(p["a"])(g,f,b,!1,null,"46bb354d",null)),y=_.exports,C={name:"app",components:{TablaPersonas:v,FormularioPersona:y},data:function(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"},{id:4,nombre:"Edgar",apellido:"Oller",email:"n69@email.es"}]}},methods:{agregarPersona:function(e){var t=0;this.personas.length>0&&(t=this.personas[this.personas.length-1].id+1),this.personas=[].concat(Object(i["a"])(this.personas),[Object(s["a"])(Object(s["a"])({},e),{},{id:t})])},eliminarPersona:function(e){this.personas=this.personas.filter((function(t){return t.id!==e}))},actualizarPersona:function(e,t){this.personas=this.personas.map((function(a){return a.id===e?t:a}))}}},P=C,w=(a("034f"),Object(p["a"])(P,r,o,!1,null,null,null)),E=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(E)}}).$mount("#app")},"85ec":function(e,t,a){},dbd7:function(e,t,a){"use strict";a("4a6c")}});
//# sourceMappingURL=app.7ac952e6.js.map