(this.webpackJsonpkronos_map_view=this.webpackJsonpkronos_map_view||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},34:function(t){t.exports=JSON.parse('[{"id":1234,"country":"Finland","city":"Helsinki","street":"Yliopistonkatu 4","postcode":"00101","lat":"60.169787","lng":"24.948776","icon":"motor-32-red.png"},{"id":1235,"country":"Finland","city":"Helsinki","street":"Ladugordsbogen 3","postcode":"00790","lat":"60.228029","lng":"25.015569","icon":"motor-32-amber.png"},{"id":1236,"country":"Finland","city":"Helsinki","street":"Haartmansgatan 4","postcode":"00290","lat":"60.190711","lng":"24.907195","icon":"motor-32-green.png"},{"id":1237,"country":"Finland","city":"Helsinki","street":"Hogbergsgatan 35","postcode":"00101","lat":"60.165238","lng":"24.946249","icon":"motor-32-green.png"}]')},35:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(4),c=n.n(o),a=(n(25),n(7)),s=n(8),l=n(11),d=n(10),u=(n(26),n(9)),p=n(20),b=n(2),h={position:"absolute",top:"100%",left:"50%",transform:"translate(-50%, -100%)"},k=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"handleMarkerClick",value:function(t){void 0!==this.props.handleMarkerClick&&this.props.handleMarkerClick(t)}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(b.jsx)(p.a,{bootstrapURLKeys:{key:"AIzaSyBeQJKcfrMZkXf3kRJZZkD34V3rnM-IgYI"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:this.props.locations.map((function(e){return Object(b.jsx)(u.b,{to:"/",lat:e.lat,lng:e.lng,children:Object(b.jsx)("img",{style:h,src:"/kronos_map_view_pub/"+e.icon,alt:"pin",onClick:function(){return t.handleMarkerClick(e)}})})}))})})}}]),n}(i.a.Component);k.defaultProps={handleMarkerClick:void 0,center:{lat:60.192059,lng:24.945831},zoom:12};var f=k,j=n(19),y=n(34),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).myRef=i.a.createRef(),r}return Object(s.a)(n,[{key:"handleMarkerClick",value:function(t){void 0!==this.myRef&&void 0!==this.myRef.current&&(this.myRef.current.innerHTML="Clicked on: <br><br>"+"id = ".concat(t.id," <br>")+"<br>"+"latitude = ".concat(t.lat," <br>")+"longitude = ".concat(t.lng," <br>")+"<br>"+"street = ".concat(t.street," <br>")+"city = ".concat(t.city," <br>")+"postcode = ".concat(t.postcode," <br>")+"country = ".concat(t.country," <br>"))}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{split:"vertical",minSize:200,defaultSize:200,children:[Object(b.jsx)("div",{ref:this.myRef}),Object(b.jsx)(f,{locations:y,handleMarkerClick:function(e){return t.handleMarkerClick(e)}})]})})}}]),n}(i.a.Component),g=document.getElementById("root");c.a.render(Object(b.jsx)(u.a,{children:Object(b.jsx)(m,{})}),g)}},[[35,1,2]]]);
//# sourceMappingURL=main.a9e710bf.chunk.js.map