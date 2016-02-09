apiUrl="https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/jerryqiu?api_key=05140fb9-6210-4047-a6d8-a64e826124a3"
partone="https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"
parttwo="?api_key=05140fb9-6210-4047-a6d8-a64e826124a3"
Vue.component('queryform',{
	template:'#query-form',
	data:function(){
		return {
			name:'',
			summoner:[]

		}
	},
	computed:{},
	methods:{
		getSummoner:function(){
			this.$http.get(
				partone+this.name,
				function(name){
					this.summoner=name;
					//console.log(JSON.stringify(this.summoner));
				}.bind(this),
				{
        			params:{
            					'api_key':'05140fb9-6210-4047-a6d8-a64e826124a3'
        				},
        			 headers: {
           						 'User-Agent': "Riot-Games-Developer-Portal",
       							 'Accept-Language': "en-US",
       							 'Accept-Charset': "ISO-8859-1,utf-8",
        						'Origin':"https://developer.riotgames.com"
         					}
    			 }
    		);

			
		}
	}
});



new Vue({
	el:'body'
});