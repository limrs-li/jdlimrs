export default {
    data: function () {
       return {
         count: 0,
         dropdowmif:false,
         myjd1:false,
         myjd2:true,
         purchase1:false,
         purchase2:true,
         purchaseif:false,
         serve1:false,
         serve2:true,
         serveif:false,
         navigation1:false,
         navigation2:true,
         navigationif:false,
         mobilephone1:false,
         mobilephone2:true,
         mobilephoneif:false,
       }
     },
     computed:{
       login:function(){
         var loginurl = "https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dwww.tongbuxing.com%26utm_medium%3Dtuiguang%26utm_campaign%3Dt_2018371160_%26utm_term%3D015edd4068d947ef88cdecebe72932cd"
         return loginurl
       },
       register:function(){
         var registerurl = "https://reg.jd.com/reg/person?ReturnUrl=https%3A//www.jd.com/%3Fcu%3Dtrue%26utm_source%3Dwww.tongbuxing.com%26utm_medium%3Dtuiguang%26utm_campaign%3Dt_2018371160_%26utm_term%3D015edd4068d947ef88cdecebe72932cd"
         return registerurl
       },
       order:function(){
         var orderurl = "https://passport.jd.com/uc/login?ReturnUrl=https%3A%2F%2Forder.jd.com%2Fcenter%2Flist.action"
         return orderurl
       },
       my:function(){
         var myurl = "https://passport.jd.com/new/login.aspx?ReturnUrl=http%3A%2F%2Fhome.jd.com%2F"
         return myurl
       },
       vip:function(){
         var myurl = "https://passport.jd.com/uc/login?ReturnUrl=http%3A%2F%2Fvip.jd.com%2Fhome.html"
         return myurl
       },
       disorder:function(){
          var disorderurl = "https://passport.jd.com/uc/login?ReturnUrl=http%3A%2F%2Fvip.jd.com%2Fhome.html"
         return disorderurl
       },
       enterprisepurchase:function(){
        var disorderurl = "https://b.jd.com/"
        return disorderurl
     },
        
     },
     methods: {
       dropdowm:function(){
         this.dropdowmif = true
         this.myjd1 = true
         this.myjd2 = false
       },
       dropdowmleave:function(){
         this.myjd1 = false
         this.myjd2 = true
         this.dropdowmif = false
       },
       purchasedowm:function(){
        this.purchaseif = true
        this.purchase1 = true
        this.purchase2 = false
      },
      purchaseleave:function(){
        this.purchase1 = false
        this.purchase2 = true
        this.purchaseif = false
      },
      servedowm:function(){
        this.serveif = true
        this.serve1 = true
        this.serve2 = false
      },
      serveleave:function(){
        this.serve1 = false
        this.serve2 = true
        this.serveif = false
      },
      navigationdowm:function(){
        this.navigationif = true
        this.navigation1 = true
        this.navigation2 = false
      },
      navigationleave:function(){
        this.navigation1 = false
        this.navigation2 = true
        this.navigationif = false
      },
      mobilephonedowm:function(){
        this.mobilephoneif = true
        this.mobilephone1 = true
        this.mobilephone2 = false
      },
      mobilephoneleave:function(){
        this.mobilephone1 = false
        this.mobilephone2 = true
        this.mobilephoneif = false
      },
     }
   }