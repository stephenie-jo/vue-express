import express from 'express';
import wechat from 'wechat'
import hello from './hello'



const wx_config = {
  token: 'bossyuan',
  appid: 'wxd39ef73d4a2c803d',
  encodingAESKey: 'DAw2EWuKGBggkBl9bngQRucW3nINZAIIrKm6tfNEl9O',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false 
};


export default app => {
	app.get('/', (req, res, next) => {
		res.render('index', { title: 'Express' })
	});
	app.post('/wechat', wechat(wx_config, function (req, res, next) {
	  // 微信输入信息都在req.weixin上 
	  var message = req.weixin;

	　　
	  console.log(message);
		if(message.MsgType === 'text')
		  {    
		      res.reply('这是一个自qwer动回复');    
		  }
		  else if(message.MsgType === 'voice')
		  {
		  }
		  else if(message.MsgType === 'image')
		  {
		    res.reply([
		      {
		        title: '文章提示',
		        description: '返回的是文章',
		        picurl: 'http://pic002.cnblogs.com/images/2011/159097/2011102917303125.jpg',
		        url: 'http://doxmate.cool/node-webot/wechat/api.html'
		      }
		    ]);
		  }  
	}));
	app.use('/wechat',wechat);
	app.use('/hello', hello)
}