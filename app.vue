<template>
    <div>
        <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">欢迎您</h1>
		</header>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">{{tabbar1}}</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">{{tabbar2}}</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">{{tabbar3}}</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">{{tabbar4}}</span>
			</a>
		</nav>
		<div class="mui-content">
			<div id="tabbar" class="mui-control-content mui-active">
				<div class="">
                    <div class="mui-slider">
                    <div class="mui-slider-group mui-slider-loop">
                         <div class="mui-slider-item"><a href="#"><img src="/img/8.jpg"/></a></div>
                        <div class="mui-slider-item"><a href="#"><img src="/img/4.jpg" /></a></div>
                        <div class="mui-slider-item"><a href="#"><img src="/img/5.jpg" /></a></div>
                        <div class="mui-slider-item"><a href="#"><img src="/img/6.jpg"/></a></div>
                        <div class="mui-slider-item"><a href="#"><img src="/img/7.jpg" /></a></div>
                        <div class="mui-slider-item"><a href="#"><img src="/img/4.jpg" /></a></div>
                    </div>
                    </div>
                </div>
                <br>
                <router-link to="/login">
                    <button class="mint-button mint-button--primary mint-button--large"><!----> 
                    <label class="mint-button-text">登录</label>
                </button>
                </router-link>
                <br>
                <button class="mint-button mint-button--danger mint-button--large"><!----> 
                    <label class="mint-button-text">退出</label>
                </button>
			</div>
			<div id="tabbar-with-chat" class="mui-control-content">
				<div class="title">这是div模式选项卡中的第2个子页面，该页面展示一个消息列表</div>
				
			</div>
			<div id="tabbar-with-contact" class="mui-control-content">
				<div class="title">这是div模式选项卡中的第3个子页面，该页面展示一个通讯录示例.</div>

			</div>
			<div id="tabbar-with-map" class="mui-control-content">
				<div class="title">这是div模式选项卡中的第4个子页面，该页面展示一个常见的设置示例.</div>
				<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						新消息通知
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						隐私
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						通用
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						关于mui
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
					<a style="text-align: center;color: #FF3B30;">
						退出登录
					</a>
				</li>
			</ul>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            tabbar1 : "首页" ,
            tabbar2 : "消息" ,
            tabbar3 : "通讯录" ,
            tabbar4 : "设置" ,
        }
    },
    methods : {
       
    }
}
</script>

<style scoped lang="scss">
.title{
margin: 20px 15px 10px;
color: #6d6d72;
font-size: 15px;
}

.oa-contact-cell.mui-table .mui-table-cell {
padding: 11px 0;
vertical-align: middle;
}

.oa-contact-cell {
position: relative;
margin: -11px 0;
}

.oa-contact-avatar {
width: 75px;
}
.oa-contact-avatar img {
border-radius: 50%;
}
.oa-contact-content {
width: 100%;
}
.oa-contact-name {
margin-right: 20px;
}
.oa-contact-name, oa-contact-position {
float: left;
}
</style>

