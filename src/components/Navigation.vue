<template>
  <div id="nav">
    <div id="shortcut">
      <ul class="fl">
        <i id="coordinates"></i>
        广东
      </ul>
      <ul class="fr">
        <li id="ttbar-login">
          <a :href="login" target="_blank">你好，请登录</a>&nbsp;&nbsp;
          <a :href="register" id="register" target="_blank">免费注册</a>
        </li>
        <li class="spacer"></li>
        <li>
          <a :href="order" id="" target="_blank">我的订单</a>
        </li>
        <li class="spacer"></li>
        <li @mousemove="dropdowm" @mouseleave="dropdowmleave">
          <div v-if="myjd1" class="myjd1">
            <a :href="my" id="my" target="_blank" class="my">我的京东</a>
            <i id="down"></i>
          </div>
          <div v-if="myjd2" class="myjd2">
            <a :href="my" id="my" target="_blank">我的京东</a>
            <i id="down"></i>
          </div>
          <div class="dropdowm-layer" v-if="dropdowmif">
            <div class="myjdlist">
              <div class="fore1">
                <div class="item"><a href="#">待处理订单</a></div>
                <div class="item"><a href="#">返修退换货</a></div>
                <div class="item"><a href="#">降价商品</a></div>
              </div>
              <div class="fore2">
                <div class="item"><a href="#">我的问答</a></div>
                <div class="item"><a href="#">我的关注 </a></div>
              </div>
              <div></div>
            </div>
            <div class="myjdlist myjdlist_2">
              <div class="fore1">
                <div class="item"><a href="#">我的京豆</a></div>
                <div class="item"><a href="#">我的白条</a></div>
              </div>
              <div class="fore2">
                <div class="item"><a href="#">我的优惠券</a></div>
                <div class="item"><a href="#">我的理财 </a></div>
              </div>
            </div>
          </div>
        </li>
        <li class="spacer"></li>
        <li id="">
          <a :href="vip" id="" target="_blank">京东会员</a>
        </li>
        <li class="spacer"></li>

        <!-- 企业采购 -->
        <li id="" @mousemove="purchasedowm" @mouseleave="purchaseleave">
          <div v-if="purchase1" class="purchase1">
            <a :href="enterprisepurchase" id="my" target="_blank" class="my"
              >企业采购</a
            >
            <i id="down"></i>
          </div>
          <div v-if="purchase2" class="purchase2">
            <a
              :href="enterprisepurchase"
              id="my "
              target="_blank"
              class="register"
              >企业采购</a
            >
            <i id="down"></i>
          </div>
          <div class="purchasedowm-layer" v-if="purchaseif">
            <div class="purchaselist">
              <div><a>企业购</a></div>
              <div><a>公共频道</a></div>
              <div><a>工业品</a></div>
              <div><a>商用场景馆</a></div>
              <div><a>礼品卡</a></div>
              <div><a>微信企业购</a></div>
              <div><a>工品优选</a></div>
              <div><a>京东锦礼</a></div>
              <div><a>大中型客户采购</a></div>
            </div>
          </div>
        </li>
        <li class="spacer"></li>

        <!-- 客户服务 -->
        <li @mousemove="servedowm" @mouseleave="serveleave">
          <div v-if="serve1" class="customer1">
            <a :href="my" id="my" target="_blank" class="my">客服服务</a>
            <i id="down"></i>
          </div>
          <div v-if="serve2" class="customer2">
            <a :href="my" id="my" target="_blank">客服服务</a>
            <i id="down"></i>
          </div>
          <div class="customerdowm" v-if="serveif">
            <div class="customerdowm-layer">
              <div class="title">客户</div>
              <div class="customerlist">
                <div class="fore1">
                  <div class="itemdd"><a href="#">帮助中心</a></div>
                  <div class="itemdd"><a href="#">在线客服</a></div>
                  <div class="itemdd"><a href="#">电话客服</a></div>
                  <div class="itemdd"><a href="#">金融咨询</a></div>
                  <div class="itemdd"><a href="#">企业客服</a></div>
                </div>
                <div class="fore2">
                  <div class="itemdd"><a href="#">售后服务</a></div>
                  <div class="itemdd"><a href="#">意见建议 </a></div>
                  <div class="itemdd"><a href="#">客服邮箱 </a></div>
                  <div class="itemdd"><a href="#">全球售客服 </a></div>
                </div>
                <div></div>
              </div>
              <div class="customerlist_2">
                <div class="title">商户</div>
                <div class="customerlist">
                  <div class="fore1">
                    <div class=""><a href="#">合作招商</a></div>
                    <div class=""><a href="#">商家后台</a></div>
                    <div class=""><a href="#">商家帮助 </a></div>
                  </div>
                  <div class="fore2">
                    <div class=""><a href="#"> 成长中心 </a></div>
                    <div class=""><a href="#"> 京麦工作台 </a></div>
                    <div class=""><a href="#">规则平台 </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="spacer"></li>

        <!-- 网站导航 -->
        <li @mousemove="navigationdowm" @mouseleave="navigationleave">
          <div v-if="navigation1" class="customer1">
            <a :href="my" id="navigationurl" target="_blank" class="my"
              >网站导航</a
            >
            <i id="down"></i>
          </div>
          <div v-if="navigation2" class="customer2">
            <a href="#" id="navigationurl" target="_blank">网站导航</a>
            <i id="down"></i>
          </div>
          <div class="navigationdowm" v-if="navigationif">
            <div class="navigationdowm-layer">
              <!-- 特色主题 -->
              <div class="navigationlist_2">
                <div class="title">特色主题</div>
                <div class="navigationlist-fore1">
                  <div class="">
                    <div class="itemdd"><a href="#">新品首发</a></div>
                    <div class="itemdd"><a href="#">京东会员</a></div>
                    <div class="itemdd"><a href="#">港澳售</a></div>
                    <div class="itemdd"><a href="#">印尼站</a></div>
                    <div class="itemdd"><a href="#">买什么</a></div>
                  </div>
                  <div class="">
                    <div class="itemdd"><a href="#"> 京东金融 </a></div>
                    <div class="itemdd"><a href="#">台湾售 </a></div>
                    <div class="itemdd"><a href="#">优惠券 </a></div>
                    <div class="itemdd"><a href="#">陪伴计划 </a></div>
                  </div>
                  <div>
                    <div class="itemdd"><a href="#"> 全球售 </a></div>
                    <div class="itemdd"><a href="#">俄语站 </a></div>
                    <div class="itemdd"><a href="#">秒杀 </a></div>
                    <div class="itemdd"><a href="#"> 出海招商</a></div>
                  </div>
                  <div>
                    <div class="itemdd"><a href="#"> 国际站 </a></div>
                    <div class="itemdd"><a href="#">装机大师 </a></div>
                    <div class="itemdd"><a href="#">闪购 </a></div>
                    <div class="itemdd"><a href="#"> 拍拍二手</a></div>
                  </div>
                </div>
              </div>
              <!-- 行业频道 -->
              <div class="navigationlist_2">
                <div class="title">行业频道</div>
                <div class="navigationlist-fore2">
                  <div class="fore1">
                    <div class=""><a href="#">手机</a></div>
                    <div class=""><a href="#">家用电器</a></div>
                    <div class=""><a href="#">京东生鲜</a></div>
                    <div class=""><a href="#">食品</a></div>
                    <div class=""><a href="#">图书</a></div>
                  </div>
                  <div class="fore2">
                    <div class=""><a href="#"> 智能数码</a></div>
                    <div class=""><a href="#"> 京东小家 </a></div>
                    <div class=""><a href="#"> 家装城 </a></div>
                    <div class=""><a href="#"> 农贸频道 </a></div>
                    <div class=""><a href="#">劳动防护 </a></div>
                  </div>
                  <div class="fore3">
                    <div class=""><a href="#"> 电脑办公</a></div>
                    <div class=""><a href="#"> 京东服饰 </a></div>
                    <div class=""><a href="#"> 母婴 </a></div>
                    <div class=""><a href="#"> 整车 </a></div>
                  </div>
                </div>
              </div>
              <!--生活服务  -->
              <div class="navigationlist_2">
                <div class="title">生活服务</div>
                <div class="navigationlist-fore3">
                  <div class="fore1">
                    <div class=""><a href="#">京东众筹</a></div>
                    <div class=""><a href="#">京东小金库</a></div>
                    <div class=""><a href="#">水煤电</a></div>
                    <div class=""><a href="#">机票酒店</a></div>
                    <div class=""><a href="#">游戏</a></div>
                  </div>
                  <div class="fore2">
                    <div class=""><a href="#"> 白条</a></div>
                    <div class=""><a href="#"> 理财 </a></div>
                    <div class=""><a href="#"> 彩票 </a></div>
                    <div class=""><a href="#"> 电影票 </a></div>
                    <div class=""><a href="#">拍拍回收 </a></div>
                  </div>
                  <div class="fore3">
                    <div class=""><a href="#">京东金融App</a></div>
                    <div class=""><a href="#"> 话费 </a></div>
                    <div class=""><a href="#"> 旅行 </a></div>
                    <div class=""><a href="#"> 京东到家 </a></div>
                  </div>
                </div>
              </div>
              <!-- 更多精选 -->
              <div class="navigationlist_2">
                <div class="title">更多精选</div>
                <div class="navigationlist-fore4">
                  <div class="fore1">
                    <div class=""><a href="#">合作招商</a></div>
                    <div class=""><a href="#"> 企业采购 </a></div>
                    <div class=""><a href="#">校园加盟 </a></div>
                    <div class=""><a href="#">知识产权维权 </a></div>
                    <div class=""><a href="#">京东数料保险</a></div>
                  </div>
                  <div class="fore2">
                    <div class=""><a href="#"> 京东通信 </a></div>
                    <div class=""><a href="#">服务市场 </a></div>
                    <div class=""><a href="#"> 京东社区 </a></div>
                    <div class=""><a href="#"> 关于我们 </a></div>
                  </div>
                  <div class="fore3">
                    <div class=""><a href="#"> 京东E卡 </a></div>
                    <div class=""><a href="#"> 办公生活馆 </a></div>
                    <div class=""><a href="#">装机大师 </a></div>
                    <div class=""><a href="#">京东安联保险 </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="spacer"></li>
        <!-- 手机京东 -->
        <li @mousemove="mobilephonedowm" @mouseleave="mobilephoneleave">
          <div v-if="mobilephone1" class="mobilephone1">
            <a :href="my" id="navigationurl" target="_blank" class="my"
              >手机京东</a
            >
            <i id="down"></i>
          </div>
          <div v-if="mobilephone2" class="mobilephone2">
            <a href="#" id="navigationurl" target="_blank">手机京东</a>
            <i id="down"></i>
          </div>
          <!-- 下拉框 -->
          <div class="mobilephonedowm" v-if="mobilephoneif">
            <div class="mobilephonedowm-layer">
              <!-- 第一行 -->
              <div class="first-dd">
                <div class="img-dd">
                  <img src="../img/01.webp" />
                </div>
                <div class="list">
                  <div class="list-title">手机京东</div>
                  <a class="list-news">新人专享大礼包</a>
                  <div class="list-dd">
                    <div>ip</div>
                    <div>ad</div>
                    <div>ipad</div>
                  </div>
                </div>
              </div>
              <!-- 第二行 -->
              <div class="first">
                <div class="img-dd">
                  <img src="../img/02.webp" />
                </div>
                <div class="list">
                  <div class="list-title">关注京东</div>
                  <div class="list-title">JD.COM</div>
                  <a class="list-news">抢5元红包</a>
                  
                </div>
              </div>
              <!-- 第三行 -->
              <div class="first">
                <div class="img-dd">
                  <img src="../img/03.webp" />
                </div>
                <div class="list">
                  <div class="list-title">京东金融客户端</div>
                  <a class="list-news">新人专享大礼包</a>
                  <div class="list-dd">
                    <div>ip</div>
                    <div>ad</div>
                  </div>
                </div>
              </div>
              <!-- 第四行 -->
              <div class="first">
                <div class="img-dd">
                  <img src="../img/04.webp" />
                </div>
                <div class="list">
                  <div class="list-title">京东健康客户端</div>
                  <div class="list-dd">
                    <div>ip</div>
                    <div>ad</div>
                  </div>
                </div>
              </div>
              <!-- 第五行 -->
              <div class="first">
                <div class="img-dd">
                  <img src="../img/05.webp" />
                </div>
                <div class="list">
                  <div class="list-title">关注京东小程序</div>
                  <a class="list-news">新人0.1元购</a>
                </div>
              </div>
              
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li class="spacer"></li>
        <li id="">
          <a :href="disorder" id="" target="_blank">网站无障碍</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./js/Navigation.js"></script>
<style src="./css/Navigation.css" scoped></style>
