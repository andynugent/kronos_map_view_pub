(this.webpackJsonpkronos_map_view=this.webpackJsonpkronos_map_view||[]).push([[0],{26:function(t,e,a){},27:function(t,e,a){},34:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},43:function(t){t.exports=JSON.parse('[{"id":"PM 8521A","Name":"Marina Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"14/12/21","Cable":18,"Machine":88,"Local":14,"Acoustic":71},{"Date":"17/11/21","Cable":27,"Machine":79,"Local":14,"Acoustic":68}],"lat":53.469787,"lng":-2.348776,"icon":"Motor-32-red.png","mainPhoto":"site/Main (1).JPG","photos":["site/photosLabel (1).JPG","site/photosOther (1).JPG"]},{"id":"PM 8521B","Name":"Marina Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"15/12/21","Cable":37,"Machine":88,"Local":14,"Acoustic":71},{"Date":"10/6/21","Cable":27,"Machine":84,"Local":14,"Acoustic":71},{"Date":"18/11/20","Cable":17,"Machine":79,"Local":14,"Acoustic":68}],"lat":53.528029,"lng":-2.315569,"icon":"Motor-32-amber.png","mainPhoto":"site/Main (2).JPG","photos":["site/photosLabel (2).JPG","site/photosOther (2).JPG"]},{"id":"PM 8521C","Name":"Marina Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"13/12/21","Cable":57,"Machine":88,"Local":14,"Acoustic":71},{"Date":"27/11/21","Cable":77,"Machine":79,"Local":14,"Acoustic":68}],"lat":53.490711,"lng":-2.307195,"icon":"Motor-32-green.png","mainPhoto":"site/Main (3).JPG","photos":["site/photosLabel (3).JPG","site/photosOther (3).JPG"]},{"id":"PM 8521D","Name":"Marina Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"14/10/21","Cable":18,"Machine":89,"Local":14,"Acoustic":71},{"Date":"17/11/20","Cable":16,"Machine":89,"Local":15,"Acoustic":68}],"lat":53.465238,"lng":-2.346249,"icon":"Motor-32-yellow.png","mainPhoto":"site/Main (4).JPG","photos":["site/photosLabel (4).JPG","site/photosOther (4).JPG","site/photosOther (3).JPG"]},{"id":"PM 8521D","Name":"Houston Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"14/10/20","Cable":18,"Machine":89,"Local":14,"Acoustic":71},{"Date":"17/11/19","Cable":16,"Machine":89,"Local":15,"Acoustic":68}],"lat":29.688579,"lng":-95.246833,"icon":"Motor-32-yellow.png","mainPhoto":"site/Main (4).JPG","photos":["site/photosLabel (4).JPG","site/photosOther (4).JPG","site/photosOther (3).JPG"]},{"id":"PM 8521D","Name":"Dubai Substation","Description":"PM 8521A \\r\\n400 kW \\r\\n50Hz \\r\\nPOA03029","Data":[{"Date":"14/1/21","Cable":78,"Machine":69,"Local":44,"Acoustic":31},{"Date":"17/1/20","Cable":16,"Machine":89,"Local":15,"Acoustic":68}],"lat":25.186874664111667,"lng":55.27403646421952,"icon":"Motor-32-yellow.png","mainPhoto":"site/Main (4).JPG","photos":["site/photosLabel (4).JPG","site/photosOther (4).JPG","site/photosOther (3).JPG"]}]')},44:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),o=a(6),c=a.n(o),s=(a(26),a(4)),r=a(5),l=a(8),h=a(7),A=(a(27),a(11)),p=a(21),u=a(17),d=a.n(u),b=(a(34),a(2)),j=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).createClusters=function(t,e){var a;void 0!==e.bounds?a=d()(t,{minZoom:0,maxZoom:16,radius:40})(e).map((function(t){var e=t.wx,a=t.wy,n=t.numPoints,i=t.points;return{lat:a,lng:e,numPoints:n,id:"".concat(n,"_").concat(i[0].id),points:i}})):a=[];n.setState({clusters:a})},n.handleMapChange=function(t){var e=t.center,a=t.zoom,i=t.bounds;n.createClusters(n.props.locations,{center:e,zoom:a,bounds:i})},n.state={clusters:[]},n}return Object(r.a)(a,[{key:"onMarkerClick",value:function(t){void 0!==this.props.onMarkerClick&&this.props.onMarkerClick(t)}},{key:"onClusterClick",value:function(t){void 0!==this.props.onMarkerClick&&this.props.onClusterClick(t)}},{key:"renderMarker",value:function(t){var e=this;return 1===t.numPoints?Object(b.jsx)("img",{className:"marker-icon",src:"/kronos_map_view_pub/"+t.points[0].icon,alt:"pin",onClick:function(){return e.onMarkerClick(t.points[0])}}):Object(b.jsxs)("div",{className:"marker-group",lat:t.lat,lng:t.lng,onClick:function(){return e.onClusterClick(t.points[0])},children:[Object(b.jsx)("img",{className:"marker-icon",src:"".concat("/kronos_map_view_pub","/").concat(t.points[0].icon),alt:t.points[0].icon}),Object(b.jsx)("div",{className:"marker-counter",children:t.points.length})]})}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(b.jsx)(p.a,{bootstrapURLKeys:{key:"AIzaSyBeQJKcfrMZkXf3kRJZZkD34V3rnM-IgYI"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,onChange:this.handleMapChange,children:this.state.clusters.map((function(e){return Object(b.jsx)(A.b,{to:"/",lat:e.lat,lng:e.lng,children:t.renderMarker(e)})}))})})}}]),a}(i.a.Component);j.defaultProps={onMarkerClick:void 0,center:{lat:53.5,lng:-2.3},zoom:12};var m=j,O=(a(39),a(40),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"getCellClassName",value:function(t){var e=Number(t);return e>=75?"pd-cell pd-cell-red":e>=25?"pd-cell pd-cell-amber":"pd-cell pd-cell-green"}},{key:"getTD",value:function(t,e){var a=Number(t);return Object(b.jsx)("td",{className:this.getCellClassName(a),children:a},e)}},{key:"render",value:function(){if(void 0!==this.props.data){for(var t=[],e=0;e<this.props.data.length;e++){var a="TableMotorStatus-row-".concat(e),n=[];n.push(Object(b.jsx)("td",{className:"date",children:this.props.data[e].Date},"".concat(a,"-Date"))),n.push(this.getTD(this.props.data[e].Cable,"".concat(a,"-Cable"))),n.push(this.getTD(this.props.data[e].Machine,"".concat(a,"-Machine"))),n.push(this.getTD(this.props.data[e].Local,"".concat(a,"-Local"))),n.push(this.getTD(this.props.data[e].Acoustic,"".concat(a,"-Acoustic"))),t.push(Object(b.jsx)("tr",{children:n},a))}return Object(b.jsxs)("table",{id:"simple-board",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"date",children:"Date"}),Object(b.jsx)("th",{className:"pd-cell",children:"Cable"}),Object(b.jsx)("th",{className:"pd-cell",children:"Machine"}),Object(b.jsx)("th",{className:"pd-cell",children:"Local"}),Object(b.jsx)("th",{className:"pd-cell",children:"Acoustic"})]})}),Object(b.jsx)("tbody",{children:t})]})}return Object(b.jsx)("div",{})}}]),a}(i.a.Component)),v=O,k=(a(41),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(void 0!==this.props.data){for(var t=[],e=0;e<this.props.data.length;e++)t.push(Object(b.jsx)("img",{src:"".concat("/kronos_map_view_pub","/").concat(this.props.data[e]),alt:this.props.data[e],width:"50%"},"PhotoGallery-".concat(e)));return Object(b.jsx)("div",{children:t})}return Object(b.jsx)("div",{})}}]),a}(i.a.Component)),C=k,g=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).setLocation=function(t){n.setState({location:t,cluster:void 0})},n.setCluster=function(t){n.setState({cluster:t,location:void 0})},n.state={location:void 0,cluster:void 0},n}return Object(r.a)(a,[{key:"renderLocation",value:function(t){return Object(b.jsxs)("div",{className:"simple-map-sidebar",children:[Object(b.jsx)("img",{src:"/kronos_map_view_pub/"+t.mainPhoto,alt:"mainPhoto",width:"400px"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"text id",children:t.id}),Object(b.jsx)("div",{className:"text",children:t.Name}),Object(b.jsxs)("button",{children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgUHJvZmlsZQAAKM+VkT1Iw1AUhU/TSkWqHewg4pChOlkQFXGUKBbBQmkrtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Im5uToouUeF9SaBEq+ODyPs5753DffYDQqDDNCkwAmm6bqbgkZnOrYvAVIYSpBhCQmWUk0osZdF1f9/Dx/S7Gs/C/1a/mLQb4ROI5Zpg28QbxzKZtcN4njrCSrBKfE4+b1CDxI9cVj984F10WeGbEzKTmiSPEYrGDlQ5mJVMjniaOqppO+ULWY5XzFmetUmOtPvkLQ3l9Jc11qhHEsYQEkhChoIYyKrARo10nxUKKzqUu/mHXnySXQq4yGDkWUIUG2fWD/8Hv2VqFqUkvKSQBPS+O8zEKBHeBZt1xvo8dp3kC+J+BK73trzaA2U/S620tegSEt4GL67am7AGXO8DQkyGbsiv5qYRCAXg/o2/KAYO3QN+aN7fWOU4fgAzNavkGODgExoqUvd7l3b2dc/vzjjs/SD8bknKE8Wl/CAAAAAlwSFlzAAAN1gAADdYBkG95nAAAAgRJREFUSEvtlE1LG1EUhs9JTGOCZDEzfi2EmpmduOnGpahURRTcqHUlKK5KF/0B/osuqqV0o+4KdetCKK2ltgitEMEoaMykJX4EGiyhUXM8d+a2zJhx8kGXPpDcM++5vO/cO3cG7jk3lJgsPQnIsS4yhjJYIExlDG1MSmXUHSDMiXCNyxgRvc3oypTdcVNXgDR/x2UqiNTN4zYBrrA+Z01wUHOA486PQqVgb/tBbjeCNERAn1h/ldbVZ/ZMm5oCHOaHbN7XeniSFbp6kMsj4GsuEQFm9g0jLHQBX1eHY1uOr66w72Hq7KfdATANZQIIV7ncoT+XjzvMfM7uVLmCCuaTd5kLKgb4mVsnh3CFy+9e5gLfAH9z7QmfnGUuv/JD7vcyF9wZ4Gse16b51AjzL2w+LB6y3SnHM8DfXJklFOb4OdyAvuaemHF1wNTVAv92s50trVK24OA51q855P1JV3OTlH0pXwHSc/7/5TzngrSuzfOqlrj8EGwKjbQkTi/sjj+uALLei0AP7+/GbXMEesn65oPGwGjbTva3bFXEFWDGmw2O0ThpS0r/zJHoY7gxWPWd/8W9RYFSjzUAJn4Y2iNTVxbYfJGljVIxOlyrucD1qUjH1Rf8MXkqLy2IYB2KkfEO0yxIqSZcAXxC3rAUZdskIezBNSTz0fNvXQkoyin3/G8AbgCs4gZoJW8U5wAAAABJRU5ErkJggg==",alt:""}),Object(b.jsx)("div",{className:"button-text",children:"Add/Edit Information"})]}),Object(b.jsxs)("button",{children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgUHJvZmlsZQAAKM+VkT1Iw1AUhU/TSkWqHewg4pChOlkQFXGUKBbBQmkrtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Im5uToouUeF9SaBEq+ODyPs5753DffYDQqDDNCkwAmm6bqbgkZnOrYvAVIYSpBhCQmWUk0osZdF1f9/Dx/S7Gs/C/1a/mLQb4ROI5Zpg28QbxzKZtcN4njrCSrBKfE4+b1CDxI9cVj984F10WeGbEzKTmiSPEYrGDlQ5mJVMjniaOqppO+ULWY5XzFmetUmOtPvkLQ3l9Jc11qhHEsYQEkhChoIYyKrARo10nxUKKzqUu/mHXnySXQq4yGDkWUIUG2fWD/8Hv2VqFqUkvKSQBPS+O8zEKBHeBZt1xvo8dp3kC+J+BK73trzaA2U/S620tegSEt4GL67am7AGXO8DQkyGbsiv5qYRCAXg/o2/KAYO3QN+aN7fWOU4fgAzNavkGODgExoqUvd7l3b2dc/vzjjs/SD8bknKE8Wl/CAAAAAlwSFlzAAAN1gAADdYBkG95nAAAAkdJREFUSEvVlE1oE0EUx9+bTbSCFt1NERI/aBMN2IMHET14EKGgB+lJ8SCKZy9aRDAIVihSQUHrxVOvXgTxGFA8eFUPHirYpMUmoZK4fvSgQnfz/G92hGx38gFW0B/Mvnn/2X1vZufN0N+GtTVSHd66nyy1V7sxNhEVndLnFe0a6Z5gJHWXWCa0G0Mp2peed99p14jSths+C421NyG5o8d60k8CySy4z9qbEprTYz3pJ8Ef8f8niFRRLZs6I0SD2gVyCo+jO8puMvRDaiP2BWGeZZFJYbWsZRLhFzsXGvPabbEmgXMVCW5r9zdepwTabYFAHwdY8mvPReQXfedt92FKaHWLZdS3EtlEwosdtA1J9TgYCxrcqZYoUuh16FrUcs54NetINedc01JH3Jw9iFUv4/3XWLlxP2NipuQ+xXKLJFRYyqfSWjbyo6kmEXi7aqpL+Kap5QjGrKzoMsxG5cmtUIlTyQ7lcI1cZKZH6cXGSy3HMCYI7hfM6CG65yp7nEOhGoVJZmB89v1CqJgxJgjwVr0bCONyk+7hN0Srbdgew66eQJlOpxe/ftCykY4Jdi99+4JZ3kT3MDb+bKgSvTpASVH8AN0K/xzo+9IzgplbqJC3aNX66NDmQKvm7ImwyuzTrZd6EFm6CQQ7BvMcbcri5Iwvq+/Rn8uU3SP4GHPoTs8EAZWs8wQvHke0IuxJxXwwXfr0Rg93peMetCNsXYFBRdI4E8/2GzygrwS7SvUyogfVtJJoqutaXl8a+dQW7Md57f4rEP0CV9/Bt725L8YAAAAASUVORK5CYII=",alt:""}),Object(b.jsx)("div",{className:"button-text",children:"Download Latest Report"})]}),Object(b.jsxs)("button",{children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7UExURf////7+/uDh48bHzdPU2O7u8I6QnI2Pm+Lj5ri5wM3O06Kkrurq7NTV2b/Ax6qrtP3y8faim/eYkfablPvf3fJ9dO4xI+5JPeDh5PJkWvJlWvvLyPFYTPiln/R+dvaYkamrtO8+MfBLP/j4+ePj5vHx8vvMyPR+dfmyrDfR2P8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVChTfZKLDoIwDEWLoI6X+FZaEEQc/v8XWlnHK+BJlnT30G5ZAMHpkMCycod4nV5vtiM8yUFJYHEl/yN8pfxAqVC1K+hEFAPEEcCO64S/Y+HA/nAccDqzVK7D4nIdcbsnSdiKVBILTzMdKIGlEykRZUT5g+iRc9kLrnhRAVAQAEZlac7Aieg7EPGJmFWIVcbl4qhXXQezo9787ur37tMO3hpmzjDM3MqwPEprnWmdN1o3OZcSA3yKMRIL8u8w7RbgC8LKGCP1Y5JhAAAAAElFTkSuQmCC",alt:""}),Object(b.jsx)("div",{className:"button-text",children:"Show Benchmarking Table"})]}),Object(b.jsx)("div",{className:"description text",children:t.Description}),Object(b.jsx)("img",{src:"/kronos_map_view_pub/Heatmaps.png",alt:"Heatmaps",width:"400px"}),Object(b.jsx)(v,{data:t.Data}),Object(b.jsx)("div",{className:"text header",children:"Photos:"}),Object(b.jsx)(C,{data:t.photos})]})}},{key:"renderCluster",value:function(t){return Object(b.jsx)("div",{})}},{key:"render",value:function(){return void 0!==this.state.location?this.renderLocation(this.state.location):void 0!==this.state.cluster?this.renderCluster(this.state.cluster):Object(b.jsx)("div",{})}}]),a}(i.a.Component),M=a(20),f=a(43),x=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).refSimpleMapSidePane=i.a.createRef(),n}return Object(r.a)(a,[{key:"onMarkerClick",value:function(t){void 0!==this.refSimpleMapSidePane&&void 0!==this.refSimpleMapSidePane.current&&this.refSimpleMapSidePane.current.setLocation(t)}},{key:"onClusterClick",value:function(t){console.log("onClusterClick",t),void 0!==this.refSimpleMapSidePane&&void 0!==this.refSimpleMapSidePane.current&&this.refSimpleMapSidePane.current.setCluster(t)}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(M.a,{split:"vertical",defaultSize:416,children:[Object(b.jsx)(g,{ref:this.refSimpleMapSidePane}),Object(b.jsx)(m,{locations:f,onMarkerClick:function(e){return t.onMarkerClick(e)},onClusterClick:function(e){return t.onClusterClick(e)}})]})})}}]),a}(i.a.Component);c.a.render(Object(b.jsx)(A.a,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2ba14ff5.chunk.js.map