webpackJsonp([3],{1176:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(65),i=n(o),l=a(3),r=n(l),u=a(6),c=n(u),s=a(4),f=n(s),d=a(5),m=n(d),v=a(0),h=n(v),p=a(86),D=n(p),g=a(1),_=n(g),E=a(525),M=n(E),T=a(1182),y=n(T);a(1196);var P=function(e){function t(e){(0,r.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.fetch=function(e){y.default.getMovieDetailData(e).then(function(e){console.log(e),a.setState({isLoading:!1,movieDetailData:e})}).catch(function(e){console.error(e)})},a.renderLoading=function(){return h.default.createElement("div",{className:"movieDetail_container"},h.default.createElement(M.default,null))},a.renderMovieDetail=function(){return h.default.createElement("div",{className:"movieDetail_container"},h.default.createElement("div",{className:"movieDetail_image"},h.default.createElement("img",{src:a.state.movieDetailData.images.large,alt:""})),h.default.createElement("h1",null,a.state.movieDetailData.title),h.default.createElement("p",null,a.state.movieDetailData.year),h.default.createElement("p",null,a.state.movieDetailData.summary))},a.shouldComponentUpdate=function(){return D.default.shouldComponentUpdate},a.state={isLoading:!0,movieDetailData:[]},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.fetch(this.props.params.id)}},{key:"render",value:function(){return this.state.isLoading?this.renderLoading():this.renderMovieDetail()}}]),t}(h.default.Component);P.propTypes={params:_.default.object},t.default=P},1182:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(523),i=n(o),l=a(524),r=n(l);t.default={getMovieListData:function(e){return console.log(e),new i.default(function(t,a){var n=""+r.default.HTTP+r.default.SERVER_PATH+":"+r.default.PORT+"/api/getMovieListData?message="+e;console.log(n),fetch(n).then(function(e){if(e.ok)return e.json();console.error("服务器忙,请稍后再试;\r\nCode:"+e.status)}).then(function(e){console.log(e),t(e)}).catch(function(e){a(e)})})},getMovieDetailData:function(e){return new i.default(function(t,a){var n=""+r.default.HTTP+r.default.SERVER_PATH+":"+r.default.PORT+"/api/getMovieDetailData?message="+e;fetch(n).then(function(e){if(e.ok)return e.json();console.error("服务器忙,请稍后再试;\r\nCode:"+e.status)}).then(function(e){t(e)}).catch(function(e){a(e)})})},searchMovieListData:function(e){return new i.default(function(t,a){var n=""+r.default.HTTP+r.default.SERVER_PATH+":"+r.default.PORT+"/api/searchMovieListData?message="+e;fetch(n).then(function(e){if(e.ok)return e.json();console.error("服务器忙,请稍后再试;\r\nCode:"+e.status)}).then(function(e){console.log(e),t(e)}).catch(function(e){a(e)})})}}},1196:function(e,t,a){var n=a(1197);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;a(1174)(n,o);n.locals&&(e.exports=n.locals)},1197:function(e,t,a){t=e.exports=a(1173)(void 0),t.push([e.i,".movieDetail_container{height:100%;overflow-y:scroll}h1{font-weight:700!important}h1,p:first-of-type{text-align:center}.movieDetail_image{display:flex;justify-content:center;align-items:center}",""])}});