(this.webpackJsonpkronos_map_view=this.webpackJsonpkronos_map_view||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e){e.exports=JSON.parse('[{"id":"PM 8521A","Name":"Marina Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"14/12/21","Cable":17,"Machine":88,"Local":14,"Acoustic":71},{"Date":"17/11/21","Cable":17,"Machine":79,"Local":14,"Acoustic":68}],"lat":"53.469787","lng":"-2.348776","icon":"motor-32-red.png","mainPhoto":"site/Main (1).jpg","photos":["",""]},{"id":"PM 8521B","lat":"53.528029","lng":"-2.315569","icon":"motor-32-amber.png","mainPhoto":"site/Main (2).jpg"},{"id":"PM 8521C","lat":"53.490711","lng":"-2.307195","icon":"motor-32-green.png","mainPhoto":"site/Main (3).jpg"},{"id":"PM 8521D","lat":"53.465238","lng":"-2.346249","icon":"motor-32-yellow.png","mainPhoto":"site/Main (4).jpg"}]')},37:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(4),r=a.n(s),c=(a(25),a(5)),o=a(6),l=a(8),d=a(7),p=(a(26),a(11)),h=a(20),b=a(2),A={position:"absolute",top:"100%",left:"50%",transform:"translate(-50%, -100%)"},j=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleMarkerClick",value:function(e){void 0!==this.props.handleMarkerClick&&this.props.handleMarkerClick(e)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(b.jsx)(h.a,{bootstrapURLKeys:{key:"AIzaSyBeQJKcfrMZkXf3kRJZZkD34V3rnM-IgYI"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:this.props.locations.map((function(t){return Object(b.jsx)(p.b,{to:"/",lat:t.lat,lng:t.lng,children:Object(b.jsx)("img",{style:A,src:"/kronos_map_view_pub/"+t.icon,alt:"pin",onClick:function(){return e.handleMarkerClick(t)}})})}))})})}}]),a}(n.a.Component);j.defaultProps={handleMarkerClick:void 0,center:{lat:53.5,lng:-2.3},zoom:12};var m=j,u=(a(33),a(34),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getCellClassName",value:function(e){var t=Number(e);return t>=75?"pd-cell pd-cell-red":t>=25?"pd-cell pd-cell-amber":"pd-cell pd-cell-green"}},{key:"getTD",value:function(e){var t=Number(e);return Object(b.jsx)("td",{className:this.getCellClassName(t),children:t})}},{key:"render",value:function(){var e=[];if(void 0!==this.props.data){for(var t=0;t<this.props.data.length;t++){var a="row".concat(t),i=[];i.push(Object(b.jsx)("td",{className:"date",children:this.props.data[t].Date})),i.push(this.getTD(this.props.data[t].Cable)),i.push(this.getTD(this.props.data[t].Machine)),i.push(this.getTD(this.props.data[t].Local)),i.push(this.getTD(this.props.data[t].Acoustic)),e.push(Object(b.jsx)("tr",{id:a,children:i},t))}return Object(b.jsxs)("table",{id:"simple-board",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"date",children:"Date"}),Object(b.jsx)("th",{className:"pd-cell",children:"Cable"}),Object(b.jsx)("th",{className:"pd-cell",children:"Machine"}),Object(b.jsx)("th",{className:"pd-cell",children:"Local"}),Object(b.jsx)("th",{className:"pd-cell",children:"Acoustic"})]})}),Object(b.jsx)("tbody",{children:e})]})}return Object(b.jsx)("div",{})}}]),a}(n.a.Component)),O=u,g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).setLocation=function(e){i.setState({location:e})},i.state={location:void 0},i}return Object(o.a)(a,[{key:"render",value:function(){return void 0===this.state.location?Object(b.jsx)("div",{}):Object(b.jsxs)("div",{className:"simple-map-sidebar",children:[Object(b.jsx)("img",{src:"/kronos_map_view_pub/"+this.state.location.mainPhoto,alt:"mainPhoto",width:"400px"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"simple-map-sidebar-id simple-map-sidebar-text",children:this.state.location.id}),Object(b.jsx)("div",{className:"simple-map-sidebar-text",children:this.state.location.Name}),Object(b.jsxs)("button",{children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgUHJvZmlsZQAAKM+VkT1Iw1AUhU/TSkWqHewg4pChOlkQFXGUKBbBQmkrtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Im5uToouUeF9SaBEq+ODyPs5753DffYDQqDDNCkwAmm6bqbgkZnOrYvAVIYSpBhCQmWUk0osZdF1f9/Dx/S7Gs/C/1a/mLQb4ROI5Zpg28QbxzKZtcN4njrCSrBKfE4+b1CDxI9cVj984F10WeGbEzKTmiSPEYrGDlQ5mJVMjniaOqppO+ULWY5XzFmetUmOtPvkLQ3l9Jc11qhHEsYQEkhChoIYyKrARo10nxUKKzqUu/mHXnySXQq4yGDkWUIUG2fWD/8Hv2VqFqUkvKSQBPS+O8zEKBHeBZt1xvo8dp3kC+J+BK73trzaA2U/S620tegSEt4GL67am7AGXO8DQkyGbsiv5qYRCAXg/o2/KAYO3QN+aN7fWOU4fgAzNavkGODgExoqUvd7l3b2dc/vzjjs/SD8bknKE8Wl/CAAAAAlwSFlzAAAN1gAADdYBkG95nAAAAgRJREFUSEvtlE1LG1EUhs9JTGOCZDEzfi2EmpmduOnGpahURRTcqHUlKK5KF/0B/osuqqV0o+4KdetCKK2ltgitEMEoaMykJX4EGiyhUXM8d+a2zJhx8kGXPpDcM++5vO/cO3cG7jk3lJgsPQnIsS4yhjJYIExlDG1MSmXUHSDMiXCNyxgRvc3oypTdcVNXgDR/x2UqiNTN4zYBrrA+Z01wUHOA486PQqVgb/tBbjeCNERAn1h/ldbVZ/ZMm5oCHOaHbN7XeniSFbp6kMsj4GsuEQFm9g0jLHQBX1eHY1uOr66w72Hq7KfdATANZQIIV7ncoT+XjzvMfM7uVLmCCuaTd5kLKgb4mVsnh3CFy+9e5gLfAH9z7QmfnGUuv/JD7vcyF9wZ4Gse16b51AjzL2w+LB6y3SnHM8DfXJklFOb4OdyAvuaemHF1wNTVAv92s50trVK24OA51q855P1JV3OTlH0pXwHSc/7/5TzngrSuzfOqlrj8EGwKjbQkTi/sjj+uALLei0AP7+/GbXMEesn65oPGwGjbTva3bFXEFWDGmw2O0ThpS0r/zJHoY7gxWPWd/8W9RYFSjzUAJn4Y2iNTVxbYfJGljVIxOlyrucD1qUjH1Rf8MXkqLy2IYB2KkfEO0yxIqSZcAXxC3rAUZdskIezBNSTz0fNvXQkoyin3/G8AbgCs4gZoJW8U5wAAAABJRU5ErkJggg==",alt:"",width:"24"}),"Add/Edit Information"]}),Object(b.jsxs)("button",{children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgUHJvZmlsZQAAKM+VkT1Iw1AUhU/TSkWqHewg4pChOlkQFXGUKBbBQmkrtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Im5uToouUeF9SaBEq+ODyPs5753DffYDQqDDNCkwAmm6bqbgkZnOrYvAVIYSpBhCQmWUk0osZdF1f9/Dx/S7Gs/C/1a/mLQb4ROI5Zpg28QbxzKZtcN4njrCSrBKfE4+b1CDxI9cVj984F10WeGbEzKTmiSPEYrGDlQ5mJVMjniaOqppO+ULWY5XzFmetUmOtPvkLQ3l9Jc11qhHEsYQEkhChoIYyKrARo10nxUKKzqUu/mHXnySXQq4yGDkWUIUG2fWD/8Hv2VqFqUkvKSQBPS+O8zEKBHeBZt1xvo8dp3kC+J+BK73trzaA2U/S620tegSEt4GL67am7AGXO8DQkyGbsiv5qYRCAXg/o2/KAYO3QN+aN7fWOU4fgAzNavkGODgExoqUvd7l3b2dc/vzjjs/SD8bknKE8Wl/CAAAAAlwSFlzAAAN1gAADdYBkG95nAAAAkdJREFUSEvVlE1oE0EUx9+bTbSCFt1NERI/aBMN2IMHET14EKGgB+lJ8SCKZy9aRDAIVihSQUHrxVOvXgTxGFA8eFUPHirYpMUmoZK4fvSgQnfz/G92hGx38gFW0B/Mvnn/2X1vZufN0N+GtTVSHd66nyy1V7sxNhEVndLnFe0a6Z5gJHWXWCa0G0Mp2peed99p14jSths+C421NyG5o8d60k8CySy4z9qbEprTYz3pJ8Ef8f8niFRRLZs6I0SD2gVyCo+jO8puMvRDaiP2BWGeZZFJYbWsZRLhFzsXGvPabbEmgXMVCW5r9zdepwTabYFAHwdY8mvPReQXfedt92FKaHWLZdS3EtlEwosdtA1J9TgYCxrcqZYoUuh16FrUcs54NetINedc01JH3Jw9iFUv4/3XWLlxP2NipuQ+xXKLJFRYyqfSWjbyo6kmEXi7aqpL+Kap5QjGrKzoMsxG5cmtUIlTyQ7lcI1cZKZH6cXGSy3HMCYI7hfM6CG65yp7nEOhGoVJZmB89v1CqJgxJgjwVr0bCONyk+7hN0Srbdgew66eQJlOpxe/ftCykY4Jdi99+4JZ3kT3MDb+bKgSvTpASVH8AN0K/xzo+9IzgplbqJC3aNX66NDmQKvm7ImwyuzTrZd6EFm6CQQ7BvMcbcri5Iwvq+/Rn8uU3SP4GHPoTs8EAZWs8wQvHke0IuxJxXwwXfr0Rg93peMetCNsXYFBRdI4E8/2GzygrwS7SvUyogfVtJJoqutaXl8a+dQW7Md57f4rEP0CV9/Bt725L8YAAAAASUVORK5CYII=",alt:"",width:"24"}),"Download Latest Report"]}),Object(b.jsx)("div",{className:"simple-map-sidebar-description simple-map-sidebar-text",children:this.state.location.Description}),Object(b.jsx)("img",{src:"/kronos_map_view_pub/Heatmaps.png",alt:"Heatmaps",width:"400px"}),Object(b.jsx)(O,{data:this.state.location.Data}),Object(b.jsx)("div",{children:"Photos:"})]})}}]),a}(n.a.Component),v=a(19),k=a(36),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).refSimpleMapSidePane=n.a.createRef(),i.state={location:void 0},i}return Object(o.a)(a,[{key:"handleMarkerClick",value:function(e){void 0!==this.refSimpleMapSidePane&&void 0!==this.refSimpleMapSidePane.current&&this.refSimpleMapSidePane.current.setLocation(e)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(v.a,{split:"vertical",minSize:300,defaultSize:400,children:[Object(b.jsx)(g,{ref:this.refSimpleMapSidePane}),Object(b.jsx)(m,{locations:k,handleMarkerClick:function(t){return e.handleMarkerClick(t)}})]})})}}]),a}(n.a.Component),x=document.getElementById("root");r.a.render(Object(b.jsx)(p.a,{children:Object(b.jsx)(f,{})}),x)}},[[37,1,2]]]);
//# sourceMappingURL=main.8b477f24.chunk.js.map