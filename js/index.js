(function () {
	//定义gameWeb对象
	var gameWeb = {
		$:function(ele){
			return document.querySelectorAll(ele);
		},
		//gameWeb对象中的bannerEvent方法
		'topBarEvent':function(){
			var Game_tree_box = this.$('.Game_tree_box')[0];
			var topBar_gamelist = this.$('.topBar_gamelist')[0];
			var timer = null;
			var topBar_gamelist_son = topBar_gamelist.children;
			topBar_gamelist.onclick = function(){
				if (Game_tree_box.style.display=='block') {
					clearTimeout(timer);
					Game_tree_box.style.height='0px';
					timer = setTimeout(function(){
						Game_tree_box.style.display='none';
					},500);
					for (var i = 0; i < topBar_gamelist_son.length; i++) {
						topBar_gamelist_son[i].style.display = 'block';
					}
					this.className = 'topBar_gamelist';
				}else{
					Game_tree_box.style.display='block';
					clearTimeout(timer);
					timer = setTimeout(function(){
						Game_tree_box.style.height='930px';
					},0);
					for (var i = 0; i < topBar_gamelist_son.length; i++) {
						topBar_gamelist_son[i].style.display = 'none';
					}
					this.className = 'topBar_gamelist active';
				}
				
			};
		},
		//banner界面切换效果
		'bannerEvent':function(){
			var banner_choice_spot = this.$('.banner_choice_spot')[0].children;
			var banner_ul_allLi = this.$('.banner_ul')[0].children;
			var timer = null;
			var time_poll = null;
			var count = 0;

			var banner_btn_arr = [
				{
					"title":'梦幻西游三维版全新主角',
					'text':'首位人魔双族主角涂山猗',
					'bg':'img/7e09ab82-2c1f-4ec5-96c5-5cd71b99b551.jpg'
				},
				{
					"title":'新倩女幽魂角',
					'text':'新倩女幽魂',
					'bg':'img/2bef2894-5e9d-4f9a-a36b-a2ef23577602.jpg'
				},
				{
					"title":'狼人杀',
					'text':'狼人杀',
					'bg':'img/026da86d-7d72-4d60-a945-a7f817b439c5.jpg'
				},
				{
					"title":'王牌竞速',
					'text':'王牌竞速',
					'bg':'img/a6c9f153-9a47-4b7a-9657-5abf98ab7980.jpg'
				},
				{
					"title":'零号任务',
					'text':'2V4手游对抗抢先',
					'bg':'img/b44514e7-2e31-4567-8e75-2b9ea9583e4e.jpg'
				}
			];
			//按钮切换
			var banner_prev_btn = this.$('.banner_prev_btn')[0];
			var banner_next_btn = this.$('.banner_next_btn')[0];
			var temp1;
			var temp2;
			banner_prev_btn.onmouseenter = function(){
				temp1 = count -1;
				if (temp1 == -1) {
					temp1 = 4;
				}
				this.children[0].children[0].style.backgroundImage = 'url('+banner_btn_arr[temp1].bg+')';
				this.children[0].children[1].innerHTML = banner_btn_arr[temp1].title;
				this.children[0].children[2].innerHTML = banner_btn_arr[temp1].text;
			}
			banner_prev_btn.onclick = function(){
				imgSwitching(temp1);
				count=temp1;
				temp1 = count -1;
				if (temp1 == -1) {
					temp1 = 4;
				}
				this.children[0].children[0].style.backgroundImage = 'url('+banner_btn_arr[temp1].bg+')';
				this.children[0].children[1].innerHTML = banner_btn_arr[temp1].title;
				this.children[0].children[2].innerHTML = banner_btn_arr[temp1].text;
				img_timeing_Switching();
			}
			banner_next_btn.onmouseenter = function(){
				temp2 = count +1;
				if (temp2 == 5) {
					temp2 = 0;
				}
				this.children[0].children[0].style.backgroundImage = 'url('+banner_btn_arr[temp2].bg+')';
				this.children[0].children[1].innerHTML = banner_btn_arr[temp2].title;
				this.children[0].children[2].innerHTML = banner_btn_arr[temp2].text;
			}
			banner_next_btn.onclick = function(){
				imgSwitching(temp2);
				count=temp2;
				temp2 = count +1;
				if (temp2 == 5) {
					temp2 = 0;
				}
				this.children[0].children[0].style.backgroundImage = 'url('+banner_btn_arr[temp2].bg+')';
				this.children[0].children[1].innerHTML = banner_btn_arr[temp2].title;
				this.children[0].children[2].innerHTML = banner_btn_arr[temp2].text;
				img_timeing_Switching();
			}
			// 定义图片切换函数
			function imgSwitching(index){
				//消除activ外其他小点
				for (var j = 0; j < banner_choice_spot.length; j++) {
					if(banner_choice_spot[j].className == 'active'){
						banner_choice_spot[j].className = '';
						break;
					}
				}
				banner_choice_spot[index].className='active';
				//图片交替渐变效果
				for (var j = 0; j < banner_ul_allLi.length; j++) {
					banner_ul_allLi[j].style.opacity = 0;
					banner_ul_allLi[j].style.transition = '1.6s';
					clearTimeout(timer);
					timer = setTimeout(function(){
						banner_ul_allLi[j].style.display = 'none';
					},0);
				}
				banner_ul_allLi[index].style.display = 'block';
				clearTimeout(timer);
				timer = setTimeout(function(){
					this.style.transition = '1s';
					this.style.opacity = '1';
				}.bind(banner_ul_allLi[index]),0);
			}
			//每一个小点绑定图片切换函数 imgSwitching()
			for (var i = 0; i < banner_choice_spot.length; i++) {
				banner_choice_spot[i].index = i;
				banner_choice_spot[i].onclick =function(){
					imgSwitching(this.index);
					count=this.index;
					img_timeing_Switching();
				};
			}
			var count = 0;
			img_timeing_Switching();
			// 定义图片定时切换函数
			function img_timeing_Switching(){
				clearInterval(time_poll);
				time_poll = setInterval(function(){
					if (count>=banner_choice_spot.length) {
						count=0;
					}
					imgSwitching(count);
					count++;
				},5000);
				var obj = new Object();
			}

		},
		'bannerMenuEt':function(){
			var banner_menu_gameList = this.$('.banner_menu_gameList')[0];
			var menu_gameList = banner_menu_gameList.children;

			var banner_menu_mid = this.$('.banner_menu_mid')[0];
			var banner_menu_mid_li = banner_menu_mid.children;

			for (var j = 0; j < menu_gameList.length; j++) {
				menu_gameList[j].index = j;
				menu_gameList[j].onclick = function(){
					for (var i = 0; i < menu_gameList.length; i++) {
						menu_gameList[i].className = '';
						banner_menu_mid_li[i].className = '';
					}
					this.className = 'active';
					banner_menu_mid_li[this.index].className = 'active';
				}
			}
		},
		'OfficialGroupMagic':function(){
			var OfficialGroup_book = this.$('.OfficialGroup_book')[0];
			OfficialGroup_book.innerHTML += OfficialGroup_book.innerHTML;
			var OfficialGroup_book_li = this.$('.OfficialGroup_book li');
			var box_left_btn = this.$('.OfficialGroup .OfficialGroup_box .box_left_btn')[0];
			var box_right_btn = this.$('.OfficialGroup .OfficialGroup_box .box_right_btn')[0];
			var bool = true;
			var timer = null;
			function clearActive(){
				for (var i = 0; i < OfficialGroup_book_li.length; i++) {
					if (OfficialGroup_book_li[i].className == 'active') {
						OfficialGroup_book_li[i].className = '';
						break;
					}
				}
			}
			OfficialGroup_book.style.width = 162*OfficialGroup_book_li.length +'px';
			for (var i = 0; i < OfficialGroup_book_li.length; i++) {
				OfficialGroup_book_li[i].onmouseenter = function(){
					clearActive();
					this.className = 'active';
				}
			}
			var index = 0;
			box_left_btn.onclick = function(){
				if (!bool) {return;}
				bool = false;
				clearActive();
				if (index == -13) {
					index = -5;
					OfficialGroup_book.style.left=162*index+ 'px';
				}else if(index==0){
					OfficialGroup_book.style.transition = '0s';
					OfficialGroup_book.style.left=162*-18+ 'px';
					setTimeout(function(){
						OfficialGroup_book.style.transition = '1s';
						index = -13;
						OfficialGroup_book.style.left=162*index+ 'px';
					},10);
				}else{
					index +=5;
					OfficialGroup_book.style.left=162*index+ 'px';
				}
				
				setTimeout(function(){
						bool = true;
				},1100);
			}
			box_right_btn.onclick = function(){
				if (!bool) {return;}
				bool = false;
				clearActive();
				if (index == -10) {
					index -= 3;
				}else{
					index-=5;
				}
				OfficialGroup_book.style.left=162*index+ 'px';
				if (index == -18){
					setTimeout(function(){
						OfficialGroup_book.style.transition='0s';
						OfficialGroup_book.style.left=0;
						index=0;
					},1000);
					setTimeout(function(){
						OfficialGroup_book.style.transition='1s';
					},1010);
				}
				setTimeout(function(){
						bool = true;
				},1100);
			}
			clearInterval(timer);
			timer=setInterval(box_right_btn.onclick,5000);
			OfficialGroup_book.onmouseenter=function(){
				clearInterval(timer);
			}
			OfficialGroup_book.onmouseleave=function(){
				clearInterval(timer);
				timer=setInterval(box_right_btn.onclick,5000);
			}
		},
		'hotGameMagic':function(){
			var rotationBtn = this.$('.games_box .hot_games .title .rotation')[0];
			var hot_games_ul_li = this.$('.games_box .hot_games .hot_games_ul li');
			var hot_games_arr=[
				{
					'img':'img/hot_game_minecraft.jpg',
					'title':'《我的世界》',
					'text':'《我的世界》植树节专题组件正式上线！与家人朋友一起来方块世界过植树节吧！',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/hot_game_minecraft.jpg',
					'title':'《我的世界》',
					'text':'《我的世界》植树节专题组件正式上线！与家人朋友一起来方块世界过植树节吧！',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/hot_game_minecraft.jpg',
					'title':'《我的世界》',
					'text':'《我的世界》植树节专题组件正式上线！与家人朋友一起来方块世界过植树节吧！',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/hot_game_minecraft.jpg',
					'title':'《我的世界》',
					'text':'《我的世界》植树节专题组件正式上线！与家人朋友一起来方块世界过植树节吧！',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/hot_game_minecraft.jpg',
					'title':'《我的世界》',
					'text':'《我的世界》植树节专题组件正式上线！与家人朋友一起来方块世界过植树节吧！',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/hot_game_minecraft.jpg',
					'title':'《我的世界》',
					'text':'《我的世界》植树节专题组件正式上线！与家人朋友一起来方块世界过植树节吧！',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/b61b7667-9683-4d63-be45-8b61f79d2baf.jpg',
					'title':'《有杀气童话2》',
					'text':'《有杀气童话2》元宵佳节活动开启！全新限定外观上线，换上新装闹元宵~',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/b61b7667-9683-4d63-be45-8b61f79d2baf.jpg',
					'title':'《有杀气童话2》',
					'text':'《有杀气童话2》元宵佳节活动开启！全新限定外观上线，换上新装闹元宵~',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/b61b7667-9683-4d63-be45-8b61f79d2baf.jpg',
					'title':'《有杀气童话2》',
					'text':'《有杀气童话2》元宵佳节活动开启！全新限定外观上线，换上新装闹元宵~',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/b61b7667-9683-4d63-be45-8b61f79d2baf.jpg',
					'title':'《有杀气童话2》',
					'text':'《有杀气童话2》元宵佳节活动开启！全新限定外观上线，换上新装闹元宵~',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/b61b7667-9683-4d63-be45-8b61f79d2baf.jpg',
					'title':'《有杀气童话2》',
					'text':'《有杀气童话2》元宵佳节活动开启！全新限定外观上线，换上新装闹元宵~',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/b61b7667-9683-4d63-be45-8b61f79d2baf.jpg',
					'title':'《有杀气童话2》',
					'text':'《有杀气童话2》元宵佳节活动开启！全新限定外观上线，换上新装闹元宵~',
					'ewm':'img/edced6c8-5630-4437-ab8e-fcd1bed4a177.png'
				},
				{
					'img':'img/46dff49f-0696-4678-874f-007e2b93fffe.jpg',
					'title':'《第五人格》',
					'text':'《第五人格》新春版本现已开启，春节活动“灯影遂愿”、调香师虚妄杰作时装等重磅更新开启。',
					'ewm':'img/d9adfb14-14f7-4e95-a57b-9acc8f5e37ae.png'
				},
				{
					'img':'img/46dff49f-0696-4678-874f-007e2b93fffe.jpg',
					'title':'《第五人格》',
					'text':'《第五人格》新春版本现已开启，春节活动“灯影遂愿”、调香师虚妄杰作时装等重磅更新开启。',
					'ewm':'img/d9adfb14-14f7-4e95-a57b-9acc8f5e37ae.png'
				},
				{
					'img':'img/46dff49f-0696-4678-874f-007e2b93fffe.jpg',
					'title':'《第五人格》',
					'text':'《第五人格》新春版本现已开启，春节活动“灯影遂愿”、调香师虚妄杰作时装等重磅更新开启。',
					'ewm':'img/d9adfb14-14f7-4e95-a57b-9acc8f5e37ae.png'
				},{
					'img':'img/46dff49f-0696-4678-874f-007e2b93fffe.jpg',
					'title':'《第五人格》',
					'text':'《第五人格》新春版本现已开启，春节活动“灯影遂愿”、调香师虚妄杰作时装等重磅更新开启。',
					'ewm':'img/d9adfb14-14f7-4e95-a57b-9acc8f5e37ae.png'
				}
			];
			var index = 0;
			var bool = true;
			rotationBtn.onclick = function(){
				if (!bool) {return;}
				bool = false;
				for (var i = 0; i < hot_games_ul_li.length; i++) {
					/*setTimeout(function(){
						hot_games_ul_li[this].classList.add('scale');
					}.bind(i),i*100);*/
					if (index>=hot_games_arr.length) {index=0};
					(function(j,index){
						setTimeout(function(){
							hot_games_ul_li[j].classList.add('scale');
						},j*100);
						setTimeout(function(){
							setTimeout(function(){
								console.log(index);
								hot_games_ul_li[j].classList.remove('scale');
								hot_games_ul_li[j].children[1].innerHTML = hot_games_arr[index].title;
								hot_games_ul_li[j].children[0].children[1].src=hot_games_arr[index].img;
								hot_games_ul_li[j].children[0].children[0].style.background = 'url('+hot_games_arr[index].ewm+')';
							},j*100);
						},600);
					})(i,index);
					index++;
				}
				setTimeout(function(){
					bool = true;
				},1200);
			}
		},
		'gameTreeMagic':function(){
			var check_more = this.$('.Game_tree .Game_tree_button .check_more')[0];
			var Game_tree = this.$('.Game_tree')[0];
			var Game_tree_box = Game_tree.children[0];
			var Game_treeH = 614;
			var Game_treenewH = 900;
			var H = 460;
			var newH = 746;
			var bool = 1;
			check_more.onclick = function(){
				if (bool){
					bool = 0;
					Game_tree.style.height = Game_treenewH +'px';
					Game_tree_box.style.height =  newH +'px';
					setTimeout(function(){
						check_more.innerHTML = '收起';
					},300);
				}else{
					bool = 1;
					Game_tree.style.height = Game_treeH +'px';
					Game_tree_box.style.height =  H +'px';
					setTimeout(function(){
						check_more.innerHTML = '查看更多';
					},300);
				}
			}
			
		}
	}
	gameWeb.topBarEvent();
	gameWeb.bannerEvent();
	gameWeb.bannerMenuEt();
	gameWeb.OfficialGroupMagic();
	gameWeb.hotGameMagic();
	gameWeb.gameTreeMagic();
})();