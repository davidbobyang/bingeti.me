(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(4),i=a.n(l),r=(a(17),a(5)),c=a(6),o=a(9),u=a(7),m=a(1),h=a(10),f=a(2),d=a.n(f),p=a(8),v=a.n(p),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={query:"",results:[],final_result:{},final_view:!1,final_string:""},a.handleQueryChange=a.handleQueryChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.handleBack=a.handleBack.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({final_view:!1});var t="https://api.themoviedb.org/3/search/tv?page=1&language=en-US&api_key=5114cf314283a1d83f54f9684a701572&query=".concat(this.state.query);this.fetchSubmitData(t)}},{key:"handleQueryChange",value:function(e){this.setState({query:e.target.value})}},{key:"handleBack",value:function(e){e.preventDefault(),this.setState({final_view:!1})}},{key:"handleClick",value:function(e){var t=this;e.preventDefault();var a=e.currentTarget.value,n="https://api.themoviedb.org/3/tv/".concat(a,"?language=en-US&api_key=5114cf314283a1d83f54f9684a701572");fetch(n,{method:"GET"}).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){console.log(e);var a=e.number_of_episodes*e.episode_run_time[0],n=d.a.duration(a,"minutes"),s=n.days(),l=n.hours(),i=s?1===s?"1 day":s+" days":"",r=l?1===l?"1 hour":l+" hours":"",c=i&&r?" and ":"";t.setState({final_view:!0,final_string:i+c+r,final_result:e})}).catch(function(e){return console.log(e)})}},{key:"fetchSubmitData",value:function(e){var t=this;fetch(e,{method:"GET"}).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){var a=e.results;a=a.slice(0,5),t.setState({results:a}),console.log(e),console.log(t.state.results)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=[];if(this.state.final_view||t.push(s.a.createElement("div",{id:"logo-title"},s.a.createElement("h1",null,"bingetime"),s.a.createElement("img",{src:v.a,alt:"popcorn icon"}))),this.state.final_view?t.push(s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"box"},s.a.createElement("button",{onClick:this.handleBack,className:"submit back-button"},s.a.createElement("i",{class:"fas fa-arrow-left"})),s.a.createElement("input",{className:"search-bar two-icons",type:"text",value:this.state.query,onChange:this.handleQueryChange,autoComplete:"off",placeholder:"type in a tv show"}),s.a.createElement("button",{type:"submit",className:"submit search-button"},s.a.createElement("i",{className:"fas fa-search"}))))):t.push(s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"box"},s.a.createElement("input",{className:"search-bar one-icon",type:"text",value:this.state.query,onChange:this.handleQueryChange,autoComplete:"off",placeholder:"type in a tv show"}),s.a.createElement("button",{type:"submit",className:"submit"},s.a.createElement("i",{className:"fas fa-search"}))))),this.state.final_view){var a={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(this.state.final_result.backdrop_path,")"),backgroundSize:"cover",backgroundColor:"rgba(0,0,0,0.5)"};return t.push(s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row final-result-row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"final-wrapper"},s.a.createElement("div",{className:"final-result"},this.state.final_result.name),s.a.createElement("p",{className:"final-result-info"},this.state.final_result.number_of_seasons,1===this.state.final_result.number_of_seasons?" season, ":" seasons, ",this.state.final_result.number_of_episodes,1===this.state.final_result.number_of_episodes?" episode":" episodes"),s.a.createElement("p",{className:"final-result-info"},"Ended"===this.state.final_result.status?"ended in ".concat(d()(this.state.final_result.last_air_date,"YYYY-MM-DD").format("MMMM YYYY")):"".concat(this.state.final_result.status.toLowerCase())),s.a.createElement("p",{className:"final-result-info"},"takes ",this.state.final_string," to watch")))),s.a.createElement("div",{id:"output"}))),s.a.createElement("div",{className:"container-fluid",style:a},t)}return t.push(s.a.createElement("div",{className:"results container"},this.state.results.map(function(t){return s.a.createElement("div",{className:"row result-row",key:t.id},s.a.createElement("div",{className:"col-xl-3 col-md-4 col-sm-12 result-col"},s.a.createElement("button",{onClick:e.handleClick,className:"result",value:t.id},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w154".concat(t.poster_path),alt:t.name}))),s.a.createElement("div",{className:"d-none d-md-block col-xl-9 col-md-8"},s.a.createElement("button",{onClick:e.handleClick,className:"result",value:t.id},t.name),s.a.createElement("p",{className:"result-aired"},"first aired: ",d()(t.first_air_date,"YYYY-MM-DD").format("MMMM YYYY")),s.a.createElement("p",{className:"result-overview"},t.overview)))}))),s.a.createElement("div",{className:"container-fluid"},t)}}]),t}(s.a.Component);a(19);var E=function(){return s.a.createElement(b,{url:"/"})};i.a.render(s.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/popcorn.1e555263.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.029b4944.chunk.js.map